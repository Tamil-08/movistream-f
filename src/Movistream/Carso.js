import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import alice from "./images/alice.jfif";
import stranger from "./images/stranger.jfif";
import wednesday from "./images/wednesday.jfif";
import squid from "./images/squid.jpg";


import "./carousel.css";
import "react-player";

const carouselData = [
  {
    image: alice,
    title: "Alice in Borderland",
    meta: "2021 • UA 16+ • Japanese",
    desc: "Contestants play deadly games to survive in an abandoned Tokyo.",
    tags: ["Thriller", "Sci-Fi", "Survival"],
  },
  {
    image: stranger,
    title: "Stranger Things",
    meta: "2016 • UA 16+ • English",
    desc: "A group of kids uncover supernatural mysteries in a small town.",
    tags: ["Horror", "Sci-Fi", "Mystery"],
  },
  {
    image: wednesday,
    title: "Wednesday",
    meta: "2022 • UA 13+ • English",
    desc: "Wednesday Addams investigates a murder spree at her school.",
    tags: ["Comedy", "Mystery", "Fantasy"],
  },
  {
    image: squid,
    title: "Squid Game",
    meta: "2021 • A • Korean",
    desc: "Desperate people compete in deadly games for a cash prize.",
    tags: ["Drama", "Thriller", "Survival"],
  },
 
];

const Sample = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);

    
  };

  return (
    <div className="hotstar-carousel">
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={4000}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {carouselData.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 carousel-img"
              src={item.image}
              alt={`slide-${idx}`}
            />
            <div className="carousel-overlay">
              <div className="carousel-content">
                <h2 className="carousel-title">{item.title}</h2>
                <p className="carousel-meta">{item.meta}</p>
                <p className="carousel-desc">{item.desc}</p>
                <div className="carousel-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                {/* <div className="carousel-buttons">
                  <button className="watch-btn">▶ Watch Now</button>

                </div> */}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Thumbnails */}
      <div className="thumbnail-scroll">
        {carouselData.map((item, idx) => (
          <img
            key={idx}
            className={`thumbnail-img ${index === idx ? "active" : ""}`}
            src={item.image}
            alt={item.title}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sample; 