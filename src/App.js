import React, { useRef } from "react";
import foto from './images/cr7.png';
import './App.scss'; 
import VideoCarousel from './Carrusel';
import Origins from './Origins';
import Register from './register';
import Imagenes from './Imagenes';
import Brand from './brand';
function App() {
  const ImagenesRef = useRef(null);
  const careerRef = useRef(null);
  const originsRef = useRef(null);
  const newsletterRef = useRef(null);
  const partnersRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Proyecto 1">
      <header className="App-header">
        <div className='Imagen' ><img src={foto} alt="Foto"></img></div>
        <h4 className="CRIS"onClick={() => scrollToRef(ImagenesRef)} >CR7</h4>
        <div className="Titulo">
          <h4 className="Carrer" onClick={() => scrollToRef(careerRef)}>Carreer</h4>
          <h4 className="Origins" onClick={() => scrollToRef(originsRef)}>Origins</h4>
          <h4 className="Newsletter" onClick={() => scrollToRef(newsletterRef)}>Newsletter</h4>
          <h4 className="Partners" onClick={() => scrollToRef(partnersRef)}>Partners</h4>
        </div>
      </header>
      <div ref={ImagenesRef}>
        <Imagenes />
      </div>
      <div ref={careerRef}>
        <VideoCarousel />
      </div>
      <div ref={originsRef}>
        <Origins />
      </div>
      <div ref={newsletterRef}>
        <Register />
      </div>
      <div ref={partnersRef}>
        <Brand />
      </div>
    </div>
  );
}

export default App;
