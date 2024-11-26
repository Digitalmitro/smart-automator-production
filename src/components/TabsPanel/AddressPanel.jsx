import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/AddressPanel.scss";
import { Button, Drawer, Form, Input, Row, Col, Space, Modal, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { Api } from "../../network/Api";

export const AddressPanel = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decodeToken = token && jwtDecode(token);
  const userId = decodeToken?._id || null;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceid = searchParams.get("serviceid");
console.log("serviceid", serviceid )
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false); // State to track delete confirmation
  const [addressToDelete, setAddressToDelete] = useState(null); // Store address to delete
  const [currentAddress, setCurrentAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reloadAddresses, setReloadAddresses] = useState(false);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await Api.get(`/address/${userId}`);
      setAddresses(response.data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchAddresses();
    }
  }, [userId, reloadAddresses]);

  const showDrawer = (address = null) => {
    setOpen(true);
    if (address) {
      setCurrentAddress(address); // Set the address data if editing
    } else {
      setCurrentAddress(null); // Reset if creating a new address
    }
  };

  const handleDelete = (addressId) => {
    setAddressToDelete(addressId);
    setConfirmDelete(true); // Open confirmation modal
  };

  // Confirm the delete action
  const handleConfirmDelete = async () => {
    try {
      if (addressToDelete) {
        await Api.delete(`/address/${addressToDelete}`); // Call delete API
        message.success("Address deleted successfully");
        fetchAddresses(); // Refresh addresses after deletion
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    } finally {
      setConfirmDelete(false); // Close modal
    }
  };

  // Cancel the delete action
  const handleCancelDelete = () => {
    setConfirmDelete(false); // Close modal without deleting
  };

  const handleSetDefaultAddress = async (addressId) => {
    if (!userId || !addressId) return;

    try {
      // API call to set the default address
      const response = await axios.put(`${import.meta.env.VITE_SOME_KEY}/update-default-address`, {
        userId,
        addressId,
      });

      if (response.status === 200) {

      
        message.success("Default address changed successfully");
        fetchAddresses(); // Refresh addresses after setting default address
        if (serviceid) {
          // Handle the logic that is specific to coming from the service form page
          navigate(`/serviceform/${serviceid}`)
        }
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error updating default address:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="addressPanel">
      <h4>Saved Addresses</h4>
      {loading && <p>Loading addresses...</p>}
      {addresses.length > 0 ? (
        <table className="addressTable">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name & Type</th>
              <th style={{ width: "40%" }}>Delivery Address</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, index) => (
              <tr key={index}>
                <td>
                  <p><b>{address.name || "Name not provided"}</b></p>
                  <p><i>({address.addressType || "Address type not specified"})</i></p>
                </td>
                <td>
                  <p>{address.street || "Street not provided"}, {address.city || "City not provided"}</p>
                  <p>{address.state || "State not provided"} - {address.zip || "Zip not provided"}</p>
                  <p>{address.country || "Country not provided"}</p>
                </td>
                <td className="buttonList">
                  <button onClick={() => showDrawer(address)} className="editBtn">Edit</button>
                  <button className="delete" onClick={() => handleDelete(address._id)}>Delete</button>
                  <input
                    type="radio"
                    name="address"
                    id={`address${index}`}
                    checked={address.default}
                    onChange={() => handleSetDefaultAddress(address._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No addresses found. Add a new address.</p>
      )}
      <div className="newAddress">
        <button className="newAddressBtn" onClick={showDrawer}>
          New Address
        </button>
      </div>
      <AntDrawer setOpen={setOpen} open={open} userId={userId} currentAddress={currentAddress} setCurrentAddress={setCurrentAddress} fetchAddresses={fetchAddresses} />
      <Modal
        title="Confirm Deletion"
        visible={confirmDelete}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
        okText="Delete"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete this address?</p>
      </Modal>
    </div>
  );
};

const AntDrawer = ({ setOpen, open, userId, currentAddress, setCurrentAddress, fetchAddresses  }) => {
 
  const [form] = Form.useForm();
  const onClose = () => {
    setOpen(false);
    setCurrentAddress(null); // Reset currentAddress on drawer close
    form.resetFields();
  };

  useEffect(() => {
    if (currentAddress) {
      form.setFieldsValue(currentAddress); // Populate form fields with address data
    } else {
      form.resetFields(); // Reset the form if creating a new address
    }
  }, [form, currentAddress]);

  const onFinish = async (values) => {
    const dataWithUserId = { ...values, user_id: userId };
    try {
      if (currentAddress._id) {
        // Update the address
        await Api.put(`/address/${currentAddress._id}`, dataWithUserId);
        message.success("Address updated successfully");
      } else {
        // Create new address
        await Api.post("/address", dataWithUserId);
        message.success("New address created successfully");
      }
      fetchAddresses(); // Refresh addresses after update/create
    } catch (error) {
      console.error("Error saving address:", error);
    }
    onClose();
  };

  return (
    <Drawer
    title={currentAddress ? "Edit Address" : "New Address"}
      width={520}
      onClose={onClose}
      open={open}
      className="drawerHeaders"
    >
      <Form
        form={form}
        layout="vertical"
        hideRequiredMark
        onFinish={onFinish}
      >
        <Row gutter={20}>
          <Col span={20}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Enter Name" }]}
            >
              <Input placeholder="Enter Name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}>
            <Form.Item
              name="country"
              label="Country/Region"
              rules={[{ required: true, message: "Enter Country/Region" }]}
            >
              <Input placeholder="Enter Country/Region" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}>
            <Form.Item
              name="street"
              label="Street Address"
              rules={[{ required: true, message: "Enter Street Address" }]}
            >
              <Input placeholder="Enter Street Address" />
            </Form.Item>
          </Col>
          <Col span={20}>
            <Form.Item
              name="city"
              label="Town/City"
              rules={[{ required: true, message: "Enter the town/city" }]}
            >
              <Input placeholder="Enter town/city" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}>
            <Form.Item
              name="state"
              label="State"
              rules={[{ required: true, message: "Enter the state" }]}
            >
              <Input placeholder="Enter state" />
            </Form.Item>
          </Col>
          <Col span={20}>
            <Form.Item
              name="zip"
              label="zip"
              rules={[{ required: true, message: "Enter the zip" }]}
            >
              <Input placeholder="Enter zip" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={20}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: "Enter phone" }]}
            >
              <Input placeholder="Enter phone" />
            </Form.Item>
          </Col>

        </Row>
        <Col span={20}>
          <Form.Item
            name="addressType"
            label="Address Type"
            rules={[{ required: true, message: "Enter the address type" }]}
          >
            <Input placeholder="Enter address type" />
          </Form.Item>
        </Col>
        <Space>
          <Button onClick={onClose} className="cancelButton">
            Cancel
          </Button>
          <Button htmlType="submit" type="primary" className="submitButton">
            Submit
          </Button>
        </Space>
      </Form>
    </Drawer>
  );
};
