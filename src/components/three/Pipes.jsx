import React from 'react'
import { useGLTF } from '@react-three/drei'

const model_path = 'objects/pipes.glb'

export function Pipes(props) {
  
  const { nodes, materials } = useGLTF(model_path)
  
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.pipe001.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe030.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe055.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe093.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe119.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe144.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe169.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe194.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe219.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe244.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe263.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe288.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe313.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe339.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe364.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe389.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe402.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe427.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe452.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe477.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe502.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe528.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe591.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe616.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe641.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe690.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe703.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe728.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe748.geometry}
        material={materials["brass.001"]}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe749.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe774.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe799.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe812.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe837.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe850.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe870.geometry}
        material={materials["brass.001"]}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe871.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe891.geometry}
        material={materials["brass.001"]}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe892.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe917.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe942.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe967.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe992.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe1017.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe1042.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe1067.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.wheel001.geometry}
        material={materials.Metal}
        position={[-3.266, 0.676, -0.762]}
        rotation={[0, -1.563, 0]}
        scale={0.173}
      />
      <mesh
        geometry={nodes.pipe080.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe338.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe666.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe729.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe731.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe733.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe735.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe737.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe739.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe741.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe851.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe853.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe855.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe857.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe859.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe861.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe863.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe872.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe874.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe876.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe878.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe880.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe882.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe884.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe553.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
      <mesh
        geometry={nodes.pipe578.geometry}
        material={materials.Pipes}
        position={[-0.348, 1.076, 0.959]}
      />
    </group>
  )
}

useGLTF.preload(model_path)