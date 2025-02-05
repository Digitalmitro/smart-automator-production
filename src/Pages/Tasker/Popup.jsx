import react , {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Popup = () => {
    const navigate = useNavigate()

    return (
        <>
        <section >
        <div className="container-fluid login-bg">
        <div className="container login-form-bg">

        <form class="login-form">
        <h2 className="fw-bold"> Smart Automator</h2>
        <button type="button" class="btn btn-warning text-center fw-bold mt-4 mb-4" style={{width:"100%",color:"#fff",}} onClick={()=> navigate('/signup')}>Sign up</button>
        <button type="button" class="btn btn-warning text-center fw-bold mt-4 mb-4" style={{width:"100%",color:"#fff",}}
         onClick={()=> navigate('/login')}
          > Log in</button>
        
        <p className="text-center">By signing up you agree to our <span><a className="text-warning" href="">TERMS OF USE </a></span>  and <span><a className="text-warning" href="">PRIVACY POLICY. </a></span> </p>

        </form>
        </div>
        </div>
</section>

      
      </>
  )
}


export default Popup