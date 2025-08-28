import React from 'react';
import Picture from '../Picture/Picture';
import Display from '../Display/Display';

const Art = ({ openModal, textureUrl }) => {

  // const handlePointerDown = () => {
  //   openModal(
  //     <img src={textureUrl} alt="Artwork" />
  //   );
  // };

  return (
    <>
      {/* liam portrait */}
      {/* <mesh onPointerDown={() => handlePointerDown()}>
        <Picture 
          url={"/the-gallery/assets/3D/Portrait/scene.gltf"}
          textureUrl={textureUrl}
          scale={[4, 4, 4]}
          position={[30, 9, -18.5]}            
          rotation={[0, -Math.PI/2, 0]}
          framePosition={[30, 9, -18.7]}
          frameRotation={[0, 0, 0]}
          frameScale={[4, 4, 4]}
          metalness={0.9}
          roughness={0.9}
        />
      </mesh> */}
      <Display position={[30, 5, -20]} size={[1, 25, 40]} rotation={[0, Math.PI / 2, 0]} />
         
      {/* creation of adam */}
      {/* <mesh onPointerDown={() => handlePointerDown()}>
      <Picture 
          url={"/the-gallery/assets/3D/Hands/scene.gltf"}
          textureUrl={textureUrl}
          scale={[0.1, 0.1, 0.1]}
          position={[59, 12, 12]}            
          rotation={[0, -Math.PI / 2, Math.PI]}
          framePosition={[59, 9, 12]}
          frameRotation={[0, -Math.PI / 2, 0]}
          frameScale={[11, 4, 2]}
          metalness={0}
          roughness={0.9}
      />
      </mesh> */}

      {/* wedding */}
      {/* <mesh onPointerDown={() => handlePointerDown()}>
      <Picture 
          url={"/the-gallery/assets/3D/Wedding/scene.gltf"}
          textureUrl={textureUrl}
          scale={[2.5, 2.5, 2.5]}
          position={[19.3, 8, 28.4]}            
          rotation={[Math.PI / 2, Math.PI, Math.PI / 4]}
          framePosition={[19.3, 8, 28.4]}
          frameRotation={[0, - Math.PI / 4, 0]}
          frameScale={[4.7, 3.7, 0.5]}
          metalness={0.0}
          roughness={0.3}
      />
      </mesh> */}
      <Display position={[27, 10, 35]} size={[1, 23, 40]} rotation={[0, Math.PI / 4, 0]} />

      {/* wilson portrait */}
      {/* <mesh onPointerDown={() => handlePointerDown()}>
      <Picture 
          url={"/the-gallery/assets/3D/Wilson/scene.gltf"}
          textureUrl={textureUrl}
          scale={[2.5, 2.5, 2.5 ]}
          position={[-19, 9, -19.3]}            
          rotation={[0, -Math.PI/2, 0]}
          framePosition={[-19, 9, -19.4]}
          frameRotation={[0, 0, 0]}
          frameScale={[4.54, 4, 2 ]}
          metalness={0}
          roughness={0.3}
      />
      </mesh> */}
      <Display position={[-30, 5, -20]} size={[1, 25, 40]} rotation={[0, -Math.PI / 2, 0]} />

      {/* old man portrait */}
      {/* <mesh onPointerDown={() => handlePointerDown()}>
      <Picture 
          url={"/the-gallery/assets/3D/OldMan/scene.gltf"}
          textureUrl={textureUrl}
          scale={[4, 4, 4]}
          position={[-19.3, 8, 28]}            
          rotation={[0, -Math.PI / 4, 0]}
          framePosition={[-19.4, 8, 27.9]}
          frameRotation={[0, Math.PI / 4, 0]}
          frameScale={[4, 4, 4]}
          metalness={0.9}
          roughness={0.9}
      />
      </mesh> */}
      <Display position={[-27, 10, 35]} size={[1, 23, 40]} rotation={[0, -Math.PI / 4, 0]} />

      {/* girl portrait
      <mesh onPointerDown={() => handlePointerDown()}>
      <Picture 
          url={"/the-gallery/assets/3D/Girl/scene.gltf"}
          textureUrl={textureUrl}
          scale={[6.5, 6.5, 6.5]}
          position={[-58, 10, 12]}            
          rotation={[-Math.PI / 2, 0, 0]}
          framePosition={[-58, 10, 12]}
          frameRotation={[0, -Math.PI / 2, 0]}
          frameScale={[8.2, 5, 2]}
          metalness={0.7}
          roughness={0.8}
      />
      </mesh> */}
    </>
  );
}

export default Art;
