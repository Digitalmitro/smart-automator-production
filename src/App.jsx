import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import AllRoute from './Router/AllRoute'

function App() {


  return (
    <>
    <Navbar/>
<div  className='pt-5'>
<AllRoute/>
<Footer/>
</div>
   

    </>
  )
}

export default App
