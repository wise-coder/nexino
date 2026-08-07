'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

type RingConfig = {
  rotation: readonly [number, number, number];
  radius: number;
  tube: number;
  color: string;
  opacity: number;
};

function GlobeScene({ reduceMotion }: { reduceMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);

  const rings = useMemo<RingConfig[]>(
    () => [
      { rotation: [0, 0, 0], radius: 1.08, tube: 0.065, color: '#9ECDF9', opacity: 0.88 },
      { rotation: [Math.PI / 2, 0.15, 0.18], radius: 1.14, tube: 0.058, color: '#D3E9FF', opacity: 0.82 },
      { rotation: [Math.PI / 3.2, Math.PI / 4.2, Math.PI / 6], radius: 1.16, tube: 0.062, color: '#6FAAF5', opacity: 0.86 },
      { rotation: [Math.PI / 4.5, -Math.PI / 5.2, Math.PI / 2.8], radius: 1.06, tube: 0.058, color: '#B9D9FF', opacity: 0.78 },
      { rotation: [Math.PI / 1.75, Math.PI / 10, -Math.PI / 3.8], radius: 1.1, tube: 0.055, color: '#8EC3FA', opacity: 0.8 },
    ],
    [],
  );

  const nodes = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const latitudes = [18, -12, 34, -30, 58, -48, 8, -66];
    const longitudes = [20, 64, 118, 168, 214, 272, 318, 356];

    for (let i = 0; i < 8; i += 1) {
      const radius = 1.16;
      const phi = THREE.MathUtils.degToRad(90 - latitudes[i]);
      const theta = THREE.MathUtils.degToRad(longitudes[i]);
      points.push(new THREE.Vector3().setFromSphericalCoords(radius, phi, theta));
    }

    return points;
  }, []);

  useFrame((state) => {
    if (reduceMotion) return;
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.33;
      groupRef.current.rotation.x = Math.sin(t * 0.18) * 0.08;
      groupRef.current.rotation.z = Math.sin(t * 0.14) * 0.04;
    }

    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.y = -t * 0.16;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 7]} intensity={2} color="#ffffff" />
      <directionalLight position={[-4, -2, 3]} intensity={0.7} color="#5ea6ff" />
      <pointLight position={[3, 1.5, 2.5]} intensity={1.2} color="#d9ecff" />

      <Float
        speed={reduceMotion ? 0 : 1.25}
        rotationIntensity={reduceMotion ? 0 : 0.18}
        floatIntensity={reduceMotion ? 0 : 0.24}
      >
        <group>
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhysicalMaterial
              color="#1655ae"
              roughness={0.32}
              metalness={0.08}
              clearcoat={0.35}
              clearcoatRoughness={0.2}
              sheen={0.15}
              sheenColor="#d9edff"
            />
          </mesh>

          <mesh ref={innerSphereRef}>
            <sphereGeometry args={[0.98, 64, 64]} />
            <meshStandardMaterial
              color="#2f7ee8"
              roughness={0.5}
              metalness={0.05}
              transparent
              opacity={0.46}
              emissive="#0f46a8"
              emissiveIntensity={0.18}
            />
          </mesh>

          <mesh>
            <sphereGeometry args={[1.02, 64, 64]} />
            <meshBasicMaterial color="#dceeff" transparent opacity={0.12} wireframe />
          </mesh>

          <mesh>
            <sphereGeometry args={[1.15, 64, 64]} />
            <meshBasicMaterial color="#9ecdf9" transparent opacity={0.08} />
          </mesh>

          {rings.map((ring) => (
            <mesh
              key={`${ring.rotation.join('-')}-${ring.radius}`}
              rotation={ring.rotation}
              scale={ring.radius}
            >
              <torusGeometry args={[1, ring.tube, 18, 240]} />
              <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} />
            </mesh>
          ))}

          {nodes.map((position, index) => (
            <mesh key={index} position={position}>
              <sphereGeometry args={[index % 3 === 0 ? 0.1 : 0.068, 20, 20]} />
              <meshStandardMaterial
                color="#ffffff"
                roughness={0.05}
                metalness={0}
                emissive="#ffffff"
                emissiveIntensity={0.35}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
}

interface NexinoHeroObjectProps {
  className?: string;
  reduceMotion?: boolean;
}

export function NexinoHeroObject({ className, reduceMotion = false }: NexinoHeroObjectProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <GlobeScene reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}
