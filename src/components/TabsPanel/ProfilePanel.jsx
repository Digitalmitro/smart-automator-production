import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import Cookies from "js-cookie";
import profile from "../../assets/profile1.png";
import "../Styles/Profile.scss";
import axios from "axios";
import { useEffect } from "react";


import { useNavigate } from "react-router-dom";
import { createStyles, useTheme } from 'antd-style';
import { Row, Col, Button, ConfigProvider, Modal, Space, Form, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export const ProfilePanel = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  // const decodedToken = token && jwtDecode(token);
  // const user_id = decodedToken?._id;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [zipCode, setZipCode] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [toggleUpdate, settoggleUpdate] = useState(false);
  const [callApi, setCallApi] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
  });


  const [isModalOpen, setIsModalOpen] = useState(false);

  // const token = useTheme();
  const toggleModal = (idx, target) => {
    setIsModalOpen(false);
  };


  // const getUser = async () => {
  //   await axios
  //     .get(`${import.meta.env.VITE_SOME_KEY}/get-client`, {
  //       headers: { token },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setUser(res.data.user);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // const handleClientsDetails = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const payload = {
  //       firstName: user.firstName,
  //       lastName: user.lastName,
  //       zip: user.zip,
  //       phone: user.phone,
  //       email: user.email,
  //       newPassword: newPassword,
  //       oldPassword: oldPassword,
  //     };
  //     const response = await axios.put(
  //       `${import.meta.env.VITE_SOME_KEY}/updateclient`,
  //       payload,
  //       { headers: { token } }
  //     );

  //     console.log(response);

  //     if (response.status === 200) {
  //       setCallApi(!callApi);
  //       message.success("Profile Updated successfully");
  //       // setTimeout(() => {
  //       //   window.location.reload();
  //       // }, 1200); // 1.2 seconds
  //     } else {
  //       message.error("An error occurred while updating the profile");
  //     }
  //   } catch (e) {
  //     message.error(e.response.data.error);
  //   }
  // };

  // useEffect(() => {
  //   if (token) {
  //     getUser();
  //   } else {
  //     return navigate("/login");
  //   }
  // }, [token, callApi]);


  return (
    <>
      {user ? (
        <>
          <div>
            <div className="container profile">
              <div className="profile-grid row mt-5 ">
                <div className="profile-info">
                  <div className="col-img">
                    <img src={profile} />
                  </div>
                  <div className="info col-md-6">

                    <p >
                      {/* {user?.firstName.toUpperCase()}{" "}
                      {user?.lastName.toUpperCase()}
                       */}
                      <span>kajal gupta</span>
                    </p>
                    <ul
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      {/* <li>{user?.email}</li>
                      <li>{user?.phone}</li>
                       */}

                      <li><span><b>Email :</b> </span>  <span>kajl@gmail.com </span></li>
                      <li><span><b>Number :</b> </span> <span>21765 34876 345</span></li>
                    </ul>
                  </div>
                </div>

                <div
                  className=" d-flex  align-items-center justify-content-end"
                  style={{ gap: "2rem" }}
                >
                  <button
                    className="profile-btn"
                    type="button"
                    style={{ width: "100px", height: "35px", fontSize: "13px" }}
                    onClick={() => setIsModalOpen(true)}


                  >
                    EDIT PROFILE
                  </button>
                  <AntDrawer isModalOpen={isModalOpen} toggleModal={toggleModal} />
                </div>
              </div>
            </div>
          </div>

          {/* updates modal code  */}
          {toggleUpdate && (
            <div className=" updateProfile container">
              <h2 className="py-3">Manage Profile</h2>
              <div className="profileDetails">
                <>
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        First Name
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        value={user.firstName}
                        onChange={(e) =>
                          setUser({ ...user, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                        value={user.lastName}
                        onChange={(e) =>
                          setUser({ ...user, lastName: e.target.value })
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">
                        Confirm Email <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div class="col-md-4">
                      <label for="inputState" class="form-label">
                        Phone
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        id="inputCity"
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                      />
                    </div>
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        value={user.zip}
                        onChange={(e) =>
                          setUser({ ...user, zip: e.target.value })
                        }
                      />
                    </div>
                  </form>
                  <p class="text-warning pt-5 py-2">Change Password</p>
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Old Password <span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputEmail4"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="btn"
                        class="btn btn-warning text-white"
                        onClick={handleClientsDetails}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </>
              </div>
            </div>
          )}
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

const AntDrawer = ({ isModalOpen, toggleModal }) => {

  const modalStyles = {
    header: {
      // borderLeft: `5px solid ${token.colorPrimary}`,
      borderRadius: 0,
      paddingInlineStart: 5,
      
    },
    body: {
      boxShadow: 'inset 0 0 5px #999',
      borderRadius: 5,
      padding:20,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };

  const useStyle = createStyles(({ token }) => ({
    'my-modal-body': {
      background: token.blue1,
      padding: token.paddingSM,
    },
    'my-modal-mask': {
      boxShadow: `inset 0 0 15px #fff`,
    },
    'my-modal-header': {
      borderBottom: `1px dotted ${token.colorPrimary}`,
    },
    'my-modal-footer': {
      color: token.colorPrimary,
    },
    'my-modal-content': {
      border: '1px solid #333',
    },
  }));
  const { styles } = useStyle();
  const classNames = {
    body: styles['my-modal-body'],
    mask: styles['my-modal-mask'],
    header: styles['my-modal-header'],
    footer: styles['my-modal-footer'],
    content: styles['my-modal-content'],
  };


  const handleFinish = async (values) => {
    try {
      // Assume API endpoint here for updating profile
      await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/updateclient`,
        values,
        { headers: { token: localStorage.getItem("token") } }
      );
      message.success("Profile Updated successfully");
      toggleModal(false);
    } catch (e) {
      message.error("An error occurred while updating the profile");
    }
  };


  const handleProfileUpdate = async (values) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/updateclient`,
        values,
        { headers: { token: localStorage.getItem("token") } }
      );
      message.success("Profile Updated successfully");
      toggleModal(false);
    } catch (e) {
      message.error("An error occurred while updating the profile");
    }
  };

  const handlePasswordChange = async (values) => {
    try {
      // Validate old password before updating
      const passwordCheckResponse = await axios.post(
        `${import.meta.env.VITE_SOME_KEY}/validate-password`,
        { oldPassword: values.oldPassword },
        { headers: { token: localStorage.getItem("token") } }
      );

      if (!passwordCheckResponse.data.valid) {
        message.error("Old password is incorrect");
        return;
      }

      await axios.put(
        `${import.meta.env.VITE_SOME_KEY}/update-password`,
        { newPassword: values.newPassword },
        { headers: { token: localStorage.getItem("token") } }
      );
      message.success("Password updated successfully");
      toggleModal(false);
    } catch (e) {
      message.error("An error occurred while changing the password");
    }
  };


  return (
    <div>
      <Modal
      title="Edit Profile"
      open={isModalOpen}
      onOk={() => toggleModal(false)}
      onCancel={() => toggleModal(false)}
      classNames={classNames}
      width="650px"
      footer={null}
      styles={modalStyles}
    >
      <Form
        layout="vertical"
        onFinish={handleProfileUpdate}
        initialValues={{
          firstName: "Kajal",
          lastName: "Gupta",
          email: "kajl@gmail.com",
          phone: "2176534876",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input type="tel" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
       
        <Col span={12}>
        <Form.Item label="Profile Photo" name="profilePhoto">
          <Upload>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
          </Form.Item>
       </Col>
          <Col span={10}>
          <Form.Item style={{marginTop:"23px"}}>
          <Button type="primary" htmlType="submit" block>
            Update Profile
          </Button>
          </Form.Item>
          </Col>
       
       

</Row>
      
        
      </Form>

      <Form layout="vertical" onFinish={handlePasswordChange}
      style={{marginTop:"20px"}}>
        <h6>Change Password</h6>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Old Password"
              name="oldPassword"
              rules={[{ required: true, message: 'Please enter your old password' }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[{ required: true, message: 'Please enter your new password' }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row span={12}>
        <Col span={8}>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Change Password
          </Button>
        </Form.Item>
        </Col >
        </Row>

      </Form>
    </Modal>
    </div>
  )
}