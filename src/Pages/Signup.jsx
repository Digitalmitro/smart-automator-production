import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
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
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      zip: zip,
    };

    await axios
      .post(`${import.meta.env.VITE_SOME_KEY}/registerclient`, credentials)
      .then((res) => {
        console.log(res.data)
        navigate('/login')
      })
      .catch((e) => {
        console.log(e);
        message.warning("signup unsuccessful");
      });
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
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="number"
                  id="typeNumber"
                  class="form-control"
                  placeholder="Enter Phone No"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="password"
                  id="form2Example2"
                  class="form-control"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                    onClick={() => navigate("/login")}
                  >
                    Sign In
                  </button>{" "}
                </p>
                <br></br>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;
