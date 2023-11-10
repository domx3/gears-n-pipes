import React, {useState} from 'react'
import Scene from './three/Scene';

import { Canvas} from '@react-three/fiber'
import SceneMobile from './three/SceneMobile';

import FrontOptions from './FrontOptions';

export default function Hero({lookHome, setToast, mobile, frontPage, showDesktop, showMobile}) {

  const [qlist, setQlist] = useState(false)

  const cameraPosition = mobile ? [3, 2, 5.5] : [0, 3, 6.5]


 
  return (
    <>
    <div className='text-white flex flex-col items-center'>
    {frontPage ?
      <div className='w-full'>
        <h1 
          className=' text-4xl font-bold py-6 mb-10 px-4 text-center'
          >
            Domx3 GitHub Pages
        </h1>
        <p className='text-lg md:text-xl text-center font-normal my-20 text-slate-300'>
          browse through my github pages</p>
        <FrontOptions
          showDesktop={showDesktop}
          showMobile={showMobile}
          qlist={qlist}
          setQlist={setQlist}
        />
      </div>
      :
      <div className='fixed top-0  w-full h-full'>
        <Canvas 
          frameloop='demand'
          camera={{ fov:45, near: 0.1, far:1000, position: cameraPosition}}
          shadows
          //flat linear
        >
          {mobile ? 
            <SceneMobile 
              lookHome={lookHome}
              setToast={setToast}
            />
            :
            <Scene 
              lookHome={lookHome}
              setToast={setToast}
              />
          }
        </Canvas>
      </div>
}
    </div>
  </>  
  )
}
