import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxLine from "remixicon-react/LinkedinBoxLineIcon";
import Internet from "../assets/images/cartoon-477.gif";

export default function Nav() {
  return (
    <nav className="nav">
      <img className="internet-logo" src={Internet} alt="internet-logo" />
      <a
        className="vertical"
        href="https://github.com/YummyYummy06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubFillIcon
          size={50}
          color="rgba(95,76,158,1)"
          className="vertical-logo"
        />
        YummyYummy06
      </a>
      <a
        className="vertical"
        href="https://github.com/YummyYummy06"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinBoxLine
          size={50}
          color="rgba(95,76,158,1)"
          className="vertical-logo"
        />
        YummyYummy06
      </a>
    </nav>
  );
}
