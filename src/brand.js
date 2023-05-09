import React from "react";
import "./brand.scss";
import Pestana from "./images/Marcas/Logo_PestanaCR7.svg"
import Legend from "./images/Marcas/Logo_7egend.svg"
import Insparya from "./images/Marcas/Logo_Insparya.png"
import Nike from "./images/Marcas/Logo_Nike.svg"
import Zuju from "./images/Marcas/Logo_Zujugp.svg"
import Herbalife from "./images/Marcas/Logo_Herbalife.svg"
import Clear from "./images/Marcas/Logo_Clear.svg"
import Binance from "./images/Marcas/Logo_Binance.svg"
import Altice from "./images/Marcas/Logo_Altice.svg"
import Fitness from "./images/Marcas/Logo_CR7CrunchFitness.svg"
import FF from "./images/Marcas/Logo_FreeFire.svg"
import Therabody from "./images/Marcas/Logo_therabody.svg"
import LiveScore from "./images/Marcas/Logo_LiveScore.svg"
import UFL from "./images/Marcas/Logo_UFL.svg"
import Domum from "./images/Marcas/Logo_DomumSeptem.svg"
import MTG from "./images/Marcas/Logo_MTG.svg"
import Jacob from "./images/Marcas/Logo_JacobCo.svg"


function BrandGrid() {
  return (
    <div>
      <h2 className="Work">I WORK WITH BRANDS I&nbsp; <strong>BELIEVE</strong>&nbsp;IN</h2>


      <div className="grid-container">
        <div className="grid-item"><img src={Pestana} alt="Pestana" /></div>
        <div className="grid-item"><img src={Legend} alt="Legend" /></div>
        <div className="grid-item"><img src={Insparya} alt="Insparya" /></div>
        <div className="grid-item"><img src={Nike} alt="Nike" /></div>
        <div className="grid-item"><img src={Zuju} alt="Zuju" /></div>
        <div className="grid-item"><img src={Herbalife} alt="Herbalife" /></div>
        <div className="grid-item"><img src={Clear} alt="Clear" /></div>
        <div className="grid-item"><img src={Binance} alt="Binance" /></div>
        <div className="grid-item"><img src={Altice} alt="Altice" /></div>
        <div className="grid-item"><img src={Fitness} alt="Fitness" /></div>
        <div className="grid-item"><img src={FF} alt="Free Fire" /></div>
        <div className="grid-item"><img src={Therabody} alt="Therabody" /></div>
        <div className="grid-item"><img src={LiveScore} alt="LiveScore" /></div>
        <div className="grid-item"><img src={UFL} alt="UFL" /></div>
        <div className="grid-item"><img src={Domum} alt="Domum" /></div>
        <div className="grid-item"><img src={MTG} alt="MTG" /></div>
        <div className="grid-item"><img src={Jacob} alt="Jacob & Co" /></div>
      </div>
    </div>
  );
}

export default BrandGrid;