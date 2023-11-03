import React, { useEffect, useRef, useContext } from 'react'
import { useLoader } from '@react-three/fiber'
import { DoubleSide, MeshStandardMaterial, PlaneGeometry, TextureLoader } from 'three'

export function Card({iCard, cardPaths, lookAtScreen}) {
  
  const cardTextures = useLoader(TextureLoader, cardPaths)
  
  const cardGeometry = new PlaneGeometry(1.52, 0.822)
  const cardMaterial = new MeshStandardMaterial({
    map: cardTextures[iCard],
    side: DoubleSide
  })
  
  useEffect(()=> {
    cardMaterial.map = cardTextures[iCard] 
  }, [iCard])

  return (
    <group dispose={null}>
      <mesh geometry={cardGeometry} 
        position={[0.001037, 1.98574, 0.645459]} 
        onClick={lookAtScreen}
        onPointerOver={() => document.body.style.cursor = 'zoom-in'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      >
      <meshBasicMaterial 
          map={cardTextures[iCard]}          
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}