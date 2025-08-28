import React from 'react';
import Wall from '../Wall/Wall';
import WindowFrame from '../WindowFrame/WindowFrame.js';
import Glass from '../Glass/Glass';
import RedCarpet from '../RedCarpet/RedCarpet.js';

const Building = () => {
    return (
        <>
            {/* Arka Duvar */}
            <Wall 
                position={[0, 0, -13.5]}
                mapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall.jpg"}
                normalMapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}
                scale={[1, 1, 1]}
                rotation={[0, 0, 0]}
            /> 

            {/* Sol Duvar */}
            <Wall 
                position={[-6.75, 0, -6.75]}
                mapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall.jpg"}
                normalMapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}
                scale={[1, 1, 1]}
                rotation={[0, Math.PI / 2, 0]}
            /> 

            {/* Sağ Duvar */}
            <Wall 
                position={[6.75, 0, -6.75]}
                mapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall.jpg"}
                normalMapUrl={"/the-gallery/assets/3D/Wall/Textures/White_Wall_NORMAL.jpg"}
                scale={[1, 1, 1]}
                rotation={[0, -Math.PI / 2, 0]}
            /> 


            <RedCarpet>
                position={[6.75, 0, -6.75]}
                mapUrl={"/the-gallery/assets/3D/RedCarpet/textures/red_carpet_baseColor.png"}
                scale={[1, 1, 1]}
                rotation={[0, -Math.PI / 2, 0]}
                modelUrl={"/the-gallery/assets/3D/RedCarpet/scene.gltf"}
            </RedCarpet>
        </>
    );
}

export default Building;
