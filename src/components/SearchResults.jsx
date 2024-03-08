import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "./Context";
import MySlider from "../Slider";
const SearchResults = ({ result }) => {
  const { state } = useContext(Context);
  return (
    <>
      <MySlider />
      <div className="image-grid">
        {result.length > 0 ? (
          result.map((image) => (
            <>
              <div key={image.id} className="image-item">
              <Link to={`/author/${image.user.username}`}
                   
                   className="image-author"
                   rel="noopener noreferrer"
                 >
                   {image.user.name}
                   </Link>
                <div className="image-overlay-container">
                  <Link
                    to={`/photos/${image.id}`}
                    className="image-link"
                  >
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
                    <div className="image-text">
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
                  <div className="image-overlay-container">
                    <Link
                      to={`/author/${image.user.username}`}
                      className="image-author"
                      rel="noopener noreferrer"
                    >
                      {image.user.name}
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
