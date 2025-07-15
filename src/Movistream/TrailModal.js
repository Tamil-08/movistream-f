import React, { useEffect } from "react";
import "./cards.css";

const TrailerModal = ({ url, onClose }) => {
  // Always call useEffect — no conditional return before it
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Extract YouTube video ID from URL
  const getYouTubeId = (youtubeUrl) => {
    const match = youtubeUrl?.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(url);

  // Handle backdrop click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("trailer-overlay")) {
      onClose();
    }
  };

  if (!videoId) return null;

  return (
    <div className="trailer-overlay" onClick={handleOverlayClick}>
      <div className="trailer-content">
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`}
            frameBorder="0"
            allow="autoplay"
            // allowFullScreen
            title="YouTube trailer"
          />
        </div>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default TrailerModal;

