import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { cardMPaths } from '../Data'
import { useControls } from 'leva'
import { CardMobile } from './CardMobile'
import { useThree } from '@react-three/fiber'
import { LoopOnce } from 'three'
import VisitModal from '../VisitModal'


const path = "../objects/mobile.glb"

export function Phone({lookAtScreen, setToast}) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF(path)
  const { actions, mixer } = useAnimations(animations, group)
  const actionNames = Object.keys(actions)
  //console.log(nodes)

  const { set, invalidate } = useThree()

  const [ onOff, setOnOff ] = useState(false)
  const [visitOn, setVisitOn] = useState(false)
  const [ iCard, setICard ] = useState(0)

  const { sliderPos } = useSpring({
    sliderPos: onOff ?  [0.297, 2.129, -0.003] : [0.357, 2.129, -0.003],
    onChange: () => invalidate()
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
      set({frameloop:'always'})
   }else{
      stopAll()
      set({frameloop:'demand'})
    }
    setOnOff(!onOff) 
  }

  mixer.addEventListener('finished', (e) => {
    if(e?.action['_cacheIndex'] === 4){
      toggleOnOff()
      set({frameloop:'demand'})
    }
  });

  function previousCard() {
    setICard(iCard > 0 ? iCard - 1 : 0)
  }

  function nextCard() {    
    setICard((iCard +1) % cardMPaths.length === 0 ? 0 : iCard + 1)
  }

  
  /*   
const {x1, y1} = useControls({  
  x1: {value: [0.357, 2.129, -0.003]},
  y1: {value: [0.16, 0, 0]}
})
 */
  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
        
        <mesh name="floor" geometry={nodes.floor.geometry} scale={18.421} position={[0, 0.19, 0]} receiveShadow >
          <meshStandardMaterial color={0xFFAEF8} roughness={0.7} />
        </mesh>

      <group name="phone" rotation={[0.0, 0.0, -0.0]}>
        <group name="case" position={[0.012, 1.22, -0.002]} scale={[0.85, 0.85, 0.057]} castShadow>
          <mesh name="Cube012" geometry={nodes.Cube012.geometry} material={materials['phone-case']} />
          <mesh name="Cube012_1" geometry={nodes.Cube012_1.geometry} material={materials.Metal} />
          <mesh name="Cube012_2" geometry={nodes.Cube012_2.geometry} material={materials.slider} />
        </group>
        
        <group name="buttons" 
          onPointerOver={()=> document.body.style.cursor = "pointer"}
          onPointerOut={()=> document.body.style.cursor = "auto"}
        >
          <animated.mesh name="slider" geometry={nodes.slider.geometry} material={materials['phone-case']} scale={[0.028, 0.009, 0.028]} 
            position={sliderPos}
            onClick={toggleOnOff}
          />
          <mesh name="button-m-center" geometry={nodes['button-m-center'].geometry} material={materials['button-m-center']} position={[0.01, 0.39, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.052, 0.037, 0.052]} 
            onClick={()=> setVisitOn(!visitOn)}
          />
          <mesh name="button-m-left" geometry={nodes['button-m-left'].geometry} material={materials['button-m-right']} position={[0.224, 0.393, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.046, 0.037, 0.046]} 
            onClick={previousCard}
          />
          <mesh name="button-m-right" geometry={nodes['button-m-right'].geometry} material={materials['button-m-right']} position={[0.224, 0.393, 0.06]} rotation={[Math.PI / 2, 0, 0]} scale={[0.046, 0.037, 0.046]} 
            onClick={nextCard}
          />
        </group>
        
{        <CardMobile 
          iCard={iCard}
          lookAtScreen={lookAtScreen}
          cardPaths={cardMPaths}
        />}

        { visitOn && 
          <Html 
            position={[0, 1, 0.5]}
            center
          >
            <VisitModal 
              setVisitOn={setVisitOn}
              iCard={iCard}
              setToast={setToast}
            /> 
          </Html>         
        }

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