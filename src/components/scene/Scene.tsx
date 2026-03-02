"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import Cursor3D from "@/components/cursor/Cursor3D";
import { cursorStore } from "@/lib/cursorStore";

function FloatingCubes({ count = 140 }) {
    const instanced = useRef<THREE.InstancedMesh>(null!);

    const data = useMemo(
        () =>
            Array.from({ length: count }).map(() => ({
                p: new THREE.Vector3(
                    THREE.MathUtils.randFloatSpread(10),
                    THREE.MathUtils.randFloatSpread(6),
                    THREE.MathUtils.randFloat(-2, -14)
                ),
                r: new THREE.Vector3(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                ),
                s: THREE.MathUtils.randFloat(0.06, 0.22),
                sp: THREE.MathUtils.randFloat(0.2, 1.0),
            })),
        [count]
    );

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            dummy.position.copy(d.p);
            dummy.position.y += Math.sin(t * d.sp + i) * 0.25;
            dummy.position.x += Math.cos(t * d.sp * 0.6 + i) * 0.10;

            dummy.rotation.set(
                d.r.x + t * 0.15,
                d.r.y + t * 0.22,
                d.r.z + t * 0.12
            );

            dummy.scale.setScalar(d.s);
            dummy.updateMatrix();
            instanced.current.setMatrixAt(i, dummy.matrix);
        }

        instanced.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={instanced} args={[undefined as any, undefined as any, count]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
                color="#ff1b2d"
                emissive="#ff1b2d"
                emissiveIntensity={0.7}
                roughness={0.35}
                metalness={0.6}
                transparent
                opacity={0.75}
            />
        </instancedMesh>
    );
}

function HeroCube() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const mat = mesh.current.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 1.7 + Math.sin(t * 1.8) * 0.35;
    });

    return (
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
            <mesh
                ref={mesh}
                onPointerOver={() => (cursorStore.hovering = true)}
                onPointerOut={() => (cursorStore.hovering = false)}
            >
                <boxGeometry args={[1.25, 1.25, 1.25]} />
                <meshStandardMaterial
                    color="#ff1b2d"
                    emissive="#ff1b2d"
                    emissiveIntensity={1.9}
                    roughness={0.25}
                    metalness={0.7}
                />
            </mesh>
        </Float>
    );
}

function CameraRig() {
    useFrame(({ camera }) => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, cursorStore.x * 0.35, 0.06);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, cursorStore.y * 0.25, 0.06);
        camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function Scene() {
    return (
        <div className="absolute inset-0">
            <Canvas
                camera={{ position: [0, 0, 4.2], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
            >
                <fog attach="fog" args={["#050507", 3, 10]} />

                <ambientLight intensity={0.35} />
                <directionalLight position={[4, 4, 4]} intensity={1.2} />
                <pointLight position={[-3, 0, 2]} intensity={2.2} color="#ff1b2d" />

                <Stars radius={40} depth={30} count={900} factor={2} fade speed={1} />
                <FloatingCubes />
                <HeroCube />
                <CameraRig />
                <Cursor3D />

                <Environment preset="city" />

                <EffectComposer>
                    <Bloom
                        intensity={1.15}
                        luminanceThreshold={0.18}
                        luminanceSmoothing={0.9}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
