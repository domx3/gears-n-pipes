import React, { useEffect, useRef, useContext } from 'react'
import { useLoader } from '@react-three/fiber'
import { DoubleSide, MeshStandardMaterial, PlaneGeometry, TextureLoader } from 'three'


export function CardMobile({iCard, cardPaths, lookAtScreen}) {
  
  const cardTextures = useLoader(TextureLoader, cardPaths)
  
  const cardGeometry = new PlaneGeometry(0.924, 1.63) 

  return (
    <group dispose={null}>
      <mesh geometry={cardGeometry} //material={cardMaterial} 
        position={[0.015197, 1.3, 0.04505]} 
        onClick={lookAtScreen}
      >
        <meshBasicMaterial 
          map={cardTextures[iCard]}          
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}