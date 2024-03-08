import MySlider from '../Slider';
import React, { useState, useEffect } from 'react'
import { useContext } from "react";
import Context from "./Context";
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { state } = useContext(Context);
  

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
      );
      const data = await response.json();
      setImages(data);
      setLoading(false);
    } catch (error) {
        console.error("Error fetching images:", error);
        setImages([]);
      } finally {
        setLoading(false);
    }
  }

  useEffect(()=>{
    loadImages();
  }, [page])

  return (
    <>
     {loading && <div className="loading-bar">Loading...</div>}
     {!loading && (
        <>
        <MySlider/>
         <button onClick={()=>setPage(Math.max(1,page-1))}>Previous</button>
        <button onClick={()=>setPage(page+1)}>Next</button>
        <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item">
         <Link to={`/author/${image.user.username}`}
                   
                   className="image-author"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   {image.user.name}
                   </Link>
          <div className="image-overlay-container">
          <img
                  src={image.urls.regular}
                  alt={image.alt_description || "Image"}
                  style={{
                    width: state.image.width, 
                    height: state.image.height,
                  }}
                />
            <div className="image-overlay">
              <p className="image-description">{image.alt_description || 'A beautiful Unsplash image'}</p>
              <a href={image.links.download} className="download-link" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
     )}
   

    </>
  )
}

export default Homepage