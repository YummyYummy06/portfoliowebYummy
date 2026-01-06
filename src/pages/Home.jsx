import Nav from "../components/Nav";
import Carroussel from "../components/Carroussel";
import TechLogos from "../components/TechLogos";
import {
  RiReactjsFill,
  RiGithubFill,
  RiNodejsLine,
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiNotionLine,
} from "@remixicon/react";

export default function Home() {
  const openGitHub = (n) => {
    switch (n) {
      case 1:
        window.open(
          "https://github.com/YummyYummy06/ProyectoFinDeGrado2025",
          "_blank",
          "noopener,noreferrer"
        );
        break;
      case 2:
        window.open(
          "https://github.com/YummyYummy06/HistoricoVentasObjetDB",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      default:
        console.log("Proyecto no definido");
    }
  };

  return (
    <div className="page">
      <nav>
        <Nav></Nav>
      </nav>
      <div className="content">
        <div className="cajon-nombre">
          <h1 className="nombre"> MIGUEL ÁNGEL NAVARRO</h1>
          <h1 className="barra">/</h1>
          <div className="cajon-prof">
            <p className="profesion">SOFTWARE</p>
            <p className="profesion">DEVELOPER</p>
          </div>
        </div>
        <div className="cajon-content">
          <h3 className="section-name">
            <strong>ABOUT ME</strong>
          </h3>
          <p className="text-content">
            Passionate about technology and software development, I am currently
            based in Marbella and at the beginning of my professional career.
            Known for my positive attitude, consistency, and strong willingness
            to learn, I have built a solid foundation through formal education,
            personal projects, and internships. My curiosity about how
            technology works began at a young age and has evolved into a focus
            on web and backend development. I am highly motivated to keep
            learning, enjoy tackling technical challenges, exploring new tools,
            and collaborating on projects that deliver real-world impact.
          </p>
          <h3 className="section-name">
            <strong>PROJECTS</strong>
          </h3>
          <p className="text-content">
            Here are some of the projects I’ve worked on, showcasing my skills
            and passion for building practical and innovative software
            solutions. Each project highlights the technologies I’ve used and
            the problems I aimed to solve.
          </p>
        </div>
        <div className="cajon-projects">
          <div className="projects" onClick={() => openGitHub(1)}>
            <h4 className="project-name">
              <strong>TaskManager App</strong>
            </h4>
            <p className="project-description">
              A web application to organize daily tasks with user
              authentication, categories, and reminders. Built to improve
              productivity and task tracking. Lo hago algo mas largo. A web
              application to organize daily tasks with user authentication,
              categories, and reminders. Built to improve productivity and task
              tracking. Lo hago algo mas largo. A web application to organize
            </p>
            <p className="project-tech">
              <strong>Technologies:</strong>{" "}
              <RiReactjsFill size={50} color="rgba(84,192,222,1)" />,
              <RiNodejsLine size={50} color="rgba(130,189,2,1)" />, MongoDB, JWT
            </p>
          </div>
          <div className="projects" onClick={() => openGitHub(2)}>
            <h4 className="project-name">
              <strong>Interactive Portfolio</strong>
            </h4>
            <p className="project-description">
              My personal portfolio designed to showcase projects and skills in
              an interactive and responsive way, using animations and modern web
              techniques.
            </p>
            <p className="project-tech">
              <strong>Technologies:</strong>
              <RiHtml5Line size={30} color="rgba(242,102,41,1)" />,
              <RiCss3Line size={30} color="rgba(39,77,230,1)" />,
              <RiJavascriptLine size={30} color="rgba(245,223,27,1)" />,{" "}
              <RiNotionLine size={32} color="rgba(255,255,255,1)" />
            </p>
          </div>
        </div>
        <Carroussel></Carroussel>
        <TechLogos></TechLogos>
      </div>
    </div>
  );
}
