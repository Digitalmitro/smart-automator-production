import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AddressPanel.scss";
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, Row, Col, Space, Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress, createAddress, FetchAddressById, fetchAddresses, updateAddress } from "../../redux/profile/AddressSlice";
import { jwtDecode } from "jwt-decode";

export const AddressPanel = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const decodeToken = token && jwtDecode(token);
  const userId = decodeToken?._id || null;
  const [confirmDelete, setConfirmDelete] = useState(false); // State to track delete confirmation
  const [addressToDelete, setAddressToDelete] = useState(null); // Store address to delete
  const [currentAddress, setCurrentAddress] = useState(null);
  const dispatch = useDispatch();
  const { data: addresses, loading, error } = useSelector((state) => state.address);

  useEffect(() => {
    if (userId) {
      dispatch(FetchAddressById(userId)); // Fetch addresses using user ID
    }
  }, [dispatch, userId]);
  console.log("addresses", addresses)
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
  const handleConfirmDelete = () => {
    if (addressToDelete) {
      dispatch(deleteAddress(addressToDelete)); // Dispatch delete action
      setConfirmDelete(false); // Close modal
      dispatch(fetchAddresses(userId))
    }
  };
  // Cancel the delete action
  const handleCancelDelete = () => {
    setConfirmDelete(false); // Close modal without deleting
  };

 
  return (
    <div className="addressPanel">
      <h4>Saved Addresses</h4>
      {loading && <p>Loading addresses...</p>}
      {error && <p>Error fetching addresses: {error}</p>}
      {addresses && addresses[0]?.length > 0 ? (
        <table className="addressTable">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Name & Type</th>
              <th style={{ width: "40%" }}>Delivery Address</th>
              <th style={{ width: "20%" }}>Actions</th>

            </tr>
          </thead>
          <tbody>
            {addresses[0]?.map((address, index) => (
              <tr key={index}>
                <td>
                  <p>
                    <b>{address.name || "Name not provided"}</b>
                  </p>
                  <p>
                    <i>({address.addressType || "Address type not specified"})</i>
                  </p>
                </td>
                <td>
                  <p>
                    {address.street || "Street not provided"}, {address.city || "City not provided"}
                  </p>
                  <p>
                    {address.state || "State not provided"} - {address.zip || "zip not provided"}
                  </p>
                  <p>{address.country || "Country not provided"}</p>
                </td>
                <td className="buttonList">
                  <button  onClick={() => showDrawer(address)} className="editBtn">
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(address._id)} >Delete</button>
                  <input type="radio" name="address" id={`address${index}`} />
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
      <AntDrawer setOpen={setOpen} open={open} userId={userId}  currentAddress={currentAddress} />
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

const AntDrawer = ({ setOpen, open, userId, currentAddress }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };
  useEffect(() => {
    if (currentAddress) {
      form.setFieldsValue(currentAddress); // Populate form fields with address data
    } else {
      form.resetFields(); // Reset the form if creating a new address
    }
  }, [form, currentAddress]);



  const onFinish = (values) => {
    const dataWithUserId = { ...values, user_id: userId };
    if (currentAddress) {
      dispatch(updateAddress({ id: currentAddress._id, updatedData: dataWithUserId })); // Update the address
      dispatch(fetchAddresses(userId))
    } else {
      dispatch(createAddress(dataWithUserId)); // Create new address

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
