import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const TaskerSignup = () => {
  const navigate = useNavigate();
  

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState();
  const handleRegister = async (e) => {
    e.preventDefault();

    const credentials = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      phone: phone,
      zip: zip,
    };
console.log(credentials)
    // try {
    // //   const response = await axios.post(
    // //     `${import.meta.env.VITE_SOME_KEY}/registerclient`,
    // //     credentials
    // //   );
    //   console.log(response);
    //   message.success(response.data, {});
    //   setTimeout(() => {
    //     navigate("/login");
    //   }, 1200);
    // } catch (error) {
    //   // message.warning(error.response.data.status, {});
    //   console.log(error);
    // }

    navigate("/login");

  };

  return (
    <>
      <section>
        <div className="container-fluid login-bg">
          <div className="container login-form-bg">
            <form class="login-form" onSubmit={handleRegister}>
              <h2 className="fw-bold"> Smart Automator</h2>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) =>
                    setFirstName( e.target.value)
                    
                  }
                />
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) =>
                    setLastName( e.target.value)
                  
                  }
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value )
                  }
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                
                 
                  type="number"
                  id="typeNumber"
                  class="form-control"
                  placeholder="Enter Phone No"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword( e.target.value
                    )
                  }
                />
              </div>

              <div class="form-group col-mb-4">
                <input
                  type="number"
                  class="form-control"
                  id="inputZip"
                  placeholder="ZipCode"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>

              <p className="text-center">
                By signing up you agree to our{" "}
                <span>
                  <a className="text-warning" href="">
                    TERMS OF USE{" "}
                  </a>
                </span>{" "}
                and{" "}
                <span>
                  <a className="text-warning" href="">
                    PRIVACY POLICY.{" "}
                  </a>
                </span>{" "}
              </p>

              <button
                type="submit"
                class="btn btn-warning text-center fw-bold mt-4 mb-4"
                style={{ width: "100%", color: "#fff" }}
              >
                Create Account
              </button>
              <div class="text-center">
                 have account ?
                <p>
                  <button
                    className="fw-bold"
                    style={{ border: "none" }}
                    onClick={() => navigate("/taskerlogin")}
                  >
                    Sign In
                  </button>{" "}</p>
                  <br></br>
          </div>
            </form>
          
          </div>
        </div>
      </section>
    </>
  );
};
export default TaskerSignup;
