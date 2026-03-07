'use client';

import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { cursorStore } from '@/lib/cursorStore';

export default function Cursor3D() {
    const mesh = useRef<THREE.Mesh>(null!);
    const { camera } = useThree();

    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const plane = useMemo(
        () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
        [],
    );

    const target = useMemo(() => new THREE.Vector3(), []);
    const pos = useMemo(() => new THREE.Vector3(), []);

    // ✅ IMPORTANT: use a real Vector2 for setFromCamera
    const mouse = useMemo(() => new THREE.Vector2(), []);

    // ✅ IMPORTANT: reuse vector so we don’t allocate every frame
    const camDir = useMemo(() => new THREE.Vector3(), []);
    const planePoint = useMemo(() => new THREE.Vector3(), []);
    const scaleVec = useMemo(() => new THREE.Vector3(), []);

    useFrame((_, delta) => {
        // Plane in front of camera (reused vectors)
        camera.getWorldDirection(camDir);
        planePoint.copy(camera.position).addScaledVector(camDir, 1.5);
        plane.setFromNormalAndCoplanarPoint(camDir, planePoint);

        // Ray to plane (Vector2 required)
        mouse.set(cursorStore.x, cursorStore.y);
        raycaster.setFromCamera(mouse, camera);
        const hit = raycaster.ray.intersectPlane(plane, target);

        // Only update position if intersection succeeded
        if (hit) {
            pos.lerp(target, 1 - Math.pow(0.001, delta));
        }
        mesh.current.position.copy(pos);

        // Hover reaction (reuse scale vector)
        const s = cursorStore.hovering ? 1.6 : 1.0;
        scaleVec.set(s, s, s);
        mesh.current.scale.lerp(scaleVec, 0.18);
    });

    return (
        <mesh ref={mesh} renderOrder={999}>
            <sphereGeometry args={[0.06, 32, 32]} />
            <meshBasicMaterial
                color="#ffffff"
                toneMapped={false}
                depthTest={false}
                transparent
                opacity={0.9}
            />
        </mesh>
    );
}
