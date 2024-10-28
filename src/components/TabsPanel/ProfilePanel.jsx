import { jwtDecode } from "jwt-decode";
import React, { useState } from "react";
import Cookies from "js-cookie";
import profile from "../../assets/profile1.png";
import "../Styles/Profile.scss";
import axios from "axios";
import { useEffect } from "react";
import { message } from "antd";

import { useNavigate } from "react-router-dom";
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
                    style={{ width: "100px", height: "55px", fontSize: "13px" }}
                    onClick={() => settoggleUpdate((prev) => !prev)}
                  >
                    EDIT PROFILE
                  </button>
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
