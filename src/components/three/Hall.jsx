
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const object_path = '../objects/hall.glb'

export default function Hall() {
  const { nodes, materials } = useGLTF(object_path)
  return (
    <group dispose={null}>
      <mesh geometry={nodes.floor.geometry} material={materials.metal_plate} position={[-0.385, 0.072, 2.458]} scale={[8.877, 3.668, 24.537]} />
      <mesh geometry={nodes.wall.geometry} material={materials['void']} position={[-0.461, 2.537, -19.426]} rotation={[Math.PI / 2, 0, 0]} scale={[9.043, 11.51, 4.364]} />
      <mesh geometry={nodes.roof.geometry} material={materials.wall} position={[-0.546, 6.644, -18.306]} rotation={[Math.PI / 2, 0, 0]} scale={[43.097, 5.827, 32.762]} />
      <mesh geometry={nodes.columns.geometry} material={materials.wall} position={[-9.247, 0.497, -16.226]} scale={[0.637, 0.54, 0.507]} />
    </group>
  )
}

useGLTF.preload(object_path)
