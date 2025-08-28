import React, { useEffect, useRef, useState } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FrontSide, TextureLoader } from 'three';
import { draco } from 'drei';
import { useBox } from "use-cannon";
import * as THREE from 'three';

const Picture = ({
  url,
  textureUrl,
  scale,
  position,
  openModal,
  physicsSize,
}) => {
  const [ref] = useBox(() => ({
    type: "static",
    args: physicsSize,
    position,
  }));
  const gltf = useLoader(GLTFLoader, url, draco("https://www.gstatic.com/draco/versioned/decoders/1.4.0/"));
  const texture = useLoader(TextureLoader, textureUrl);

  // GLTF modelini kopyalamak için referans oluşturuyoruz
  const clonedScene = useRef();
  const [isColliding, setIsColliding] = useState(false);

  useEffect(() => {
    if (gltf && gltf.scene) {
      clonedScene.current = gltf.scene.clone(); // Her seferinde klonlama yapıyoruz
      clonedScene.current.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.metalness = 0.7;
          child.material.roughness = 0.8;
        }
      });
    }

    const box = new THREE.Box3().setFromObject(clonedScene.current);
    const wall = new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(0, 0, 0), new THREE.Vector3(10, 10, 0.5)); // Duvarın bounding box'ı

    if (box.intersectsBox(wall)) {
      setIsColliding(true); // Çakışma varsa state'i değiştir
    }
  }, [gltf]);
  

  const handlePointerDown = () => {
    if (openModal) {
      openModal(
        <img src={textureUrl} alt="Artwork" style={{ width: '100%', height: 'auto' }} />
      );
    } else {
      console.error("openModal function is not defined.");
      console.log(openModal);
    }
  };

  return (
    <>
      <mesh ref={ref} />
      {/* Klonlanan GLTF sahnesini render ediyoruz */}
      {clonedScene.current && (
        <primitive
          object={clonedScene.current}
          scale={scale}
          position={position}
          rotation={[-Math.PI / 2, 0, 0]} // resim için sabit rotasyon
          dispose={null}
        />
      )}

      {/* Çerçeveyi render ediyoruz */}
      <mesh onPointerDown={handlePointerDown}
        scale={[8.2, 5, 2]} 
        position={position}
        rotation={[0, -Math.PI / 2, 0]} 
      >
        <boxGeometry args={[1.2, 1.5, 0.1]} />
        <meshStandardMaterial
          map={texture}
          side={FrontSide}
          metalness={0.7}
          roughness={0.8}
        />
      </mesh>

      {isColliding && <mesh position={[0, 0, 0]} />}
    </>
  );
};

export default Picture;