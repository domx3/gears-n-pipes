import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'

import { useThree } from '@react-three/fiber'
//import { degToRad } from 'three/src/math/MathUtils'
import { useSpring, animated } from '@react-spring/three'
import VisitModal from '../VisitModal'
//import Steam from './Steam'

const model_path = 'objects/gears.glb'



export function Gears({ pages, lookAtLever, iCard, setToast}) {

  const group = useRef()
  const lever = useRef()
  const wireRef = useRef()
  const dropperRef = useRef()
  const { nodes, materials, animations } = useGLTF(model_path)
  const { actions, mixer } = useAnimations(animations, group)
  const [onOff, setOnOff] = useState(false)
  const [visitOn, setVisitOn] = useState(false)
  
  const actionNames = Object.keys(actions)
  
  //console.log(animations)
  

  const playAll = () => actionNames.map((name) => {
      actions[name].play()
  })
  const stopAll = () => actionNames.map((name) => {
      actions[name].stop()  
  })

  const { set, invalidate } = useThree()
  //console.log(frameLoop)

  useEffect(()=>{
   /*  actions[names[0]].play()
    actions[names[1]].play()
    actions[names[2]].play() */
  }, [])

  const { leverRot } = useSpring({
    leverRot: onOff ? [0, 0, -0.17]: [0, 0, -0.87],
    onChange: () => invalidate()
  })
  
  const { drop } = useSpring({
    drop: visitOn ? [2.79, 0, 0] : [0, 0, 0],
    onChange: () => invalidate(),
    //onResolve: () => setVisitOn(false)
  })

  const toggleOnOff = () => { 
    if(!onOff) {
      playAll()
      set({frameloop:'always'})
      wireRef.current.material.emissive.setColorName('red') 
   }else{
      stopAll()
      set({frameloop:'demand'})
      wireRef.current.material.emissive.setColorName('yellow') 
    }
    setOnOff(!onOff) 
  }

  
  
  
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <mesh name="Gear001" geometry={nodes.Gear001.geometry} material={materials.Gears} position={[0.718, 1.136, 0.871]} />
        <mesh name="Gear002" geometry={nodes.Gear002.geometry} material={materials.Gears} position={[0.774, 1.136, 0.925]} />
        <mesh name="Gear006" geometry={nodes.Gear006.geometry} material={materials.Gears} position={[0.417, 1.137, 0.998]} />
        <mesh name="Gear010" geometry={nodes.Gear010.geometry} material={materials.Gears} position={[0.572, 1.137, 0.998]} />
        <mesh name="Gear015" geometry={nodes.Gear015.geometry} material={materials.Gears} position={[-1.066, 1.14, 0.609]} />
        <mesh name="Gear016" geometry={nodes.Gear016.geometry} material={materials.Gears} position={[-1.026, 1.188, 0.597]} />
        <mesh name="Gear011" geometry={nodes.Gear011.geometry} material={materials.Gears} position={[0.362, 1.138, 0.893]}  />
        <mesh name="Gear017" geometry={nodes.Gear017.geometry} material={materials.Gears} position={[0.14, 1.135, 1.105]} scale={1.197} />
        <group name="Gear012" position={[-0.015, 1.144, 0.999]} scale={0.064}>
          <mesh name="Gear012_1" geometry={nodes.Gear012_1.geometry} material={materials.Gears} />
          <mesh name="Gear012_2" geometry={nodes.Gear012_2.geometry} material={materials.Gears} />
        </group>
        <group name="Gear014" position={[-0.169, 1.14, 0.951]} scale={[0.031, 0.01, 0.031]}>
          <mesh name="Gear014_1" geometry={nodes.Gear014_1.geometry} material={materials.Gears} />
          <mesh name="Gear014_2" geometry={nodes.Gear014_2.geometry} material={materials.Gears} />
        </group>

        <mesh name="gear-pipe" geometry={nodes['gear-pipe'].geometry} material={materials.Pipes} position={[-1.066, 0.991, 0.609]} />
        <mesh name="gear-pipe001" geometry={nodes['gear-pipe001'].geometry} material={materials.Pipes} position={[-0.945, 1.186, 0.596]} />
        <mesh name="lever-case" geometry={nodes['lever-case'].geometry} material={materials['on-off']} position={[1.135, 1.249, 1.001]} 
          onClick={lookAtLever} 
          onPointerOver={(event) => document.body.style.cursor = 'zoom-in'}
          onPointerOut={(event) => document.body.style.cursor = 'auto'}  
        />
        <mesh name="bolts" geometry={nodes.bolts.geometry} material={materials.bolt} position={[1.138, 1.211, 1]} />
        
        <mesh name="bulb" geometry={nodes.bulb.geometry} position={[0.005, 2.577, 0.575]} >
          <meshPhysicalMaterial roughness={0} transmission={1}  />
        </mesh>
        <mesh name="bulb-wire"  ref={wireRef} geometry={nodes['bulb-wire'].geometry} position={[0.004, 2.62, 0.576]} rotation={[0, 0, 0.04]} scale={0.54}>
          <meshStandardMaterial emissive={'yellow'} emissiveIntensity={100} toneMapped={false} />
        </mesh>
        <mesh name="bulb-pin" geometry={nodes['bulb-pin'].geometry} material={materials.Metal} position={[0.004, 2.543, 0.576]} rotation={[0, 0, -0.002]} scale={[0.002, 0.02, 0.002]} />
        

        <animated.group name="lever" ref={lever} position={[1.131, 1.239, 1.002]}  
          rotation={leverRot} 
          onClick={toggleOnOff}
          onPointerOver={(event) => document.body.style.cursor = 'pointer'}
          onPointerOut={(event) => document.body.style.cursor = 'auto'}
        >
          <mesh name="Cylinder035" geometry={nodes.Cylinder035.geometry} material={materials.lever} />
          <mesh name="Cylinder035_1" geometry={nodes.Cylinder035_1.geometry} material={materials.lever} />
        </animated.group>
        
        <animated.group name="dropper-top" position={[0.594, 1.396, 0.762]} 
          rotation={drop}
          ref={dropperRef}
          onClick={() => setVisitOn(!visitOn)}
          onPointerOver={(event) => document.body.style.cursor = 'pointer'}
          onPointerOut={(event) => document.body.style.cursor = 'auto'}
        >
          <mesh name="Cylinder022" geometry={nodes.Cylinder022.geometry} material={materials.lever} />
          <mesh name="Cylinder022_1" geometry={nodes.Cylinder022_1.geometry} material={materials.Metal} />
        </animated.group>
        <mesh name="dropper-bot" geometry={nodes['dropper-bot'].geometry} material={materials['body.001']}>
          <mesh name="bolts2" geometry={nodes.bolts2.geometry} material={materials.bolt} position={[-0.066, 0.075, -0.078]} rotation={[0.061, 0, 0]} />
        </mesh>
      </group>
      
    {/*   {onOff && <Steam />} */}
      {/* onOff && 
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={9} intensity={2}/>
        </EffectComposer> */
      }

      { visitOn && 
        <Html 
          position={[0.4, 1.5, 0.5]}
          center
        >
          <VisitModal 
            pages={pages}
            setVisitOn={setVisitOn}
            iCard={iCard}
            setToast={setToast}
          /> 
        </Html>         
      }
    </group>
    
  )
}

useGLTF.preload(model_path)
