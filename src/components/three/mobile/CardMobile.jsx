import React, { useState, useRef, useEffect } from 'react'
import { useLoader, extend, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { CardTransitionMaterial } from '../../../shaders/CardTransitionMaterial'
import { easing } from 'maath'

extend({
  CardTransitionMaterial,
});
const dummy = {dispf: 0}
export function CardMobile({ iCard, pages, trans, setTrans, lookAtScreen }) {
  
  const ref = useRef();
  const cardTextures = useLoader(TextureLoader, pages.map((page)=> 'cards-m/' + page.card + '-m.jpg'))
  const [prevICard, setPrevICard] = useState(0)

  useEffect(() =>{
    //console.log('trans'+ref.current.dispFactor)
    setTrans(true)
    //ref.current.dispFactor = 0
  }, [iCard])

  
  useFrame((_state, delta) => {
    easing.damp(dummy, "dispf", trans ? 1 : 0, 0.4, delta);
    if(trans) {
      ref.current.dispFactor = dummy.dispf  
      if(ref.current.dispFactor === 1) {
        setTrans(false)
        dummy.dispf = 0
        setPrevICard(iCard)
      }
    }
  })
  
  return (
    <group dispose={null}>
      <mesh 
        position={[0.015197, 1.3, 0.04505]} 
        onClick={lookAtScreen}
        onPointerOver={() => document.body.style.cursor = 'zoom-in'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
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


