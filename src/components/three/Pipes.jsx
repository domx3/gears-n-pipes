import React from 'react'
import { useGLTF } from '@react-three/drei'

const model_path = 'objects/pipes.glb'

export function Pipes(props) {
  
  const { nodes, materials } = useGLTF(model_path)
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pipe001.geometry} material={materials.Pipes} position={[-0.348, 1.076, 0.959]} />
      <mesh geometry={nodes.pipe006.geometry} material={materials.Pipes} position={[0.935, 1.671, 0.561]} />
      <mesh geometry={nodes.pipe007.geometry} material={materials.Pipes} position={[-1.013, 2.265, 0.292]} />
      <mesh geometry={nodes.pipe008.geometry} material={materials.Pipes} position={[-1.07, 1.777, 0.3]} />
      <mesh geometry={nodes.pipe009.geometry} material={materials.Pipes} position={[-0.75, 2.601, 0.293]} />
      <mesh geometry={nodes.pipe010.geometry} material={materials.Pipes} position={[-1.216, 1.132, 0.295]} />
      <mesh geometry={nodes.pipe011.geometry} material={materials.Pipes} position={[0.928, 1.707, 0.461]} />
      <mesh geometry={nodes.pipe012.geometry} material={materials.Pipes} position={[0.922, 1.738, 0.351]} />
      <mesh geometry={nodes.pipe013.geometry} material={materials.Pipes} position={[0.942, 2.167, 0.469]} />
      <mesh geometry={nodes.pipe014.geometry} material={materials.Pipes} position={[0.732, 2.571, 0.394]} />
      <mesh geometry={nodes.pipe015.geometry} material={materials.Pipes} position={[-0.375, 1.125, 0.857]} />
      <mesh geometry={nodes.pipe016.geometry} material={materials.Pipes} position={[-0.819, 1.128, 0.949]} />
      <mesh geometry={nodes.pipe017.geometry} material={materials.Pipes} position={[-0.573, 1.126, 0.905]} />
      <mesh geometry={nodes.pipe018.geometry} material={materials.Pipes} position={[-0.798, 1.094, 0.904]} />
      <mesh geometry={nodes.pipe019.geometry} material={materials.Pipes} position={[-0.626, 1.065, 0.977]} />
      <mesh geometry={nodes.pipe020.geometry} material={materials.Pipes} position={[-0.783, 1.116, 1.131]} />
      <mesh geometry={nodes.pipe021.geometry} material={materials.Pipes} position={[-0.695, 1.115, 1.124]} />
      <mesh geometry={nodes.pipe022.geometry} material={materials.Pipes} position={[-0.626, 1.082, 0.895]} />
      <mesh geometry={nodes.pipe023.geometry} material={materials.Pipes} position={[-0.474, 1.117, 1.101]} />
      <mesh geometry={nodes.pipe027.geometry} material={materials.Pipes} position={[-1.518, 0.75, -0.748]} rotation={[0, 0, Math.PI / 2]} scale={1.844} />
      <mesh geometry={nodes.pipe028.geometry} material={materials.Pipes} position={[-0.554, 0.483, -0.641]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={1.904} />
      <mesh geometry={nodes.pipe029.geometry} material={materials.Pipes} position={[-2.044, 0.217, -0.493]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={5.905} />
      <mesh geometry={nodes.pipe026.geometry} material={materials.Pipes} position={[-2.044, 0.554, -0.493]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={5.905} />
      <mesh geometry={nodes.pipe030.geometry} material={materials.Pipes} position={[-2.76, 0.749, -0.752]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={1.844} />
      <mesh geometry={nodes.wheel001.geometry} material={materials.Metal} position={[-3.266, 0.676, -0.762]} rotation={[0, -1.563, 0]} scale={0.173} />
      <mesh geometry={nodes.pipe031.geometry} material={materials.Pipes} position={[-4.357, 0.475, -0.784]} rotation={[Math.PI / 2, 0, 0]} scale={1.832} />
      <mesh geometry={nodes.pipe032.geometry} material={materials.Pipes} position={[-4.271, 0.47, 12.512]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={5.824} />
      <mesh geometry={nodes.pipe033.geometry} material={materials.Pipes} position={[-5.236, 0.474, -1.447]} rotation={[Math.PI / 2, 0, -1.57]} scale={5.744} />
      <mesh geometry={nodes.pipe041.geometry} material={materials.Pipes} position={[4.189, 0.479, -0.55]} rotation={[Math.PI / 2, 0, -1.57]} scale={5.744} />
      <group position={[5.576, 0.568, -2.73]} rotation={[Math.PI, -0.014, Math.PI]} scale={3.949}>
        <mesh geometry={nodes.Cylinder047.geometry} material={materials.Pipes} />
        <mesh geometry={nodes.Cylinder047_1.geometry} material={materials.brass} />
      </group>
      <group position={[5.618, 0.568, -1.576]} rotation={[Math.PI, -0.014, Math.PI]} scale={3.949}>
        <mesh geometry={nodes.Cylinder047.geometry} material={materials.Pipes} />
        <mesh geometry={nodes.Cylinder047_1.geometry} material={materials.brass} />
      </group>
      <group position={[5.651, 0.568, -0.462]} rotation={[Math.PI, -0.014, Math.PI]} scale={3.949}>
        <mesh geometry={nodes.Cylinder047.geometry} material={materials.Pipes} />
        <mesh geometry={nodes.Cylinder047_1.geometry} material={materials.brass} />
      </group>
      <mesh geometry={nodes.pipe042.geometry} material={materials.Pipes} position={[-0.028, 0.869, -5.563]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={1.832} />
      <mesh geometry={nodes.pipe043.geometry} material={materials.Pipes} position={[5.577, 0.484, 0.081]} rotation={[Math.PI / 2, 0, 0]} scale={1.892} />
      <mesh geometry={nodes.pipe024.geometry} material={materials.Pipes} position={[-0.188, -0.018, 0.673]} rotation={[-Math.PI, 0, 0]} scale={0.088} />
      <mesh geometry={nodes.pipe025.geometry} material={materials.Pipes} position={[-0.52, -0.018, 0.673]} rotation={[-Math.PI, 0, 0]} scale={0.088} />
      <mesh geometry={nodes.pipe037.geometry} material={materials.Pipes} position={[7.419, 0.685, -11.263]} rotation={[-Math.PI, 0, 0]} scale={0.185} />
      <mesh geometry={nodes.pipe038.geometry} material={materials.Pipes} position={[7.488, 3.673, -11.33]} rotation={[-Math.PI, 0, 0]} scale={0.185} />
      <mesh geometry={nodes.pipe039.geometry} material={materials.Pipes} position={[-8.615, 2.218, -11.372]} rotation={[-Math.PI, 0, 0]} scale={0.185} />
      <mesh geometry={nodes.pipe040.geometry} material={materials.Pipes} position={[-8.63, 4.51, -11.33]} rotation={[-Math.PI, 0, 0]} scale={0.185} />
    </group>
  )
}

useGLTF.preload(model_path)