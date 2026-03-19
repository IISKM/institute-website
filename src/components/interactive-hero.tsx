"use client";

import { Float, OrbitControls, Sphere, Torus, Trail } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function HeroGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) {
      return;
    }

    const targetY = state.pointer.x * 0.45;
    const targetX = state.pointer.y * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08 - 0.05;
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.4}>
        <Trail width={1.2} color="#c07c2d" length={5} attenuation={(t) => t * t}>
          <Sphere args={[1.22, 64, 64]}>
            <meshStandardMaterial color="#d18c3c" roughness={0.35} metalness={0.4} emissive="#3a2c1b" emissiveIntensity={0.35} />
          </Sphere>
        </Trail>
      </Float>
      <Torus args={[2.05, 0.03, 24, 120]} rotation={[Math.PI / 2, 0, 0.25]}>
        <meshStandardMaterial color="#f0bb80" emissive="#f0bb80" emissiveIntensity={0.5} />
      </Torus>
      <Torus args={[2.35, 0.02, 24, 140]} rotation={[0.4, 0.2, 0]}>
        <meshStandardMaterial color="#8f6e4c" opacity={0.8} transparent />
      </Torus>
    </group>
  );
}

export function InteractiveHero() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[radial-gradient(circle_at_15%_15%,rgba(255,215,170,0.36),transparent_36%),radial-gradient(circle_at_80%_30%,rgba(207,164,102,0.33),transparent_40%),linear-gradient(155deg,#16120f_0%,#2d241b_42%,#3a2d22_100%)]">
      <div className="absolute inset-0 opacity-65">
        <Canvas camera={{ position: [0, 0, 5], fov: 52 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 3, 4]} intensity={1.4} color="#ffd7ab" />
          <directionalLight position={[-3, -2, -1]} intensity={0.6} color="#8c623f" />
          <HeroGeometry />
          <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        </Canvas>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_75%,transparent_0%,rgba(14,11,8,0.35)_78%)]" />

      <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/20 bg-black/25 px-4 py-3 text-white backdrop-blur-sm">
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/75">Interactive Leadership Sphere</p>
        <p className="font-display text-lg leading-tight">Move your cursor to explore a dynamic impact field.</p>
      </div>
    </div>
  );
}
