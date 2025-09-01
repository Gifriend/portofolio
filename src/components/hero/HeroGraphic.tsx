"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import { Suspense, useRef } from "react"
import * as THREE from "three"

function PixelatedSphere() {
  const sphereRef = useRef<THREE.Points>(null)

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 1.2
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.7
    }
  })

  return (
    <points ref={sphereRef}>
      <icosahedronGeometry args={[1, 4]} />
      <pointsMaterial color="gray" size={0.05} />
    </points>
  )
}

function Birds() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const elapsedTime = clock.getElapsedTime()

    groupRef.current.children.forEach((child, index) => {
      const bird = child as THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>
      const angle = (elapsedTime + index * 0.2) % (2 * Math.PI)
      const radius = 2.3 + Math.random() * 0.0001

      bird.position.x =
        radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index)
      bird.position.y =
        radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index)
      bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index)
    })
  })

  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    )
  })

  return <group ref={groupRef}>{birds}</group>
}

export default function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Canvas
        className="h-1/2 w-1/2 cursor-grab"
        camera={{ fov: 40, position: [0, 0, 5] }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <PixelatedSphere />
          <Birds />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  )
}
