import React, { useEffect, useRef, useState } from 'react'
import { CameraControls, Clouds, Environment } from '@react-three/drei'
import { Phone } from './Phone'
import SkyClouds from './SkyClouds'
import SkyGround from './SkyGround'
//import { useControls } from 'leva'

function SceneMobile({ pages, lookHome, setToast}) {

  const cameraControlsRef = useRef()
  
  const lookAtScreen = () => {
    let position = [0, 1.4, 2.9]
    let target = [0, 1.3, 0.5]
    cameraControlsRef.current?.setLookAt(...position, ...target, true)
    
  }

  const lookAtHome = () => {
    let position = [0, 3, 6]
    let target = [0, 1.5, 1]
    cameraControlsRef.current?.setLookAt(...position, ...target, true)
  }
  
  useEffect(() => {
    lookAtHome()
  }, [lookHome])
  
  
  return (
    <>
        {/* <fog attach="fog" color={0x000} near={2} far={12} /> */}
        
        {/* 
        <Environment files="src/assets/pipe_1k.hdr" background blur={1} /> 
      */}
      <Environment preset='city' background blur={1} />

         <CameraControls ref={cameraControlsRef} 
          minDistance={0.5}
          maxDistance={8}
          smoothTime={0.33}
        />
        
        <SkyGround />

        <Phone
          pages={pages}
          lookAtScreen={lookAtScreen}
          setToast={setToast}
        
        />
        <SkyClouds />


{/*         <ambientLight intensity={1} />
       <directionalLight position={[10, 40, 10]} decay={0} distance={45} penumbra={1} intensity={1}  castShadow/>
        <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={100} />
        <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={100} />  */}
 
    </>
  )
}

export default SceneMobile