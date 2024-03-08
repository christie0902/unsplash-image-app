import MySlider from "../Slider";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import FilterButton from "./FilterButton";

const Homepage = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { state } = useContext(Context);
  const [filterColor, setFilterColor] = useState("");

  const loadImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos?page=${page}&client_id=${
          import.meta.env.VITE_UNSPLASH_KEY
        }`
      );
      let data = await response.json();

      if (filterColor) {
        data = data.filter((image) => image.color === filterColor);
      }

      setImages(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
        loadImages();
    }, [page, filterColor]);

    const applyColorFilter = (color) => {
        setFilterColor(color);
     
        loadImages();
    };

    const clearFilters = () => {
        setFilterColor('');
        loadImages();
      };
    
  return (
    <>
      {loading && <div className="loading-bar">Loading...</div>}
      {!loading && (
        <>
          <MySlider />
          <div className="color-filters">
             <button onClick={clearFilters} className="filter-button clear-filter">Reset</button>
            <FilterButton
              color="#260c0c"
              label="Dark Green"
              applyColorFilter={applyColorFilter}
              colorStyle="#264026"
            />
            <FilterButton
              color="#a6a6a6"
              label="Light Gray"
              applyColorFilter={applyColorFilter}
              colorStyle="#a6a6a6"
            />
            <FilterButton
              color="#0ca6d9"
              label="Sky Blue"
              applyColorFilter={applyColorFilter}
              colorStyle="#0ca6d9"
            />
            <FilterButton
              color="#c0a68c"
              label="Dark Beige"
              applyColorFilter={applyColorFilter}
              colorStyle="#c0a68c"
            />
            <FilterButton
              color="#0c73d9"
              label="Blue"
              applyColorFilter={applyColorFilter}
              colorStyle="#0c73d9"
            />
          </div>
          <br />
          <div className="navigation-buttons">
            <button onClick={() => setPage(Math.max(1, page - 1))}>
              Previous
            </button>
            <button onClick={() => setPage(page + 1)}>Next</button>
          </div>
          <section className="image-gallery">
            <h2>Featured Images</h2>
            <div className="image-grid">
              {images.map((image) => (
                <div key={image.id} className="image-item">
                  <div className="likes-overlay">
                    <FaHeart className="heart-icon" />
                    {image.likes}
                  </div>
                  <Link
                    to={`/author/${image.user.username}`}
                    className="image-author"
                    rel="noopener noreferrer"
                  >
                    {image.user.name}
                  </Link>
                  <div className="image-overlay-container">
                    <Link to={`/photos/${image.id}`} className="image-link">
                      <img
                        src={image.urls.regular}
                        alt={image.alt_description || "Image"}
                        style={{
                          width: state.image.width,
                          height: state.image.height,
                        }}
                      />
                    </Link>
                    <div className="image-overlay">
                      <p className="image-description">
                        {image.alt_description || "A beautiful Unsplash image"}
                      </p>
                      <a
                        href={image.links.download}
                        className="download-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Homepage;
