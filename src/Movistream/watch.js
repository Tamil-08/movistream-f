// WatchPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import "./watch.css";

const WatchPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [duration, setDuration] = useState("0:00");

  const handleBack = () => {
    navigate(-1);
  };

  console.log(state?.trailerUrl)

  const handleSeek = (seconds) => {
    if (videoRef.current) {
      videoRef.current.seekTo(videoRef.current.getCurrentTime() + seconds, "seconds");
    }
  };

  const handleDuration = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    setDuration(`${min}:${sec < 10 ? "0" + sec : sec}`);
  };

  const getVideoId = (url) => {
    if (!url) return "";
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : "";
  };


  return (
    <div className="watch-page">
      <div className="top-bar">
        <button onClick={handleBack} className="back-btn">⬅</button>
      </div>

      <div className="video-container">
        <div className="player-wrapper">
          <iframe
            className="poster-media"
            src={`${state?.trailerUrl.replace("watch?v=", "embed/")}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&rel=0&showinfo=0&playlist=${getVideoId(state?.trailerUrl)}`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
};

export default WatchPage;
