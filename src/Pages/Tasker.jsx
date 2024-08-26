import { useNavigate } from "react-router-dom";
import tasker from"../assets/image 11.png";
const Tasker = () => {
    const navigate = useNavigate()
    return (
        <>
            <section style={{ backgroundColor: "#fef6e7" }}>
                <div className="container">
                    <div className="row gx-5 p-5" >
                        <div class="col-md-6 py-5">
                            <div className="tasker-form">
                                <h2 className="fw-bold fs-1 text">Earn money your way</h2>
                                <p style={{fontSize:"18px"}}>See how much you can make tasking on TaskRabbit</p>
                                <div className="tasker-form-select">
                                   <label><b>Select your area</b></label>
                                <select class="form-select" aria-label="Default select example">
                            
                                        <option value="1">Albany</option>
                                        <option value="2">Texus</option>
                                        <option value="3">Temple</option>
                                        <option value="3">Oklahoma</option>
                                    </select>

                                    <label><b>Choose a Category</b></label>
                                <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <div className="task-rate">
                                    <span className="fw-bold" style={{fontSize:"40px" ,}}>$45</span><sub>per hour ?</sub>
                                    </div>

                                    
                                    <button onClick={()=>navigate("/Popup")} type="button" class="btn btn-warning text-center fw-bold" style={{width:"100%",color:"#fff",}} > Get Started</button>
                                    <p className="text-center">Already Have An Account ? <span><a  onClick={()=>navigate("/Popup")} style={{color:"#F9AC25"}}>Sign in</a></span></p>
                                    </div>


                                </div>
                            </div>


                        
                        <div class="col-md-6">
                        <img src={tasker }></img>



                        </div>


                 </div>
            </div>





    </section>

        </>
    )
}
export default Tasker