import React from 'react'
import Scene from './three/Scene';
import {motion} from 'framer-motion'
import { Canvas} from '@react-three/fiber'

export default function Hero({lookHome}) {

  //const keys = Object.keys(links);

  return (
    <div className='text-white flex flex-col items-center'>
      {/* <h1 
        className='md:text-4xl sm:text-2xl text-4xl font-bold md:py-6 mb-10'
        >
          Navigate my github pages
      </h1>
      <div className='mx-auto text-center'> 
        <div className='flex items-center flex-col'>
          {keys.map((key, i) => (
            <motion.div
              key={key}
              animate={{x:[2000,0]}}
              transition={{type:'spring', bounce:0.5, duration:1, delay:i*0.5}}
            >
              <a className="font-bold m-2" 
                 
                href={links[key]}
                target="_blank" rel="noopener noreferrer"
                
              >{key}</a>
            </motion.div>
          ))}
        </div>
      </div> */}
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
