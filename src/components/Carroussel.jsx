import React, { useState } from "react";
import htmlLogo from "../assets/images/react.svg";
import cssLogo from "../assets/images/CSS3-logo.svg";
import javascriptLogo from "../assets/images/JavaScript-logo.svg";
import nodeLogo from "../assets/images/NodeJs-logo.svg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import leftArrow from "../assets/images/leftArrow-logo.svg";
import rightArrow from "../assets/images/rightArrowlogo.svg";

export default function Carroussel() {
  const [indice, setIndice] = useState(0);
  const images = [img1, img2, img3, img4];

  function nextImage() {
    setIndice((prev) => (prev + 1) % images.length);
  }

  function prevImage() {
    setIndice((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <div className="cajon-carroussel">
      <button
        className="left-btn btn"
        type="button"
        onClick={prevImage}
      ></button>
      <img
        className="img"
        src={images[indice]}
        alt={`Slide ${indice + 1}`}
      ></img>

      <button
        className="righ-btn btn"
        type="button"
        onClick={nextImage}
      ></button>
    </div>
  );
}
