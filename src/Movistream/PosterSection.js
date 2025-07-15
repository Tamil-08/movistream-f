import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './cards.css';

const PosterSection = ({ title, posters }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const handlePlay = (trailerUrl) => {
    navigate("/watch", { state: { trailerUrl } });
  };



  return (
    <div className="row-cont">
      <h2 className="home">{title}</h2>

      <div className="posters horizontal-scroll">
        {posters.map((poster, idx) => (
          <div
            className="poster-wrapper"
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="poster-container">
              {hoveredIndex === idx ? (
                poster.trailer.endsWith('.mp4') ? (
                  <video
                    className="poster-media"
                    src={poster.trailer}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <iframe
                    className="poster-media"
                    src={`${poster.trailer.replace("watch?v=", "embed/")}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0`}
                    title="Trailer"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                )
              ) : (
                <img className="poster" src={poster.img} alt={poster.name} />
              )}
            </div>

            {hoveredIndex === idx && (
              <div className="hover-overlay">
                <h4>{poster.name}</h4>
                <div className="btn-row">
                  <button className="watch-btn" onClick={() => handlePlay(poster.trailer)}>▶ Watch Now</button>
                  <button className="watch-btn">＋ Watchlist</button>
                </div>
                <p className="meta">2025 • U/A 13+ • Hindi • {poster.genre}</p>
                <p className="desc">{poster.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterSection;
