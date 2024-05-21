import { useNavigate } from "react-router-dom";

const login = () => {
    const navigate = useNavigate()
    return (
        <>
            <section >
                <div className="container-fluid login-bg">
                    <div className="container login-form-bg">

                        <form class="login-form">
                        <h2 className="fw-bold"> Smart Automator</h2>
                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label fw-bold" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" class="form-control" />
                        
                        </div>
        
                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label fw-bold" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" class="form-control" />
                        </div>
                        
                            <div class="col"> 
                                <a className="fw-bold" href="#" style={{color:"#ffc107"}}>Forgot password?</a>
                            </div>
                            <button type="button" class="btn btn-warning text-center fw-bold mt-4 mb-4" style={{width:"100%",color:"#fff",}} >Log in</button>
            
                      
                        <div class="text-center">
            
                            <p ><button onClick={()=>navigate("/Signup")}>Sign Up</button>  <br></br>
                            Facebook Or Google ? <span><a className="fw-bold" href="#" style={{color:"#ffc107"}}>CREATE PASSWORD</a></span></p>
            
                        </div>
                    </form>
                </div>
        </div>


     </section>

        </>
    )
}
export default login;