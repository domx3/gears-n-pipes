import { shaderMaterial, useTexture } from "@react-three/drei";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { easing, geometry} from "maath";
import { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { CardTransitionMaterial } from "../../shaders/CardTransitionMaterial";

const dummy = {dispf: 0}
export const ImageFadeMaterial = shaderMaterial(
  {
    effectFactor: 1.2,
    dispFactor: 0,
    tex: undefined,
    tex2: undefined,
  },
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`,
  /*glsl*/ ` 
    varying vec2 vUv;
    uniform sampler2D tex;
    uniform sampler2D tex2;
    uniform float _rot;
    uniform float dispFactor;
    uniform float effectFactor;

    float rand(vec2 n) { 
      return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }
    
    float noise(vec2 p){
      vec2 ip = floor(p);
      vec2 u = fract(p);
      u = u*u*(3.0-2.0*u);
      
      float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
      return res*res;
    }

    void main() {
      vec2 uv = vUv;

      float noiseFactor = noise(gl_FragCoord.xy * 0.4);

      vec2 distortedPosition = vec2(uv.x + dispFactor * noiseFactor, uv.y);
      vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * noiseFactor, uv.y);
      vec4 _texture = texture2D(tex, distortedPosition);
      vec4 _texture2 = texture2D(tex2, distortedPosition2);
      vec4 finalTexture = mix(_texture, _texture2, dispFactor);
      gl_FragColor = finalTexture;
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`
);

extend({
  CardTransitionMaterial
});

export function Card ({ iCard, pages, trans, setTrans, lookAtScreen }) {
  
  const ref = useRef();
  const cardTextures = useLoader(TextureLoader, pages.map((page)=> 'cards/' + page.card + '.jpg'))
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
    <mesh 
    position={[0.001037, 1.98574, 0.645459]} 
    onClick={lookAtScreen}
    onPointerOver={() => document.body.style.cursor = 'zoom-in'}
    onPointerOut={() => document.body.style.cursor = 'auto'}
   >
    <planeGeometry args={[1.52, 0.822]} />
      <cardTransitionMaterial
        ref={ref}
        tex2={cardTextures[iCard]}
        tex={cardTextures[prevICard]}
        toneMapped={false}
      />
    </mesh>
  );
};