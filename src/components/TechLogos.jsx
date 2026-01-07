import cssLogo from "../assets/images/CSS3-logo.svg";
import htmlLogo from "../assets/images/HTML5-logo.svg";
import javascriptLogo from "../assets/images/JavaScript-logo.svg";
import nodeLogo from "../assets/images/NodeJs-logo.svg";
import reactLogo from "../assets/images/React-logo.svg";
import dockerLogo from "../assets/images/Docker-logo.svg";
import githubLogo from "../assets/images/Github-logo.svg";
import eclipseLogo from "../assets/images/Eclipse-logo.svg";
import elementorLogo from "../assets/images/Elementor-logo.svg";
import figmaLogo from "../assets/images/Figma-logo.svg";
import gitLogo from "../assets/images/git-logo.svg";
import javaLogo from "../assets/images/Java-logo.svg";
import mysqlLogo from "../assets/images/MySQL-logo.svg";
import phpLogo from "../assets/images/PHP-logo.svg";
import visualStudioCodeLogo from "../assets/images/VSC-logo.svg";
import postgreLogo from "../assets/images/Postgresql-logo.svg";
import prismaLogo from "../assets/images/Prisma-logo.svg";
import postmanLogo from "../assets/images/Postman-logo.svg";
import stripeLogo from "../assets/images/Stripe-logo.svg";
import swiftLogo from "../assets/images/Swift-logo.svg";
import wordpressLogo from "../assets/images/Wordpress-logo.svg";

const logos = [
  { src: cssLogo, alt: "CSS" },
  { src: htmlLogo, alt: "HTML" },
  { src: javascriptLogo, alt: "JavaScript" },
  { src: nodeLogo, alt: "Node.js" },
  { src: reactLogo, alt: "React" },
  { src: dockerLogo, alt: "Docker" },
  { src: githubLogo, alt: "GitHub" },
  { src: eclipseLogo, alt: "Eclipse" },
  { src: elementorLogo, alt: "Elementor" },
  { src: figmaLogo, alt: "Figma" },
  { src: gitLogo, alt: "Git" },
  { src: javaLogo, alt: "Java" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: phpLogo, alt: "PHP" },
  { src: visualStudioCodeLogo, alt: "VS Code" },
  { src: postgreLogo, alt: "PostgreSQL" },
  { src: prismaLogo, alt: "Prisma" },
  { src: postmanLogo, alt: "Postman" },
  { src: stripeLogo, alt: "Stripe" },
  { src: swiftLogo, alt: "Swift" },
  { src: wordpressLogo, alt: "WordPress" },
];

export default function TechLogos() {
  return (
    <>
      <div className="cajon-logos">
        <div className="logos-track">
          {logos.map((logo, index) => (
            <img key={index} className="i-mov" src={logo.src} alt={logo.alt} />
          ))}
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              className="i-mov"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
