import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';

const Image = () => {
    const { id } = useParams();
    const [image, setImage] = useState('')

  const loadImage = async (id)=> {
    const r = await fetch (`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
    const data = await r.json();
    setImage(data);
  }

  useEffect(()=> {
    loadImage(id);
  },[id])
  if (!image) {
    return <div>Loading...</div>;
  }


  return (
    <div className="image-detail-container">
      <header className="image-header">
        <div className="user-info">
          <img src={image.user.profile_image.medium} alt={image.user.name} className="user-avatar" />
          <div>
            <h2 className="user-name">{image.user.name}</h2>
       
          </div>
        </div>
        <div className="image-stats">
          <p>Views: {image.views}</p>
          <p>Downloads: {image.downloads}</p>
          <p>Likes: {image.likes}</p>
        </div>
      </header>
      <div className="image-container">
        <img src={image.urls.regular} alt={image.alt_description} className="detail-image" />
      </div>
      <div className="image-description">
        <p>{image.description}</p>
      </div>
    </div>
  );
};


export default Image