import React, { useEffect, useRef, useState } from 'react'
import { CameraControls, Environment } from '@react-three/drei'
import { Computer } from './Computer'
import { Gears } from './Gears'
import { Pipes } from './Pipes.jsx'
import Hall from './Hall'
import { degToRad } from 'three/src/math/MathUtils'
import SteamClouds from './SteamClouds.jsx'
//import { useControls } from 'leva'


export default function Scene({ pages, lookHome, setToast }) {
  
  const cameraControlsRef = useRef()
  const [iCard, setICard] = useState(0)


  //const {camera} = useThree()
  
/*   
  const {minPolar, maxPolar, maxDistance, minDistance} = useControls({
    minPolar: {value: 30},
    maxPolar: {value: 80},
    minDistance: {value: 2.2},
    maxDistance: {value: 8}
   }) */


  useEffect(()=>{
    //disable pan  
    //cameraControlsRef.current.mouseButtons.right = 0
    document.body.style.backgroundColor = '#131417'
    return ()=> document.body.style.backgroundColor = '#334155'
  },[])

  const lookAtHome = () => {
    let position = [0, 3, 6]
    let target = [0, 1.5, 1]
    cameraControlsRef.current?.setLookAt(...position, ...target, true)
    cameraControlsRef.current.maxPolarAngle = degToRad(100)
  }

  const lookAtScreen = () => {
    let position = [0.0, 2.0, 2.2]
    let target = [0.0, 1.85, 0.65]
    cameraControlsRef.current?.setLookAt(...position, ...target, true)
    cameraControlsRef.current.maxPolarAngle = degToRad(100)
  }

  const lookAtLever = () => {
    let position = [1.1, 1.9, 1.9]
    let target = [0.5, 1.0, -0.1]
    cameraControlsRef.current?.setLookAt(...position, ...target, true)
    cameraControlsRef.current.maxPolarAngle = degToRad(95)
  }

  useEffect(() => {
    lookAtHome()
  }, [lookHome])

  return (
    <>
        <fog attach="fog" color="black" near={2} far={12} />
        
        <Environment files="pipe_1k.hdr" intensity='0.1' />

         <CameraControls ref={cameraControlsRef} 
          
         /*  minDistance={2.3}
          maxDistance={8}
          minPolarAngle={degToRad(30)}
          maxPolarAngle={degToRad(100)}
          minAzimuthAngle={-degToRad(70)}
          maxAzimuthAngle={degToRad(70)} 
          smoothTime={0.33} */
          minDistance={0}
          maxDistance={8}
          minPolarAngle={degToRad(30)}
          maxPolarAngle={degToRad(100)}
          minAzimuthAngle={degToRad(-360)}
          maxAzimuthAngle={degToRad(360)} 
          smoothTime={0.33}
        />

        <Computer
          pages={pages}
          lookAtScreen={lookAtScreen}
          iCard={iCard}
          setICard={setICard}
        />

        <Gears
          pages={pages}
          lookAtLever={lookAtLever}
          iCard={iCard}
          setToast={setToast}
        />

        <Pipes />

        <Hall />

        <SteamClouds />
       
        {/* <ambientLight intensity={1} />
        <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={10} />
        <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={10} />
        <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={10} />  */}
 
    </>
  )
}
