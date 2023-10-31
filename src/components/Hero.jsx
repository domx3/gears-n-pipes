import React from 'react'
import Scene from './three/Scene';
import {motion} from 'framer-motion'
import { Canvas} from '@react-three/fiber'

export default function Hero({lookHome}) {

  
  return (
    <div className='text-white flex flex-col items-center'>
      <div className='fixed top-0  w-full h-full'>
        <Canvas 
          frameloop='demand'
          camera={{ fov:45, near: 0.1, far:1000, position: [0, 3, 6.5]}}
          shadows
        >
          <Scene lookHome={lookHome}/>
        </Canvas>
      </div>
    </div>
  )
}
