
import React, { useRef, useEffect } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Bench = ({
  url,
  scale,
  position,
  rotation,
  physicsSize,
}) => {
  const [ref] = useBox(() => ({
    type: "static",
    args: physicsSize,
    position,
  }));

  // Klonlanan sahneyi saklamak için referans oluşturuyoruz
  const clonedScene = useRef();

  const gltf = useLoader(GLTFLoader, url, draco("https://www.gstatic.com/draco/versioned/decoders/1.4.0/"));

  useEffect(() => {
    if (gltf && gltf.scene) {
      clonedScene.current = gltf.scene.clone(); // Sahneyi klonluyoruz
      clonedScene.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = 0.1;
          child.material.roughness = 1;
          child.material.clearcoat = 0.9;
          child.material.clearcoatRoughness = 0.1;
        }
      });
    }
  }, [gltf]);

  return (
    <>
      <mesh ref={ref} />
      {/* Klonlanmış sahneyi render ediyoruz */}
      {clonedScene.current && (
        <primitive
          scale={scale}
          position={position}
          rotation={rotation}
          object={clonedScene.current}
          dispose={null}
        />
      )}
    </>
  );
};

export default Bench;
