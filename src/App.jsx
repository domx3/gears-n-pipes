import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useDetectGPU } from '@react-three/drei'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  /* const GPUTier = useDetectGPU()
  console.log(GPUTier) */

  const [lookHome, setLookHome] = useState(true)
  
  const setToast = (text) => {
    toast(text)
  }
  
  return (
    <>
      <div>
        <Navbar 
          lookHome={lookHome} 
          setLookHome={setLookHome}
        />
        <Hero 
          lookHome={lookHome}
          setToast={setToast}
          //gpuMobile={GPUTier}
        />
      </div>

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
