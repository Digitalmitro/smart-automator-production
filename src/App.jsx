import './App.css'
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import AllRoute from './Router/AllRoute'
import { Provider } from 'react-redux';
import store from './redux/store';
import ScrollToTop from './ScrollToTop';
function App() {
  return (
    <>
    <Provider store={store}>
    <Navbar />
      <div className='pt-5'>
      <ScrollToTop />
        <AllRoute />
        <Footer />
      </div>

    </Provider>
     


    </>
  )
}

export default App
