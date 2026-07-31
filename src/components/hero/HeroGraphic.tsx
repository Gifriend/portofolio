"use client"

import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"
import { useTheme } from "@/components/ThemeProvider"

function ParticleSphere({ color1, color2 }: { color1: string; color2: string }) {
  const pointsRef1 = useRef<THREE.Points>(null)
  const pointsRef2 = useRef<THREE.Points>(null)

  // Generate particle positions
  const [positions1, positions2] = useMemo(() => {
    const count1 = 600
    const count2 = 300
    const pos1 = new Float32Array(count1 * 3)
    const pos2 = new Float32Array(count2 * 3)

    // Outer sphere
    for (let i = 0; i < count1; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 1.3 + Math.random() * 0.1 // shell thickness

      pos1[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos1[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos1[i * 3 + 2] = r * Math.cos(phi)
    }

    // Inner core
    for (let i = 0; i < count2; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 0.6 * Math.cbrt(Math.random()) // volume filled

      pos2[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos2[i * 3 + 2] = r * Math.cos(phi)
    }

    return [pos1, pos2]
  }, [])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (pointsRef1.current) {
      pointsRef1.current.rotation.y = elapsedTime * 0.15
      pointsRef1.current.rotation.x = elapsedTime * 0.08
    }
    if (pointsRef2.current) {
      pointsRef2.current.rotation.y = -elapsedTime * 0.25
      pointsRef2.current.rotation.z = elapsedTime * 0.12
    }
  })

  return (
    <group>
      {/* Outer Glow Ring */}
      <points ref={pointsRef1}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions1, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color1}
          size={0.035}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Inner Dense Core */}
      <points ref={pointsRef2}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions2, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color={color2}
          size={0.05}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  )
}

function FloatingStars() {
  const groupRef = useRef<THREE.Group>(null)

  const positions = useMemo(() => {
    const count = 120
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#a1a1aa"
          size={0.02}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
        />
      </points>
    </group>
  )
}

export default function HeroGraphic() {
  const { theme } = useTheme()

  // Adjust colors dynamically based on light/dark mode
  const color1 = theme === "dark" ? "#60a5fa" : "#2563eb" // Blue
  const color2 = theme === "dark" ? "#f472b6" : "#db2777" // Pink/Magenta

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.2 }}
      className="w-full h-full flex items-center justify-center"
    >
      <Canvas
        className="w-full h-full cursor-grab active:cursor-grabbing"
        camera={{ fov: 45, position: [0, 0, 4.5] }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={theme === "dark" ? 0.3 : 0.6} />
        <Suspense fallback={null}>
          <ParticleSphere color1={color1} color2={color2} />
          <FloatingStars />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={0.5} />
      </Canvas>
    </motion.div>
  )
}
