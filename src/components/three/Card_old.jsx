import React, { useState, useRef, useEffect } from 'react'
import { useLoader, useThree, extend, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useSpring, } from '@react-spring/three'
import { CardTransitionMaterial } from '../../shaders/CardTransitionMaterial'
import { easing } from 'maath'

extend({
  CardTransitionMaterial,
});

export function Card1({pages, iCard, lookAtScreen}) {
  
  const cardTextures = useLoader(TextureLoader, pages.map((page)=> 'cards/' + page.card + '.jpg'))
  const ref = useRef();
    
  const [prevICard, setPrevICard] = useState(0)
  const [trans, setTrans] = useState(false)

  useEffect(() =>{
    setTrans(true)
    
  }, [iCard])

/*   const {dispf} = useSpring({
    from: {dispf: 0},
    to: { dispf: trans ? 1 : 0},
    config: { duration: 500 },
    onResolve: () => (setPrevICard(iCard), setTrans(false))
  }) */
  
  useFrame((_state, delta) => {
    //easing.damp(ref.current, "dispFactor", trans ? 1 : 0, 0.4, delta);
  });

  return (
    <group dispose={null}>
      <mesh 
       position={[0.001037, 1.98574, 0.645459]} 
       onClick={lookAtScreen}
       onPointerOver={() => document.body.style.cursor = 'zoom-in'}
       onPointerOut={() => document.body.style.cursor = 'auto'}
      >
      <planeGeometry args={[1.52, 0.822]} />
      {<cardTransitionMaterial
        ref={ref}
        tex={cardTextures[prevICard]}
        tex2={cardTextures[iCard]}
        
        toneMapped={false}
        />}
      </mesh>
    </group>
  )
}
