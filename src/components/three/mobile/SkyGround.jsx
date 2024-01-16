import React from 'react'
import { DoubleSide } from 'three'

export default function SkyGround() {
  return (
    <>
      <directionalLight 
        position={[-2, 10, 12]}
        color={'white'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh receiveShadow
        position={[0, 0.2, 0]}
        rotation={[-Math.PI/2, 0, 0]}
      >
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial opacity={0.4}/>
        

      </mesh>
    </>
  )
}
