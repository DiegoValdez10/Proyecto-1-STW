import React, { useEffect, useRef } from 'react';
import "./Imagenes.scss";

import eyewear from "./images/brand_eyewear.jpg"
import footwear from "./images/brand_footwear.jpg"
import fragances from "./images/brand_fragrances.jpg"
import Underwear from "./images/brand_underwear.jpg"
import video1 from "./images/video1.mp4"

const Imagenes = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  const toggleGrayscale = (event) => {
    event.currentTarget.classList.toggle("grayscale");
  }

  return (
    <div className="image-container">
      <div className='video1'>
        <video ref={videoRef} src={video1} alt="video1" width="auto" height="600px" autoPlay muted loop />
        <div className='caption2'>
          <h3 className='h3V'>CAREER HIGHLIGHTS</h3>
          <p className='pV'>Cristiano Ronaldo's highlights and achievements.</p>
          <p className='pV2'>VIEW HIGHLIGHTS</p>
        </div>
      </div>
      <div className='eyewear' onMouseOver={toggleGrayscale} onMouseOut={toggleGrayscale}>
        <img src={eyewear} alt="eyewear" width="275px" height="600px" />
        <div className='caption3'>
          <h3 className='h3E'>CR7 EYEWEAR</h3>
          <p className='pE'>A contemporary collection able to masterfully match any type of look: classic colors for everyday style alternate with more eye-catching tones or a style that does not go unnoticed.</p>
        </div>
      </div>
      <div className='footwear' onMouseOver={toggleGrayscale} onMouseOut={toggleGrayscale}>
        <img src={footwear} alt="footwear" width="275px" height="600px" />
        <div className='caption4'>
          <h3 className='h3F'>CR7 FOOTWEAR</h3>
          <p className='pF'>A new footwear line that further enriches the whole collection and interprets the style of the most demanding and eccentric man.</p>
        </div>
      </div>
      <div className='Underwear' onMouseOver={toggleGrayscale} onMouseOut={toggleGrayscale}>
        <img src={Underwear} alt="Underwear" width="275px" height="600px" />
        <div className='caption5'>
          <h3 className='h3U'>CR7 UNDERWEAR</h3>
          <p className='pU'>Working with quality materials and many years of experience of producing underwear, the CR7 collections delivers a perfect and unique fit.</p>
        </div>
      </div>
      <div className='fragances' onMouseOver={toggleGrayscale} onMouseOut={toggleGrayscale}>
        <img src={fragances} alt="fragances" width="275px" height="600px" />
        <div className='caption6'>
          <h3 className='h3FR'>CR7 FRAGRANCES</h3>
          <p className='pFR'>Discover the brand new casual evening fragrance inspired by Cristiano Ronaldo's bold and optimistic Spirit.</p>
        </div>
        </div>
    </div>
  );
}

export default Imagenes;
