import React, {useState} from 'react'
import Scene from './three/Scene';
import {motion} from 'framer-motion'
import { Canvas} from '@react-three/fiber'
import SceneMobile from './three/SceneMobile';

export default function Hero({lookHome, setToast}) {

  const [mobile, setMobile] = useState(true)

  const cameraPosition = mobile ? [3, 2, 5.5] : [0, 3, 6.5]
  return (
    <div className='text-white flex flex-col items-center'>
      <div className='fixed top-0  w-full h-full'>
        <Canvas 
          frameloop='demand'
          camera={{ fov:45, near: 0.1, far:1000, position: cameraPosition}}
          shadows
          //flat linear
        >
          {/* <Scene 
            lookHome={lookHome}
            setToast={setToast}
          />
           */}
          <SceneMobile 
            lookHome={lookHome}
            setToast={setToast}
          />
        </Canvas>
      </div>
    </div>
  )
}
