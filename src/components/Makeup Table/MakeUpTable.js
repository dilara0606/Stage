import React from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import * as THREE from 'three';

const MakeUpTable = ({ modelUrl, position = [0, 0, 0], scale = [0.5, 0.5, 0.5], rotation = [0, 0, 0] }) => {
    const gltf = useLoader(GLTFLoader, modelUrl, draco("https://www.gstatic.com/draco/versioned/decoders/1.4.0/"));

    console.log("GLTF Model:", gltf);
    console.log("Scene Children:", gltf.scene.children);

    return (
        <group position={position} scale={scale} rotation={rotation}>
            {gltf.scene.children.length > 0 ? (
                <>
                    {/* Ana Model */}
                    <primitive object={gltf.scene} />

                    {/* Görünmez Çarpışma Alanları */}
                    {gltf.scene.children.map((child, index) => {
                        const bbox = new THREE.Box3().setFromObject(child);
                        const size = bbox.getSize(new THREE.Vector3());

                        return (
                            <mesh key={index} position={child.position}>
                                <boxGeometry args={[size.x, size.y, size.z]} />
                                <meshStandardMaterial transparent opacity={0} />
                            </mesh>
                        );
                    })}
                </>
            ) : (
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            )}
        </group>
    );
};

export default MakeUpTable;
