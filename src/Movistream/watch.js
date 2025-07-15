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

  return (
    <div className="watch-page">
      <div className="top-bar">
        <button onClick={handleBack} className="back-btn">⬅</button>
        <h3 className="title">Now Watching</h3>
        <div className="controls-right">
          <span className="option">Video Quality HD</span>
          <span className="option">Audio & Subtitles</span>
        </div>
      </div>

      <div className="video-container">
        <ReactPlayer
          url={state?.trailerUrl}
          playing={playing}
          controls={false}
          width="100%"
          height="100%"
          ref={videoRef}
          onDuration={handleDuration}
        />
        <div className="custom-controls">
          <button onClick={() => handleSeek(-10)}>⏪ 10</button>
          <button onClick={() => setPlaying(!playing)}>{playing ? "⏸" : "▶️"}</button>
          <button onClick={() => handleSeek(10)}>10 ⏩</button>
          <span className="duration">{duration}</span>
          <button onClick={() => document.querySelector(".video-container").requestFullscreen()}>⛶</button>
        </div>
      </div>

      <div className="more-like">
        <h4>More Like This ⬆</h4>
      </div>
    </div>
  );
};

export default WatchPage;
