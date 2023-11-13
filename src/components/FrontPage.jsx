import React, {useState, useEffect} from 'react'
import Scene from './three/Scene';

import { Canvas} from '@react-three/fiber'
import SceneMobile from './three/SceneMobile';

import FrontOptions from './FrontOptions';
import { TitleSvg } from './FrontSvg';

export default function FrontPage({lookHome, setToast, mobile, frontPage, showDesktop, showMobile}) {

  const [qlist, setQlist] = useState(false)
  const [pages, setPages] = useState([])

  const cameraPosition = mobile ? [3, 2, 5.5] : [0, 3, 6.5]

  const scrollToQList = () => {    
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  } 

  useEffect(() => {
    fetch("/data.json")
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
        <span className='flex flex-col md:flex-row justify-center items-center py-6 md:mb-10 px-4'>
          {/* <img src='icons/title.svg' alt='Domx3' width={140}/> */}
          <TitleSvg />
          <h1 
            className='mt-4 md:mt-0 md:ml-4 text-4xl font-bold text-center text-slate-50'
            >
              GitHub Pages
          </h1>
        </span>
        <div className='flex flex-col items-center'>

          <p className=' md:w-[40%] text-lg md:text-xl text-center font-light p-4 my-20 text-slate-300'>
            Welcome to the <span className='font-semibold'>Domx3 homepage</span> your gateway to exploring my apps hosted on GitHub Pages. <br />
            <br/>
            There are <span className='font-semibold'>three ways</span> to explore around.
            You can navigate with one of my <span className='font-semibold'>two devices</span>.
            I recommend choosing one based on your <span className='font-semibold'>rendering</span> resources and <span className='font-semibold'>orientation</span>.
            <br/><br/>Those in a hurry can use a 
            <span onClick={scrollToQList} className='text-slate-100 font-semibold italic cursor-pointer'> quick list</span> at the bottom.
          </p>

        </div>
        <FrontOptions
          pages={pages}
          lookHome={lookHome}
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
