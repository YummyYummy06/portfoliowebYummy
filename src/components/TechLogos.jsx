import cssLogo from "../assets/images/CSS3-logo.svg";
import htmlLogo from "../assets/images/HTML5-logo.svg";
import javascriptLogo from "../assets/images/JavaScript-logo.svg";
import nodeLogo from "../assets/images/NodeJs-logo.svg";
import reactLogo from "../assets/images/React-logo.svg";

export default function TechLogos() {
  return (
    <>
      <div className="cajon-logos">
        <img className="i-mov" src={cssLogo}></img>
        <img className="i-mov" src={htmlLogo}></img>
        <img className="i-mov" src={javascriptLogo}></img>
        <img className="i-mov" src={nodeLogo}></img>
        <img className="i-mov" src={reactLogo}></img>
      </div>
    </>
  );
}
