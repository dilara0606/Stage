import React from 'react';

const Modal = ({ isOpen, content, onClose, onThumbnailClick }) => {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
    padding: '20px',
    boxSizing: 'border-box'
  };

  const modalContentStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    height: '80%',
    backgroundColor: '#1f1f1f',
    borderRadius: '15px',
    overflowY: 'auto',
    position: 'relative',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    padding: '20px'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#333',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
    zIndex: 10001
  };

  const imageContainerStyle = {
    flex: 2,
    backgroundColor: '#2a2a2a',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    overflowY: 'auto', 
    maxHeight: '100%'
  };

  const imageStyle = {
    maxWidth: '90%',
    maxHeight: '70%',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const descriptionStyle = {
    marginTop: '10px',
    fontSize: '16px',
    color: '#fff',
    textAlign: 'center'
  };

  const thumbnailContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    whiteSpace: 'nowrap',
    paddingBottom: '10px'
  };

  const thumbnailStyle = {
    width: '70px',
    height: '50px',
    margin: '0 5px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'inline-block' 
  };

  const editContainerStyle = {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3a3a3a',
    borderLeft: '2px solid #444'
  };

  const editSectionStyle = {
    marginBottom: '15px'
  };

  const labelStyle = {
    color: '#fff',
    marginBottom: '5px',
    display: 'block'
  };

  const thumbnails = [
    '/the-gallery/assets/Images/frame6.jpg',
    '/the-gallery/assets/Images/frame8.jpg',
    '/the-gallery/assets/Images/frame9.jpg'
  ];

  return (
    <div style={overlayStyle}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          X
        </button>
        <div style={imageContainerStyle}>
          <img src={content} alt="Modal" style={imageStyle} />
          <div style={descriptionStyle}>
            Şehir Işıkları
          </div>
          <div style={thumbnailContainerStyle}>
            {thumbnails.map((src, index) => (
              <img 
                key={index} 
                src={src} 
                alt={`Thumbnail ${index + 1}`} 
                style={thumbnailStyle} 
                onClick={() => onThumbnailClick(src)}
              />
            ))}
          </div>
        </div>
        <div style={editContainerStyle}>
          <div style={editSectionStyle}>
            <label style={labelStyle}>Frame X</label>
            <input type="text" placeholder="35" style={{ width: '100%' }} />
          </div>
          <div style={editSectionStyle}>
            <label style={labelStyle}>Frame Y</label>
            <input type="text" placeholder="185" style={{ width: '100%' }} />
          </div>
          <div style={editSectionStyle}>
            <label style={labelStyle}>Eser Açıklaması</label>
            <textarea placeholder="Lorem ipsum dolor sit amet" style={{ width: '100%', height: '100px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
