import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { message } from "antd";


const Taskerslogin = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };

    // try {
    //   console.log("try");
    // //   const response = await axios.post(
    // //     `${import.meta.env.VITE_SOME_KEY}/loginclient`,
    // //     credentials
    // //   );
    //   console.log(response);
    // //   Cookies.set("token", response.data.token);
    //   message.success(response.data.status, {});
    //   setTimeout(() => {
    //     window.location.href = "/profile";
    //   }, 800);
    // } catch (error) {
    //     if(error.response.data.status){
    //         message.warning(error.response.data.status, {});

    //     }else{
    //   message.warning("Login Unsuccessfull");

    //     }
    //   console.log(error.response.data.status);
    // }

    window.location.href = "/profile";


  }
   
  return (
    <>
      <section>
        <div className="container-fluid login-bg">
          <div className="container login-form-bg">
            <form class="login-form">
            <div className="text-center">
            <h2 className="fw-bold"> Smart Automator</h2>
            {/* <h5>Login as Tasker</h5> */}
            
            </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label fw-bold" for="form2Example1">
                  Email address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="form2Example1"
                  class="form-control"
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label fw-bold" for="form2Example2">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="form2Example2"
                  class="form-control"
                />
              </div>

              <div class="col">
                <a className="fw-bold" href="#" style={{ color: "#ffc107" }}>
                  Forgot password?
                </a>
              </div>
              <button
                onClick={handleLogin}
                type="button"
                class="btn btn-warning text-center fw-bold mt-4 mb-4"
                style={{ width: "100%", color: "#fff" }}
              >
                Log in
              </button>

              <div class="text-center">
                Don't have account ?
                <p>
                  <button
                    className="fw-bold"
                    style={{ border: "none" }}
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>{" "}
                  <br></br>
                  Facebook Or Google ?{" "}
                  <span>
                    <a
                      className="fw-bold"
                      href="#"
                      style={{ color: "#ffc107" }}
                    >
                      CREATE PASSWORD
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Taskerslogin
