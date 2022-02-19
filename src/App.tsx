import React from 'react'
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import AnimatedSphere from './components/AnimatedSphere'

function App() {
  return (
    <div
      style={{
        height: '100vh',
        marginLeft: '30rem',
      }}
    >
      <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
