import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useDetectGPU } from '@react-three/drei'

function App() {
  
  /* const GPUTier = useDetectGPU()
  console.log(GPUTier) */

  const [lookHome, setLookHome] = useState(true)
  
  return (
    <>
      <div>
        <Navbar 
          lookHome={lookHome} 
          setLookHome={setLookHome}
        />
        <Hero 
          lookHome={lookHome} 
          //gpuMobile={GPUTier}
        />
      </div>
    </>
  )
}

export default App
