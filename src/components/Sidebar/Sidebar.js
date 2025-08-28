import React, { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, onDragStart }) => {
  const [dragging, setDragging] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const handleLockchange = (e) => {
      if (document.pointerLockElement === null && !isOpen) {
        setReady(false);
      } else {
        setReady(true);
      }
    };

    document.addEventListener('pointerlockchange', handleLockchange);
    return () => {
      document.removeEventListener('pointerlockchange', handleLockchange);
    };
  }, [isOpen]);

  const handleDragStart = (e, modelUrl, scale, componentId) => {
    e.preventDefault();
    setDragging(true);
    onDragStart(modelUrl, scale, componentId); 
    document.exitPointerLock();
    setReady(false);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '250px',
    height: '100%',
    backgroundColor: '#1f1f1f',
    boxShadow: '-4px 0 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 10000,
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'transform 0.3s ease-in-out',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '18px',
    marginTop: '40px',
    marginBottom: '20px',
  };

  const imageStyle = {
    width: '100px',
    cursor: 'grab',
    marginTop: '20px',
  };

  return (
    <div id="sidebar" style={overlayStyle}>
      <div style={{ textAlign: 'center' }}>
        {/* Bench Model */}
        <img
          src="/the-gallery/assets/Images/bench.png"
          alt="Bench Thumbnail"
          style={imageStyle}
          draggable="true"
          onDragStart={(e) =>
            handleDragStart(
              e,
              '/the-gallery/assets/3D/Bench/scene.gltf',
              [0.1, 0.1, 0.1],
              'Bench' 
            )
          }
          onDragEnd={handleDragEnd}
        />

        {/* Frame Model */}
        <img
          src="/the-gallery/assets/Images/frame.png"
          alt="Frame Thumbnail"
          style={imageStyle}
          draggable="true"
          onDragStart={(e) =>
            handleDragStart(
              e,
              '/the-gallery/assets/3D/Girl/scene.gltf',
              [6.5, 6.5, 6.5],
              'Picture'  
            )
          }
          onDragEnd={handleDragEnd}
        />

        <div style={titleStyle}>Mobilya Seçiniz</div>
      </div>
    </div>
  );
};

export default Sidebar;
