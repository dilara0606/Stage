import React, { useEffect, useRef } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { PointerLockControls as PointerLockControlsExt } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControlsExt });

const PointerLockControls = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    const handleClick = () => {
      if (controls.current) {
        controls.current.lock();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'f' || event.key === 'F') {
        if (controls.current) {
          // Toggle pointer lock
          if (document.pointerLockElement === gl.domElement) {
            document.exitPointerLock();
          } else {
            controls.current.lock();
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl.domElement]);

  return (
    <pointerLockControlsExt
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};

export default PointerLockControls;
