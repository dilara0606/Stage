import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';
import Spotlight from '../SpotLight/Spotlight';

const Lights = ({ night, performance }) => {
    return (
        <>
            <ambientLight intensity={night ? 0.05 : 0.15} />
            
            {/* Moon/Sunlight */}
            <DirectionalLight
                position={[29, 50, -60]}
                target={[-5, -3, 50]}
                intensity={night ? 0.15 : 0.2}  // 🔽 Azaltıldı
                color={night ? "skyblue" : "lightgoldenrodyellow"}
                shadowCamBot={-30}
                shadowCamTop={30}
                shadowCamL={53}
                shadowCamR={-53}
            />   

            {/* Moon Light */}
            {night ? (
                <Spotlight
                    position={[0, 80, -120]}
                    target={[80, 150, -200]}
                    intensity={0.3} // 🔽 Azaltıldı
                    penumbra={0.5}                
                    sNormalBias={0}
                    sBias={0}
                    angle={-Math.PI}
                    decay={2}               
                />
            ) : null}   

            <PointLight 
                intensity={performance ? 0.15 : 0.4}  // 🔽 Azaltıldı
                position={[0, 19, 13]}
            /> 

            {performance ? (
                <>
                    {/* Liam Portrait Light */}
                    <SpotLight 
                        position={[12, 19.5, 0]}
                        target={[21, 4, 0]}
                        intensity={1}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI / 10}
                        decay={2}
                    />

                    {/* Wedding Light */}
                    <SpotLight 
                        position={[12, 19.5, 25]}
                        target={[21, 4, 25]}
                        intensity={1}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI / 10}
                        decay={2}
                    />

                    {/* Wilson Light */}
                    <SpotLight 
                        position={[20, 19.5, -2]}
                        target={[-21, 4, 0]}
                        intensity={1}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI / 10}
                        decay={2}
                    />

                    {/* Old Man Light */}
                    <SpotLight 
                        position={[-12, 19.5, 25]}
                        target={[-21, 4, 25]}
                        intensity={1}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0.05}
                        sBias={0}
                        angle={Math.PI / 10}
                        decay={2}
                    />

                    {/* Creation of Adam Light */}
                    <SpotLight 
                        position={[28, 18, 12]}
                        target={[34.5, 13, 12]}
                        intensity={0.8}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0}
                        sBias={-0.001}
                        angle={Math.PI / 4}
                        decay={2}
                    />

                    {/* Girl Portrait Light */}
                    <SpotLight 
                        position={[-28, 18, 12]}
                        target={[-34.5, 13, 12]}
                        intensity={0.8}  // 🔽 Azaltıldı
                        penumbra={0.5}                
                        sNormalBias={0}
                        sBias={-0.001}
                        angle={Math.PI / 4}
                        decay={2}
                    />
                </>
            ) : null}
        </>
    );
}

export default Lights;
