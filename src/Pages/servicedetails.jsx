import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const servicedetails = () => {
    const [taskLocation, setTaskLocation] = useState('')
    const [furnitureType, setFurnitureType] = useState('');
    const [taskSize, setTaskSize] = useState('');
    const [vehicleRequirement, setVehicleRequirement] = useState('');
    const [taskDetails, setTaskDetails] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  
    const handleServiceDetails = (e) => {
        e.preventDefault()
          const servicDetailsObj = {
            taskLocation: taskLocation,
            furnitureType: furnitureType,
            taskSize : taskSize,
            vehicleRequirement: setVehicleRequirement,
            taskDetails: taskDetails
          }
       localStorage.setItem("serviceDetails", JSON.stringify(servicDetailsObj))
         console.log(servicDetailsObj)
         navigate("/services")

    }
// console.log(selectedRadio)
    return (
        <>
           <section style={{ backgroundColor: "#fef6e7" }}>
    <div className="container">
        <h2>Furniture Assembly</h2>
    </div>
    <div className="container">
        <div className="form-box">
            <label htmlFor="exampleFormControlInput1" className="form-label">Your task location</label>
            <input 
                type="text" 
                className="form-control task-location" 
                id="exampleFormControlInput1" 
                placeholder="Enter Your task location" 
                value={taskLocation} 
                onChange={(e) => setTaskLocation(e.target.value)} 
            />
            <div style={{ width:"10%", margin:" 20px auto", }}></div>
        </div>
    </div> 

    <div className="container">
        <div className="form-box mt-5">
            <h3>Your Items</h3>
            <br />
            <h2>What type of furniture do you need assembled or disassembled?</h2>
            <div className="form-check">
                <hr style={{ width:"90%", height:"2px", color:"#F9AC25" }} />
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="furnitureType" 
                    id="type1" 
                    checked={furnitureType === 'IKEA furniture items only'} 
                    onChange={() => setFurnitureType('IKEA furniture items only')} 
                />
                <label className="form-check-label" htmlFor="type1">
                    IKEA furniture items only
                </label>
            </div>
            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="furnitureType" 
                    id="type2" 
                    checked={furnitureType === 'Other furniture items (non-IKEA)'} 
                    onChange={() => setFurnitureType('Other furniture items (non-IKEA)')} 
                />
                <label className="form-check-label" htmlFor="type2">
                    Other furniture items (non-IKEA)
                </label>
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="furnitureType" 
                    id="type3"  
                    checked={furnitureType === 'Both IKEA and non-IKEA furniture'} 
                    onChange={() => setFurnitureType('Both IKEA and non-IKEA furniture')} 
                />
                <label className="form-check-label" htmlFor="type3">
                    Both IKEA and non-IKEA furniture
                </label>
            </div>
            <div style={{ width:"10%", margin:" 40px auto", }}></div>
        </div>
    </div>
    <div className="container">
        <div className="form-box mt-5">
            <h3>Task Options</h3>
            <br />
            <div className="form-check">
                <h4>How big is your task?</h4>
                <hr style={{ width:"20%", height:"2px", color:"#F9AC25" }} />
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="taskSize" 
                    id="taskSize1" 
                    checked={taskSize === 'IKEA furniture items only'} 
                    onChange={() => setTaskSize('IKEA furniture items only')} 
                />
                <label className="form-check-label" htmlFor="taskSize1">
                    IKEA furniture items only
                </label>
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="taskSize" 
                    id="taskSize2" 
                    checked={taskSize === 'Other furniture items (non-IKEA)'} 
                    onChange={() => setTaskSize('Other furniture items (non-IKEA)')} 
                />
                <label className="form-check-label" htmlFor="taskSize2">
                    Other furniture items (non-IKEA)
                </label>
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="taskSize" 
                    id="taskSize3"  
                    checked={taskSize === 'Both IKEA and non-IKEA furniture'} 
                    onChange={() => setTaskSize('Both IKEA and non-IKEA furniture')} 
                />
                <label className="form-check-label" htmlFor="taskSize3">
                    Both IKEA and non-IKEA furniture
                </label>
            </div>

            <div className="form-check">
                <h4>Vehicle requirements</h4>
                <hr style={{ width:"20%", height:"2px", color:"#F9AC25" }} />
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="vehicleRequirement" 
                    id="vehicle1" 
                    checked={vehicleRequirement === 'Not needed for task'} 
                    onChange={() => setVehicleRequirement('Not needed for task')} 
                />
                <label className="form-check-label" htmlFor="vehicle1">
                    Not needed for task
                </label>
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="vehicleRequirement" 
                    id="vehicle2" 
                    checked={vehicleRequirement === 'Task requires a car'} 
                    onChange={() => setVehicleRequirement('Task requires a car')} 
                />
                <label className="form-check-label" htmlFor="vehicle2">
                    Task requires a car
                </label>
            </div>

            <div className="form-check">
                <input 
                    className="form-check-input" 
                    type="radio" 
                    name="vehicleRequirement" 
                    id="vehicle3" 
                    checked={vehicleRequirement === 'Task requires a truck'} 
                    onChange={() => setVehicleRequirement('Task requires a truck')} 
                />
                <label className="form-check-label" htmlFor="vehicle3">
                    Task requires a truck
                </label>
            </div>
            <div style={{ width:"10%", margin:" 40px auto", }}></div>
        </div>
    </div>
    <div className="container pb-5">
        <div className="form-box mt-5">
            <h3> Tell us the details of your task</h3>
            <p>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</p>
            <div className="form-floating">
                <textarea 
                    className="form-control" 
                    placeholder="Leave a comment here" 
                    id="floatingTextarea2" 
                    style={{ height: "100px" }} 
                    value={taskDetails} 
                    onChange={(e) => setTaskDetails(e.target.value)} 
                />
                <label htmlFor="floatingTextarea2">Comments</label>
                <p>If you need two or more Taskers, please post additional tasks for each Tasker needed.</p>
            </div>
            <div style={{ width:"10%", margin:" 40px auto", }}></div>
        </div>
        <button type="button" className="btn btn-warning text-center" onClick={handleServiceDetails}> Continue</button>
    </div>
</section>





        </>
    )
}
export default servicedetails;