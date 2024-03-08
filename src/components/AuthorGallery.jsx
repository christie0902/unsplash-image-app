import React from 'react'

const AuthorGallery = ({ photos }) => {
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        
        const time = date.toLocaleTimeString('en-GB', {
          hour: '2-digit',
          minute: '2-digit'
        });
        const day = date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        });
        return `${time} ${day}`;
    }
    return (
      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.urls.regular} alt={photo.alt_description} className="gallery-image" />
            <div className="photo-details">
            <span>Posted on: {formatDate(photo.created_at)}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default AuthorGallery