import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
//import { useControls } from 'leva'
import { CardMobile } from './CardMobile'
import { useFrame, useThree } from '@react-three/fiber'
import { LoopOnce } from 'three'
import gsap from 'gsap'



const path = "objects/mobile.glb"
const clickSpeed = 0.15

export function Phone({ pages, lookAtScreen, setToast}) {

  const group = useRef()
  const mBtnRef = useRef()
  const lBtnRef = useRef()
  const rBtnRef = useRef()
  const { nodes, materials, animations } = useGLTF(path)
  const { actions, mixer } = useAnimations(animations, group)
  const actionNames = Object.keys(actions)
  //console.log(nodes)

  const { set, invalidate } = useThree()

  const [ onOff, setOnOff ] = useState(false)
  const [visitOn, setVisitOn] = useState(false)
  const [ iCard, setICard ] = useState(0)
  const [trans, setTrans] = useState(false)

  const { sliderPos } = useSpring({
    sliderPos: onOff ?  [0.297, 2.129, -0.003] : [0.357, 2.129, -0.003],
    //onChange: () => invalidate()
  })

  const playAll = () => actionNames.map((name) => {
    actions[name].setLoop(LoopOnce, 1)
    actions[name].play()
  })
  const stopAll = () => actionNames.map((name) => {
    actions[name].stop()  
  })

  const toggleOnOff = () => { 
    if(!onOff) {
      playAll()
      //set({frameloop:'always'})
   }else{
      stopAll()
      //set({frameloop:'demand'})
    }
    setOnOff(!onOff) 
  }

  mixer.addEventListener('finished', (e) => {
    if(e?.action['_cacheIndex'] === 4){
      toggleOnOff()
      //set({frameloop:'demand'})
    }
  });

  function previousCard() {
    gsap.to(lBtnRef.current.position, {z: 0.05, duration: clickSpeed})
    gsap.to(lBtnRef.current.position, {z: 0.06, duration: clickSpeed, delay: clickSpeed})
    if(!trans)
      setICard(iCard > 0 ? iCard - 1 : 0)
  }

  function nextCard() {
    gsap.to(rBtnRef.current.position, {z: 0.05, duration: clickSpeed})
    gsap.to(rBtnRef.current.position, {z: 0.06, duration: clickSpeed, delay: clickSpeed})
    if(!trans)
      setICard((iCard +1) % pages.length === 0 ? 0 : iCard + 1)
  }

  const handleVisit = () => {
    if(!visitOn) {
      setToast('No page yet.')
    }
    setVisitOn(true)
    gsap.to(mBtnRef.current.position, {z: 0.055, duration: clickSpeed})
    gsap.to(mBtnRef.current.position, {z: 0.065, duration: clickSpeed, delay: clickSpeed, 
      onComplete: ()=> setVisitOn(false)})
  }
  /*   
const {x1, y1} = useControls({  
  x1: {value: [0.357, 2.129, -0.003]},
  y1: {value: [0.16, 0, 0]}
})
 */

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
        
{/*         <mesh name="floor" geometry={nodes.floor.geometry} scale={18.421} position={[0, 0.19, 0]} receiveShadow >
          <meshStandardMaterial color={0xFFAEF8} roughness={0.7} />
        </mesh> */}

      <group name="phone" rotation={[0.0, 0.0, -0.0]}>
        <group name="case" position={[0.012, 1.22, -0.002]} scale={[0.85, 0.85, 0.057]} >
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['phone-case']}castShadow />
          <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials.Metal} castShadow/>
          <mesh name="Cube012_2" geometry={nodes.Cube012_2.geometry} material={materials.slider} castShadow/>
        </group>
        
        <group name="buttons" 
          onPointerOver={()=> document.body.style.cursor = "pointer"}
          onPointerOut={()=> document.body.style.cursor = "auto"}
        >
          <animated.mesh name="slider" geometry={nodes.slider.geometry} material={materials['phone-case']} scale={[0.028, 0.009, 0.028]} 
            position={sliderPos}
            onClick={toggleOnOff}
          />
          <mesh ref={mBtnRef} name="button-m-center" geometry={nodes['button-m-center'].geometry} material={materials['button-m-center']} position={[0.01, 0.39,0.065]} rotation={[Math.PI / 2, 0, 0]} 
            scale={[0.052, 0.1, 0.052]} 
            onClick={handleVisit}
          />
          <mesh ref={lBtnRef} name="button-m-left" geometry={nodes['button-m-left'].geometry} material={materials['button-m-right']} position={[0.224, 0.393, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.046, 0.1, 0.046]} 
            onClick={previousCard}
          />
          <mesh ref={rBtnRef} name="button-m-right" geometry={nodes['button-m-right'].geometry} material={materials['button-m-right']} position={[0.224, 0.393, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.046, 0.1, 0.046]} 
            onClick={nextCard}
          />
        </group>
        <CardMobile 
          pages={pages}
          iCard={iCard}
          lookAtScreen={lookAtScreen}
          trans={trans}
          setTrans={setTrans}
        /> 
        {/* 
        */}

        <mesh name="backscreen" geometry={nodes.backscreen.geometry} position={[0.03, 1.215, 0]} scale={[0.85, 0.85, 0.057]}>
          <meshPhysicalMaterial roughness={0.1} transmission={1} thickness={0.05}/>
        </ mesh>
        
        <mesh name="gear1" geometry={nodes.gear1.geometry} material={materials.Gears} position={[0.062, 1.765, -0.028]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.018, 0.009, 0.018]} />
        <mesh name="gear2" geometry={nodes.gear2.geometry} material={materials.Gears} position={[0.2, 1.479, -0.028]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.051, 0.008, 0.051]} />
        <mesh name="gear3" geometry={nodes.gear3.geometry} material={materials.Gears} position={[0.199, 1.479, -0.037]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.011, 0.008, 0.011]} />
        <mesh name="gear4" geometry={nodes.gear4.geometry} material={materials.Gears} position={[-0.034, 1.177, -0.038]} rotation={[-Math.PI / 2, 0, 0]} scale={0.37} />
        <mesh name="gear5" geometry={nodes.gear5.geometry} material={materials.Gears} position={[-0.035, 1.178, -0.02]} rotation={[Math.PI / 2, 0, 0]} scale={[2.467, 0.183, 2.467]} />
        
        <mesh name="pipe024" geometry={nodes.pipe024.geometry} material={materials.Pipes} position={[0.265, 0.716, -0.021]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.611} />
        <mesh name="pipe025" geometry={nodes.pipe025.geometry} material={materials.Pipes} position={[-0.031, 0.632, -0.028]} rotation={[0, 0, -1.566]} scale={0.617} />
        <mesh name="pipe026" geometry={nodes.pipe026.geometry} material={materials.Pipes} position={[-0.22, 0.651, -0.03]} rotation={[-1.698, 0, 0]} />
        <mesh name="pipe027" geometry={nodes.pipe027.geometry} material={materials.Pipes} position={[-0.02, 0.57, -0.026]} rotation={[3.004, 0, 0]} scale={0.82} />
        <mesh name="pipe001" geometry={nodes.pipe001.geometry} material={materials.Pipes} position={[-0.085, 0.538, -0.024]} rotation={[Math.PI, 0, 1.575]} scale={0.624} />
      </group>
    </group>
  )
}

useGLTF.preload(path)