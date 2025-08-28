import React, { useMemo } from 'react';
import * as THREE from 'three';
import { useBox } from "use-cannon";

const Wall = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl 
}) => {
    let texture, normal;
    const size = 20;

    const [refFront] = useBox(() => ({ 
        type: "static", 
        args: [130, 50, 1],
        position: [0, 0, -70],
    }));
    const [refBack] = useBox(() => ({ 
        type: "static", 
        args: [100, 50, 1],
        position: [0, 0, 75],
    }));
    const [refL] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 150],
        position: [-60, 0, 0],
    }));
    const [refR] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 150],
        position: [60, 0, 0],
    }));
    const [refTop] = useBox(() => ({ 
        type: "static", 
        args: [170, 1, 170],
        position: [0, 26, 15],
    }));

    texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);

    normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl]);
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(size, size);
 
    return (        
            <>
            <mesh ref={refFront} scale={scale} rotation={rotation}>
                <boxGeometry args={[130, 51, 1]} />
                <meshStandardMaterial map={texture} normalMap={normal} metalness={0} roughness={1} side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={refBack} scale={scale} rotation={rotation}>
                <boxGeometry args={[130, 50, 1]} />
                <meshStandardMaterial map={texture} normalMap={normal} metalness={0} roughness={1} side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={refL} scale={scale} rotation={rotation}>
                <boxGeometry args={[1, 50, 150]} />
                <meshStandardMaterial map={texture} normalMap={normal} metalness={0} roughness={1} side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={refR} scale={scale} rotation={rotation}>
                <boxGeometry args={[1, 50, 150]} />
                <meshStandardMaterial map={texture} normalMap={normal} metalness={0} roughness={1} side={THREE.DoubleSide} />
            </mesh>
            <mesh ref={refTop} scale={scale} rotation={rotation}>
                <boxGeometry args={[170, 1, 170]} />
                <meshStandardMaterial map={texture} normalMap={normal} metalness={0} roughness={1} side={THREE.DoubleSide} />
            </mesh>
            </>
    )
  }

  export default Wall;