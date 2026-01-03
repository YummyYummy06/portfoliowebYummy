import Nav from "../components/Nav";
import Carroussel from "../components/Carroussel";

export default function Home() {
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
            Born in the 2000s, I’ve been fascinated by how technology works
            since I was a child, and today I channel that curiosity into
            creating software that solves real-world problems. I enjoy tackling
            technical challenges, learning new tools, and working on
            collaborative projects that make a difference.
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
          <div className="projects">
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
              <strong>Technologies:</strong> React, Node.js, MongoDB, JWT
            </p>
          </div>
          <div className="projects">
            <h4 className="project-name">
              <strong>Interactive Portfolio</strong>
            </h4>
            <p className="project-description">
              My personal portfolio designed to showcase projects and skills in
              an interactive and responsive way, using animations and modern web
              techniques.
            </p>
            <p className="project-tech">
              <strong>Technologies:</strong> HTML, CSS, JavaScript, Framer
              Motion
            </p>
          </div>
        </div>
        <Carroussel></Carroussel>
      </div>
    </div>
  );
}
