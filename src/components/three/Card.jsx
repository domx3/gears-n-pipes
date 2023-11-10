import React, { useState, useRef, useEffect } from 'react'
import { useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useSpring, } from '@react-spring/three'
import { CardTransitionMaterial } from '../../shaders/cardTransitionMaterial'

extend({
  CardTransitionMaterial,
});

export function Card({iCard, cardPaths, lookAtScreen}) {
  
  const cardTextures = useLoader(TextureLoader, cardPaths)
  const ref = useRef();
  const {invalidate} = useThree()
  
  const [prevICard, setPrevICard] = useState(0)
  const [trans, setTrans] = useState(false)

  useEffect(() =>{
    setTrans(true)
    
  }, [iCard])

  const {dispf} = useSpring({
    from: {dispf: 0},
    to: { dispf: trans ? 1 : 0},
    config: { duration: 500 },
    onChange: (result) => {
      ref.current.dispFactor = result.value.dispf * 2
      invalidate()
    },
    onResolve: () => (setPrevICard(iCard), setTrans(false))
  })

  return (
    <group dispose={null}>
      <mesh 
       position={[0.001037, 1.98574, 0.645459]} 
       onClick={lookAtScreen}
       onPointerOver={() => document.body.style.cursor = 'zoom-in'}
       onPointerOut={() => document.body.style.cursor = 'auto'}
      >
      <planeGeometry args={[1.52, 0.822]} />
      <cardTransitionMaterial
        ref={ref}
        tex={cardTextures[prevICard]}
        tex2={cardTextures[iCard]}
        toneMapped={false}
        />
      </mesh>
    </group>
  )
}
