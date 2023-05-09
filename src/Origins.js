import React, { useState } from "react";
import "./Origins.scss";
import video from "./images/cr7_origins.mp4";
import boton from "./images/boton-play.png";
import Poster from "./images/fondo.png"; // importa el poster

function Origins() {
  const [playing, setPlaying] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const handleVideoClick = () => {
    if (!videoStarted) {
      setVideoStarted(true);
      preloadImage();
      const videoElement = document.querySelector(".reproductor");
      videoElement.play();
    }
    setPlaying(true);
  };

  const preloadImage = () => {
    const img = new Image();
    img.src = Poster;
  };

  return (
    <div className="contenedor">
      <video
        className={`reproductor ${playing ? "visible" : ""}`}
        src={video}
        playsInline
        preload="metadata"
        controls
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <div
          className="poster"
          style={{ backgroundImage: `url(${Poster})` }}
        >
          <button
            className="boton"
            onClick={handleVideoClick}
            style={{ backgroundImage: `url(${boton})` }}
          ></button>
        </div>
      )}
    </div>
  );
}

export default Origins;
