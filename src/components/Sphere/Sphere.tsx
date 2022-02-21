import React from 'react'
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import AnimatedSphere from './AnimatedSphere'

const Sphere = () => {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <Canvas className='canvas'>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[-5, 20, 10]}
          intensity={1}
          color={'#F8F4F1'}
        />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Sphere
