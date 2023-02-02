import React from "react";
import "./Carousel.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import CarouselData from "./CarouselData";
import { useState, useEffect } from "react";

const TopProject = () => {
  const [currImg, setcurrImg] = useState(0);
  const [autoPlay, setautoPlay] = useState(true);
  let timeOut = null;

  const changeImg = new Promise((resolve, reject) => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
        resolve();
      }, 3000);
  });
  changeImg.then((value) => {
    console.log(value);
  });

  function slideLeft() {
    currImg > 0 && setcurrImg(currImg - 1);
  }
  function slideRight() {
    currImg < CarouselData.length - 1 && setcurrImg(currImg + 1);
  }

  return (
    <>
    
      <div className="top-project-container">
        <div className="title">
          <h2>
            <span>T</span>op <span>L</span>ive <span>p</span>ersonal
            <span>P</span>rojects
          </h2>
        </div>
        <div className="image-box">
          <img src={CarouselData[currImg].src} alt="Top Projects" />
          <div className="move">
            <div className="left" onClick={slideLeft}>
              <AiOutlineLeft />
            </div>
            <div className="right" onClick={slideRight}>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div className="project-desc">
          <h3>{CarouselData[currImg].title}</h3>
        </div>
        <div className="buttons">
          <a href={CarouselData[currImg].source_code} target = '_blank'>
            <button className="btn">Source Code</button>
          </a>
          <a href={CarouselData[currImg].liveProjectLink} target = '_blank'>
            <button className="btn">Watch Live</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default TopProject;
