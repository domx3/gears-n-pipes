import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Clouds, Cloud, Sky as SkyImpl} from "@react-three/drei"

export default function SkyClouds() {
  return (
    <>
      <Sky />
      <ambientLight intensity={Math.PI / 1.5} />
      {/* <spotLight position={[0, 40, 0]} decay={0} distance={45} penumbra={1} intensity={100} />
      <spotLight position={[-20, 0, 10]} color="red" angle={0.15} decay={0} penumbra={-1} intensity={30} />
      <spotLight position={[20, -10, 10]} color="red" angle={0.2} decay={0} penumbra={-1} intensity={20} /> */}
    </>
  )
}

function Sky() {
  
  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2
  })
  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400} range={100}>
          <Cloud segments={20} volume={6} opacity={0.8} fade={10} growth={4} bounds={[6,1,1]} color="#eed0d0" seed={2} position={[15, 0, 0]} />
          <Cloud fade={30} speed={0.3} color="#c0c0dd" seed={5} position={[0, 0, 12]} /> 
          <Cloud fade={30} speed={0.3} growth={0} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
          <Cloud growth={4} speed={0.5} fade={20} opacity={0.8} volume={30} segments={20} color="#a0b0d0" seed={4} position={[0, 0, -20]} />
          <Cloud concentrate="outside" growth={10} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={50} position={[0,0,-20]}/> 
          {/* 
          */}
        </Clouds>
      </group>
    </>
  )
}