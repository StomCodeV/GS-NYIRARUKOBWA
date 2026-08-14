'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function SchoolBuilding() {
  const group = useRef()

  return (
    <group ref={group}>
      {/* Main building */}
      <Box position={[0, 1, 0]} args={[4, 2, 2]} castShadow>
        <meshStandardMaterial color="#1a3a6b" metalness={0.3} roughness={0.7} />
      </Box>
      
      {/* Roof */}
      <Box position={[0, 2.5, 0]} args={[4.4, 0.2, 2.2]} castShadow>
        <meshStandardMaterial color="#c9a84c" metalness={0.4} roughness={0.3} />
      </Box>
      
      {/* Windows */}
      {[[-1.2, 1.2], [1.2, 1.2], [-1.2, 0], [1.2, 0], [-1.2, -1], [1.2, -1]].map(([x, y], i) => (
        <Box key={i} position={[x, y + 1, 1.01]} args={[0.4, 0.3, 0.05]}>
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.3} />
        </Box>
      ))}
      
      {/* Door */}
      <Box position={[0, 0.5, 1.01]} args={[0.6, 0.8, 0.05]}>
        <meshStandardMaterial color="#4a2b7a" />
      </Box>
      
      {/* Ground */}
      <Box position={[0, -0.1, 0]} args={[8, 0.05, 8]} receiveShadow>
        <meshStandardMaterial color="#0a1628" />
      </Box>
      
      {/* Trees */}
      {[[-3, 1], [3, 1]].map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <Sphere position={[0, 0.8, 0]} args={[0.4, 8, 8]}>
            <meshStandardMaterial color="#1a5c1a" />
          </Sphere>
          <Box position={[0, 0.2, 0]} args={[0.08, 0.4, 0.08]}>
            <meshStandardMaterial color="#8B4513" />
          </Box>
        </group>
      ))}
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-[60vh] lg:h-[80vh] relative">
      <Canvas
        camera={{ position: [6, 4, 6], fov: 45 }}
        shadows
        className="absolute inset-0"
      >
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <SchoolBuilding />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2.5}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          G.S NYIRARUKOBWA
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Learning Today. Building Tomorrow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/about" className="btn-primary">
            Explore Our School
          </a>
          <a href="/apply" className="btn-secondary">
            Apply Online
          </a>
        </div>
      </div>
    </div>
  )
}
