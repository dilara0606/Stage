import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import { Stars, Sky, /* Stats */ } from "@react-three/drei";
import Moon from '../Moon/Moon';
import Ground from '../Ground/Ground';
import Camera from '../Camera/Camera';
import Player from '../Player/Player';
import Lights from '../Lights/Lights';
import Stage from '../Stage/Stage.js';
import Shop from '../Shop/Shop.js';


const App = () => {
  const [night, setNight] = useState(true)
  const [performance, setPerformance] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch(e.code) {
        case "KeyN":
          setNight(!night)
          return;
        case "KeyP":
          setPerformance(!performance)
          return;
        default: return;
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [night, performance])  


  return (

    <>
      <Canvas 
        onCreated={({ gl }) => { 
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <Camera fov={60} />
        
        {night ? 
          <>

             <Suspense fallback={null}>

             </Suspense>
            
          </>
          : 
          <>

            
          </>
        }

        <Lights 
          night={night}
          performance={performance}
        />
             
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <Ground /> 
        
            <Stage 
                modelUrl={"/the-gallery/assets/3D/Stage/scene.gltf"} 
                position={[0, 0.1, 10]} 
                scale={[3, 3, 3]} 
                rotation={[0, 0, 0]}
                texturePaths={{
                    backwall4: "/the-gallery/assets/3D/Stage/Textures/backwall4_baseColor.jpeg",
                    dec1: "/the-gallery/assets/3D/Stage/Textures/dec1_baseColor.jpeg",
                    house: "/the-gallery/assets/3D/Stage/Textures/house_baseColor.jpeg",
                    light1: "/the-gallery/assets/3D/Stage/Textures/light1_baseColor.jpeg",
                    plant: "/the-gallery/assets/3D/Stage/Textures/plant_baseColor.jpeg",
                    screen1: "/the-gallery/assets/3D/Stage/Textures/screen1_baseColor.jpeg",
                    screen2: "/the-gallery/assets/3D/Stage/Textures/screen2_baseColor.jpeg",
                    seat: "/the-gallery/assets/3D/Stage/Textures/seat_baseColor.jpeg",
                    silver_frame: "/the-gallery/assets/3D/Stage/Textures/silver_frame_baseColor.jpeg",
                    spot1a: "/the-gallery/assets/3D/Stage/Textures/spot1a_baseColor.jpeg",
                    spot2a: "/the-gallery/assets/3D/Stage/Textures/spot2a_baseColor.jpeg",
                    stage3: "/the-gallery/assets/3D/Stage/Textures/stage3_baseColor.jpeg",
                    wall1: "/the-gallery/assets/3D/Stage/Textures/wall1_baseColor.jpeg",
                }}
            />

<Shop 
                modelUrl={"/the-gallery/assets/3D/Shop/scene.gltf"} 
                position={[-96, 0.1, 106.5]} 
                scale={[5, 5, 5]} 
                rotation={[0, 0, 0]}
                texturePaths={{
                    BangheMAT: "/the-gallery/assets/3D/Shop/Textures/BangheMAT_baseColor.png",
                    ChailoMAT: "/the-gallery/assets/3D/Shop/Textures/ChailoMAT_baseColor.png",
                    Material__21474558531: "/the-gallery/assets/3D/Shop/Textures/Material__21474558531_baseColor.png",
                    santuongMAT: "/the-gallery/assets/3D/Shop/Textures/santuongMAT_baseColor.png"
                }}
            />

             
          </Suspense>      
          <Player />       
        </Physics>
        {/* <Stats  showPanel={0} /> */}
      </Canvas>
    </>
  );
}

export default App;