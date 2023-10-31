import React, { useState, useRef, useEffect } from 'react'
import { useFrame } from "@react-three/fiber"
import { Clouds, Cloud, } from "@react-three/drei"
import { useControls } from 'leva'
import { MeshLambertMaterial } from 'three'
import { useSpring, animated } from '@react-spring/three'
import { gsap } from "gsap"

function Steam() {
    const ref = useRef()
    const cloud0 = useRef()
    const [opc, setOpc] = useState(1)
    const { color, x, y, z, range, ...config } = useControls({
      seed: { value: 1, min: 1, max: 100, step: 1 },
      segments: { value: 20, min: 1, max: 80, step: 1 },
      volume: { value: 0.2, min: 0, max: 100, step: 0.1 },
      opacity: { value: 1, min: 0, max: 1, step: 0.01 },
      fade: { value: 10, min: 0, max: 400, step: 1 },
      growth: { value: 1, min: 0, max: 20, step: 1 },
      speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
      x: { value: 1, min: 0, max: 10, step: 0.1 },
      y: { value: 0.3, min: 0, max: 10, step: 0.1 },
      z: { value: 0.1, min: 0, max: 10, step: 0.1 },
      color: "white",
    })
/*   
    useFrame((state, delta) => {
      //cloud0.current.position.x = Math.abs(Math.sin(state.clock.elapsedTime/4)) % 0.2
      //console.log(Math.sin(state.clock.elapsedTime/2))
      cloud0.current.position.y = 2 + (0.1 * Math.sin(state.clock.elapsedTime))
    })
    
    useEffect(() => {
      console.log(cloud0.current)
    
      gsap.to(cloud0.current.position ,{ x: 5.5, duration: 5, 
        onComplete(){
          console.log('gsap end')
          //setOpc(0)
        }});

      gsap.to(config ,{ growth: 10, duration: 15});
    
    }, []); */
    
    const props = useSpring({
      from: { opacity: 1 },
      to: { opacity: 0 },
    })

    return (
      <>       
        <animated.group ref={ref}>
          <Clouds material={MeshLambertMaterial} limit={50} range={range}>
            <Cloud ref={cloud0} {...config} props bounds={[x, y, z]} color={color} position={props}/>
{/*             <Cloud {...config} bounds={[x, y, z]} color="#eed0d0" seed={2} position={[2, 2, 0]} />
            <Cloud {...config} bounds={[x, y, z]} color="#d0e0d0" seed={3} position={[-2, 2, 0]} />
            <Cloud concentrate="outside" growth={100} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={200} /> */}
          </Clouds>
        </animated.group>
      </>
    )
}

export default Steam