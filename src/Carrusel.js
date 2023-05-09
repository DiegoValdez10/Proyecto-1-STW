import React, { useState, useCallback } from "react";
import "./Carrusel.scss";
import ReactPlayer from "react-player";
import SwipeableViews from "react-swipeable-views";
import Sporting from "./images/Sporting.mp4";
import Manchester from "./images/Manchester.mp4";
import REALMADRID from "./images/REALMADRID.mp4";
import Juve from "./images/Juventus.mp4";
import Portuga from "./images/Portugal.mp4";

export default function VideoCarousel() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoProperties = [
    {
      id: 1,
      src: Sporting,
      text: "Sporting",
    },
    {
      id: 2,
      src: Manchester,
      text: "Manchester United",
    },
    {
      id: 3,
      src: REALMADRID,
      text: "RealMadrid",
    },
    {
      id: 4,
      src: Juve,
      text: "Juventus",
    },
    {
      id: 5,
      src: Portuga,
      text: "Portugal",
    },
  ];

  const handleVideoEnded = useCallback(() => {
    // Cambia al siguiente video cuando el video actual ha terminado
    setCurrentVideoIndex((currentVideoIndex + 1) % videoProperties.length);
  }, [currentVideoIndex, videoProperties]);

  const handleSwipe = useCallback(
    (index) => {
      setCurrentVideoIndex(index);
    },
    [setCurrentVideoIndex]
  );

  return (
    <div className="App">
      <SwipeableViews
        enableMouseEvents
        resistance
        onSwitching={(index, type) => {
          if (type === "end") {
            if (index > currentVideoIndex) {
              setCurrentVideoIndex(currentVideoIndex + 1);
            } else if (index < currentVideoIndex) {
              setCurrentVideoIndex(currentVideoIndex - 1);
            }
          }
        }}
        index={currentVideoIndex}
        onChangeIndex={handleSwipe}
        interval={5000}
      >
        {videoProperties.map((video, index) => (
          <div key={video.id} className="video-container">
            <ReactPlayer
              url={video.src}
              width="100%"
              height="100%"
              pip={true}
              muted={true}
              autoplay={true}
              loop={true}
              controls={false}
              playing={true}
              onEnded={handleVideoEnded}
            />
            <div className={"caption"}>
              <h2 className="caption-text Manchester">{video.text}</h2>
            </div>
          </div>
        ))}
      </SwipeableViews>
    </div>
  );
}
