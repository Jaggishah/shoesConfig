import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Stats, OrbitControls, Stage } from '@react-three/drei';
import GltfModel from "./GltfModel";


const Model = () => {

  return (
    <Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
          <OrbitControls enableRotate={true}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={-Math.PI/2}
          minDistance={10}
          maxDistance={80}
          />
          <color attach="background" args={['skyblue']} />
          {/* <Stats /> */}
          <Stage adjustCamera={1} 
          preset="rembrandt"
          intensity={0.5} 
          shadows={{ type: 'contact', color: 'skyblue', colorBlend: 1, opacity: 1 }}
          environment="city">
            <GltfModel/>
          </Stage>
      </Canvas>
  )
}

export default Model
