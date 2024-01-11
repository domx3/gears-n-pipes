import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import FrontPage from './components/FrontPage'
//import { useDetectGPU } from '@react-three/drei'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

function App() {
  
  /* const GPUTier = useDetectGPU()
  console.log(GPUTier) */

  const [lookHome, setLookHome] = useState(true)
  const [mobile, setMobile] = useState(true)
  const [frontPage, setFrontPage] = useState(true)
  
  const showMobile =() => {
    setMobile(true)
    setFrontPage(false)
  }
  const showDesktop =() => {
    setMobile(false)
    setFrontPage(false)
  }
  
  const setToast = (text) => {
    toast(text)
  }
  
  return (
    <>
        <Navbar 
          lookHome={lookHome} 
          setLookHome={setLookHome}
          mobile={mobile}
          frontPage={frontPage}
          setMobile={setMobile}
          setFrontPage={setFrontPage}
        />
        <FrontPage 
          lookHome={lookHome}
          setToast={setToast}
          mobile={mobile}
          frontPage={frontPage}
          showDesktop={showDesktop}
          showMobile={showMobile}
          //gpuMobile={GPUTier}
        />
        {frontPage && 
          <Footer />
        }

      <div className='text-black'>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </>
  )
}

export default App
