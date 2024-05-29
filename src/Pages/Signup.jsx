const Signup = () => {
    return (
        <>
            <section >
                <div className="container-fluid login-bg">
                    <div className="container login-form-bg">
                        <form class="login-form">
                            <h2 className="fw-bold"> Smart Automator</h2>
                            <div data-mdb-input-init class="form-outline mb-4">

                                <input type="text" class="form-control" placeholder="First name" />

                            </div>
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="text" class="form-control" placeholder="Last name" />
                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" class="form-control" placeholder="Email Address" />

                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                                <input min="10" max="20" type="number" id="typeNumber" class="form-control" placeholder="Enter Phone No" />
                            </div>

                            <div data-mdb-input-init class="form-outline mb-4">
                        
                                <input type="password" id="form2Example2" class="form-control" placeholder="Password"/>
                            </div>

                            <div class="form-group col-mb-4">
                              
                                <input type="text" class="form-control" id="inputZip" placeholder="ZipCode"/>
                            </div>

                            <p className="text-center">By signing up you agree to our <span><a className="text-warning" href="">TERMS OF USE </a></span>  and <span><a className="text-warning" href="">PRIVACY POLICY. </a></span> </p>

                            <button type="button" class="btn btn-warning text-center fw-bold mt-4 mb-4" style={{width:"100%",color:"#fff",}} >Create Account</button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Signup; 