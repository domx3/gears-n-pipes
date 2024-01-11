import React, {useState, useEffect} from 'react'
import Scene from './three/Scene';

import { Canvas} from '@react-three/fiber'
import SceneMobile from './three/mobile/SceneMobile';

import FrontOptions from './FrontOptions';

export default function FrontPage({lookHome, setToast, mobile, frontPage, showDesktop, showMobile}) {

  const [pages, setPages] = useState([])

  const cameraPosition = mobile ? [3, 2, 5.5] : [0, 3, 6.5]

  useEffect(() => {
    fetch("/gears-n-pipes/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPages(data.pages)
      })
      .catch((error) => console.log(error));
    }, []);
 
  return (
    <>
    <div className='text-white flex flex-col items-center'>
    {frontPage ?
      <div className='w-full flex flex-col justify-center'>
        <span className='flex flex-col md:flex-row justify-center items-center mt-12 md:mt-2'>
          <h1 
            className=' text-4xl font-bold text-center text-slate-50'
            >
              Gears-n-Pipes
          </h1>
        </span>
        <div className='flex flex-col items-center'>

          <p className=' md:w-[40%] text-lg md:text-xl text-center font-light p-4 my-20 text-slate-300'>
            A steampunk inspired explorer site, that used to be my github pages hub.
            <br/><br/>
            I created <span className='font-semibold'>two devices </span> to explore around.
            <br/>
            I recommend choosing one based on your <span className='font-semibold'>rendering</span> resources and <span className='font-semibold'>orientation</span>.
            <br/><br/>
            Now it is looking for it's new purpose. Perhaps a game...
          </p>

        </div>
        <FrontOptions
          lookHome={lookHome}
          showDesktop={showDesktop}
          showMobile={showMobile}
        />
      </div>
      :
      <div className='fixed top-0  w-full h-full'>
        <Canvas 
          //frameloop='demand'
          camera={{ fov:45, near: 0.1, far:1000, position: cameraPosition}}
          shadows
          //flat linear
        >
          {mobile ? 
            <SceneMobile
              pages={pages}
              lookHome={lookHome}
              setToast={setToast}
            />
            :
            <Scene
              pages={pages}
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
