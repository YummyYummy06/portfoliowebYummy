import Nav from "../components/Nav";
import Carroussel from "../components/Carroussel";
import TechLogos from "../components/TechLogos";
import n8n from "../assets/images/n8n-icon-seeklogo.svg";
import googleCalendarLogo from "../assets/images/googleCalendar-logo.svg";
import {
  RiReactjsFill,
  RiGithubFill,
  RiNodejsLine,
  RiCss3Line,
  RiHtml5Line,
  RiJavascriptLine,
  RiNotionLine,
  RiOpenaiFill,
  RiTelegramLine,
  RiGoogleLine,
  RiSupabaseLine,
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
  const openProject1 = () => {
    window.open(
      "/ai-workflow-automation.png ",
      "_blank",
      "noopener,noreferrer"
    );
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
          <div className="projects" onClick={() => openProject1()}>
            <h4 className="project-name">
              <strong>AI-powered workflow automation</strong>
            </h4>
            <p className="project-description">
              An automated workflow built with n8n runs daily at 7:00 a.m.,
              integrating weather data from an external API and Google Calendar
              events. The collected information is processed by an OpenAI model
              using a custom prompt, generating a contextual daily summary of
              the weather in my city and scheduled activities, which is then
              sent via a Telegram bot.
            </p>
            <p className="project-tech">
              <strong>Technologies:</strong>{" "}
              <RiOpenaiFill size={30} color="rgba(255,255,255,1)" />,
              <img className="tech-logos" src={n8n} alt="n8n-logo"></img>,
              <RiTelegramLine size={30} color="rgba(0,136,204,1)" />,
              <RiGoogleLine size={30} color="rgba(240,187,64,1)" />
            </p>
          </div>
          <div className="projects" onClick={() => openGitHub(1)}>
            <h4 className="project-name">
              <strong>Gym Management – Fullstack Web Application</strong>
            </h4>
            <p className="project-description">
              Built a fullstack web app for gym management, enabling secure user
              registration, login, and class or locker bookings. Backend uses
              Express with JWT authentication and bcrypt, frontend offers an
              intuitive interface, and Supabase + Prisma handle the database.
              Demonstrates fullstack skills, secure architecture, and seamless
              user experience.
            </p>
            <p className="project-tech">
              <strong>Technologies: </strong>
              <RiReactjsFill size={32} color="rgba(70,194,221,1)" />,
              <RiNodejsLine size={30} color="rgba(112,168,85,1)" />,
              <RiJavascriptLine size={30} color="rgba(245,223,27,1)" />,
              <RiSupabaseLine size={30} color="rgba(100,205,138,1)" />,
              <RiHtml5Line size={30} color="rgba(242,102,41,1)" />,
              <RiCss3Line size={30} color="rgba(39,77,230,1)" />
            </p>
          </div>
        </div>
        <Carroussel></Carroussel>
        <TechLogos></TechLogos>
      </div>
    </div>
  );
}
