import React from 'react';
import { useBox } from "use-cannon";

const Glass = () => {
    const [refLeft] = useBox(() => ({ 
        type: "static", 
        args: [10, 20, 3], 
        position: [-30, 25, -69] 
    }));

    const [refRight] = useBox(() => ({ 
        type: "static", 
        args: [10, 20, 3], 
        position: [30, 25, -69] 
    }));

    return (
        <>
            <mesh ref={refLeft}>
                <boxGeometry />
                <meshStandardMaterial transparent opacity={0.5} />
            </mesh>
            <mesh ref={refRight}>
                <boxGeometry />
                <meshStandardMaterial transparent opacity={0.5} />
            </mesh>
        </>
    );
}

export default Glass;
