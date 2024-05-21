import { useEffect } from "react";

const servicedetails = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
    return (
        <>


            <section style={{ backgroundColor: "#fef6e7" }}>
                <div className="container">
                    <h1>Furniture Assembly</h1></div>
                <div className="container">
                    <div className="form-box">
                        <label for="exampleFormControlInput1" class="form-label">Your task location</label>
                        <input type="text" class="form-control task-location" id="exampleFormControlInput1" placeholder=" Enter Your task location" />
                       <div style={{ width:"10%", margin:" 20px auto", }}>
                        <button type="button" class="btn btn-warning text-center" > Continue</button></div>
                    </div>
                </div> 

               <div className="container">
                    <div className="form-box mt-5">
                        <h3>Your Items</h3>
                        <br></br>
                        <h2>What type of furniture do you need assembled or disassembled?</h2>
                        <div class="form-check">

                        <hr style={{width:"90%", height:"2px",color:"#F9AC25"}}></hr>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                IKEA furniture items only
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Other furniture items (non-IKEA)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Both IKEA and non-IKEA furniture
                            </label>
                        </div>
                        <div style={{ width:"10%", margin:" 40px auto", }}>
                        <button type="button" class="btn btn-warning text-center" > Continue</button></div>


                    </div>

                </div>

                <div className="container">
                    <div className="form-box mt-5">
                        <h3> Task Options</h3>
                        <br></br>

                        <div class="form-check">
                            <h4>How big is your task?</h4>
                            <hr style={{width:"20%", height:"2px",color:"#F9AC25"}}></hr>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                IKEA furniture items only
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Other furniture items (non-IKEA)
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Both IKEA and non-IKEA furniture
                            </label>
                        </div>


                        <div class="form-check">
                            <h4>Vehicle requirements</h4>
                            <hr style={{width:"20%", height:"2px",color:"#F9AC25"}}></hr>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Not needed for task
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Task requires a car
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Task requires a truck
                            </label>
                        </div>

                        <div style={{ width:"10%", margin:" 40px auto", }}>
                        <button type="button" class="btn btn-warning text-center" > Continue</button></div>


                    </div>

                </div>

                <div className="container pb-5">
                    <div className="form-box mt-5 ">
                        <h3> Tell us the details of your task</h3>
                        <p>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified
                            and available Taskers for the job. Don't worry, you can edit this later.</p>
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}/>
                            <label for="floatingTextarea2">Comments</label>
                            <p>If you need two or more Taskers, please post additional tasks for each Tasker needed.</p>

                        </div>
                        <div style={{ width:"10%", margin:" 40px auto", }}>
                        <button type="button" class="btn btn-warning text-center" > Continue</button></div>
                    </div>
                </div>










            </section>




        </>
    )
}
export default servicedetails;