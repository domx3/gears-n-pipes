import React, { useState, useRef, useEffect } from 'react'
import { useLoader, useThree, extend } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useSpring, a } from '@react-spring/three'
import { CardTransitionMaterial } from '../../shaders/cardTransitionMaterial'

extend({
  CardTransitionMaterial,
});

export function CardMobile({ pages, iCard, lookAtScreen}) {
  
  const cardTextures = useLoader(TextureLoader, pages.map((page)=> 'cards-m/card-'+page.card+'-m.jpg'))
  const ref = useRef();
  const {invalidate} = useThree()
  
  const [prevICard, setPrevICard] = useState(0)
  const [trans, setTrans] = useState(false)

  useEffect(() =>{
    setTrans(true)    
  }, [iCard])

  const {dispf} = useSpring({
    from: {dispf: 0},
    to: { dispf: trans ? 1: 0},
    config: { duration: 500 },
    onChange: (result) => {
      ref.current.dispFactor = result.value.dispf * 5
      invalidate()
    },
    onResolve: () => (setPrevICard(iCard), setTrans(false))
  })
  
  return (
    <group dispose={null}>
      <mesh 
        position={[0.015197, 1.3, 0.04505]} 
        onClick={lookAtScreen}
      >
        <planeGeometry args={[0.924, 1.63]} />

        {/* <meshBasicMaterial 
          map={cardTextures[iCard]}          
          toneMapped={false}
        /> */}
      <cardTransitionMaterial
        /* key={cardTransitionMaterial.key} */
        ref={ref}
        tex={cardTextures[prevICard]}
        tex2={cardTextures[iCard]}
        toneMapped={false}
      />
      
      </mesh>

    </group>
  )
}


