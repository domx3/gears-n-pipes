import React, { useRef, useState,  } from 'react'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { useSpring, animated } from '@react-spring/three'
import { useThree } from '@react-three/fiber'
import { Card } from './Card'
import gsap from 'gsap'


const model_path = 'objects/computer.glb'
const centerNeedle = {rotZ: 1.13}
let rot = [0,0,0];
const clickSpeed = 0.15
const btnScaleY = 0.04
const moveBtn = 0.01
const mvz = moveBtn * Math.sin(1.222)
const mvy = moveBtn * Math.cos(1.222)

export function Computer({pages, lookAtScreen, iCard, setICard}) {

  const needleCenter = useRef()
  const lBtnRef = useRef()
  const rBtnRef = useRef()
  const { nodes, materials } = useGLTF(model_path)
  const [trans, setTrans] = useState(false)
  
  const { invalidate } = useThree();

  function previousCard() {
    // left button press animation
    const orgZ = lBtnRef.current.position.z
    const orgY = lBtnRef.current.position.y
    gsap.to(lBtnRef.current.position, {z: orgZ - mvz, y: orgY - mvy , duration: clickSpeed})
    gsap.to(lBtnRef.current.position, {z: orgZ, y: orgY, duration: clickSpeed, delay: clickSpeed + 0.01})
    
    if(!trans)
      setICard(iCard > 0 ? iCard - 1 : 0)
  }

  function nextCard() {
    // right button press animation
    const orgZ = rBtnRef.current.position.z
    const orgY = rBtnRef.current.position.y
    gsap.to(rBtnRef.current.position, {z: orgZ - mvz, y: orgY - mvy , duration: clickSpeed})
    gsap.to(rBtnRef.current.position, {z: orgZ, y: orgY, duration: clickSpeed, delay: clickSpeed + 0.01})
    if(!trans)
      setICard((iCard +1) % pages.length === 0 ? 0 : iCard + 1)
  }
    

  const { cNeedleRot } = useSpring({
    to: { cNeedleRot: [-0.334, -0.063, 1.13 - iCard * 2.27 /(pages.length-1)] },
    config: { duration: 500 },
    onChange: (result) => {     
      needleCenter.current.rotation.set(...result.value.cNeedleRot);
      invalidate()
    }
  });
/*   useFrame(() => {
    if (needleCenter.current) {
      const { x, y, z } = needleRot.value;
      needleCenter.current.rotation.set(x, y, z);
    }
  }); */
    


/*      const {pos, rot} = useControls({  
      pos: {value: [0.281, 1.199, 0.98]},
      rot: {value: [0.16, 0, 0]}
    })
  */

  return (
    <>
    <group dispose={null}>
      <group position={[-0.128, 1.265, 0.514]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.body} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.monitor} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.monitor} />
      </group>
      <mesh geometry={nodes['bulb-socket'].geometry} material={materials.Metal} position={[0.007, 2.434, 0.577]} />

      
      
      <mesh geometry={nodes['gauge-center'].geometry} material={materials['clock-in']} position={[-0.065, 1.327, 0.754]} rotation={[-0.02, 0, 0]}>
        <mesh geometry={nodes['needle-center'].geometry} material={materials.brass} position={[-0.001, -0.033, 0.025]} 
          scale={[1.995, 1, -1]} ref={needleCenter} rotation={[-0.334, -0.063, 1.13]} />
      </mesh>
      <mesh geometry={nodes['gauge-left'].geometry} material={materials['gauge-round']} position={[-0.73, 1.401, 0.722]}>
        <mesh geometry={nodes['needle-left'].geometry} material={materials.brass} position={[-0.002, 0, 0.005]} />
      </mesh>
      <mesh geometry={nodes['gauge-right'].geometry} material={materials['gauge-round']} position={[-0.485, 1.401, 0.723]}>
        <mesh geometry={nodes['needle-right'].geometry} material={materials.brass} position={[-0.002, 0.004, 0.003]} />
      </mesh>
      
      <mesh geometry={nodes['wheel-side'].geometry} material={materials.Metal} position={[-1.068, 1.95, 0.391]} />
      <mesh geometry={nodes['vents-side'].geometry} material={materials.vents} position={[-0.879, 1.844, 0.38]} />
      <mesh geometry={nodes['vents-bottom'].geometry} material={materials.vents} position={[0.005, 0.445, 0.689]} />
      <mesh geometry={nodes['cage-right'].geometry} material={materials.brass} position={[1.252, 1.556, 0.473]} rotation={[-0.193, 0.537, 0.091]} scale={1.219} />
      <mesh geometry={nodes['cage-right001'].geometry} material={materials.brass} position={[1.25, 1.582, 0.014]} rotation={[-0.161, 0, 0]} scale={1.148} />
      <mesh geometry={nodes['wheel-left'].geometry} material={materials.Metal} position={[-0.737, 1.146, 0.909]} rotation={[-0.241, -0.993, -0.286]} scale={0.933} />
      <mesh geometry={nodes['wheel-right'].geometry} material={materials.Metal} position={[-0.483, 1.133, 1.104]} scale={0.968} />
      <mesh geometry={nodes.blacks.geometry} material={materials.black} position={[1.252, 1.503, 0.472]} scale={0.105} />

      <mesh geometry={nodes.label1.geometry} material={materials.label2} position={[-0.732, 1.311, 0.755]} rotation={[1.222, 0, 0]} scale={[0.04, 0.017, 0.017]} />
      <mesh geometry={nodes.label2.geometry} material={materials.label2} position={[-0.484, 1.312, 0.756]} rotation={[1.222, 0, 0]} scale={[0.04, 0.017, 0.017]} />
      <mesh geometry={nodes['label-pages'].geometry} material={materials['label-pages']} position={[-0.066, 1.44, 0.711]} rotation={[1.222, 0, 0]} scale={[0.063, 0.023, 0.034]} />
      <mesh geometry={nodes['label-visit'].geometry} material={materials['label-visit']} position={[0.401, 1.378, 0.728]} rotation={[1.222, 0, 0]} />

      <mesh ref={lBtnRef} geometry={nodes['button-left'].geometry} material={materials.button} position={[-0.219, 1.4379, 0.70549]} rotation={[1.222, 0, 0]} scale={[0.037, 0.037 + btnScaleY, 0.037]} 
        onClick={previousCard}
        onPointerOver={(event) => document.body.style.cursor = 'pointer'}
        onPointerOut={(event) => document.body.style.cursor = 'auto'}
      />
      <mesh ref={rBtnRef} geometry={nodes['button-right'].geometry} material={materials.button} position={[0.086208, 1.4403, 0.70549]} rotation={[1.222, 0, 0]} scale={[0.037, 0.037 + btnScaleY, 0.037]} 
        onClick={nextCard}
        onPointerOver={(event) => document.body.style.cursor = 'pointer'}
        onPointerOut={(event) => document.body.style.cursor = 'auto'}
      />
      
      {/* <mesh geometry={nodes.screen.geometry} material={materials.Screen} position={[0.001, 1.976, 0.685]} /> */}
      <mesh geometry={nodes.window.geometry} material={materials.glassBulb} position={[0.281, 1.192, 0.98]} rotation={[0.16, 0, 0]} scale={[0.558, 0.558, 0.225]} >
        <meshPhysicalMaterial roughness={0.15} transmission={1} thickness={0.01}/>
      </mesh>
      
    </group>

    <Card 
      lookAtScreen={lookAtScreen}
      iCard={iCard}
      pages={pages}
      trans={trans}
      setTrans={setTrans}
    />

    </>
  )
}

useGLTF.preload(model_path)