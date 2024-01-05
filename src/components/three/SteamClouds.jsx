import * as THREE from "three"
import { Clouds, Cloud } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

export default function SteamClouds() {
  
  const ref = useRef()
  
  return (
    <>
    <ambientLight intensity={1} />
    <Clouds material={THREE.MeshLambertMaterial} limit={400} range={100}>
      <Cloud segments={20} volume={6} speed={0.3} opacity={0.5} fade={10} growth={2} bounds={[10,1,1]} color="#fff" seed={2} position={[0, 0, -2]} />
      <Cloud segments={20} volume={6} speed={0.3} opacity={0.1} fade={10} growth={1} bounds={[6,0.1,3]} color="#fff" seed={5} position={[0, 0, 3]} />
      
      {/* 
      <Cloud fade={30} speed={0.3} growth={0} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
      <Cloud growth={4} speed={0.5} fade={20} opacity={0.8} volume={30} segments={20} color="#a0b0d0" seed={4} position={[0, 0, -20]} />
      <Cloud concentrate="outside" growth={10} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={50} position={[0,0,-20]}/> 
    */}
    </Clouds>
    </>
  )
}
