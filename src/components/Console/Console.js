import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';
import { useBox } from 'use-cannon';

const Console = ({
  url,
  scale,
  position,  
  rotation,
  baseColor,
  normal,
  metallicRoughness
}) => {
    const { scene } = useLoader(GLTFLoader, url, draco("https://www.gstatic.com/draco/versioned/decoders/1.4.0/"));

    const [ref] = useBox(() => ({
      type: 'Static',
      position: position,
      rotation: rotation,
      args: scale
    }), [position, rotation, scale]);

    scene.traverse(function (child) {
      if (child.isMesh) {                                     
          child.castShadow = true;
          child.receiveShadow = true;
          child.material.toneMapped = false;
          child.material.baseColor = baseColor;
          child.material.normal = normal;
          child.material.metallicRoughness = metallicRoughness;
      }
    });

    return (
         <primitive 
            ref={ref} 
            scale={scale} 
            position={position}
            rotation={rotation}
            object={scene}                    
            dispose={null}
          />
    )
}

export default Console;
