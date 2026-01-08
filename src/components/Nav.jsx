import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxLine from "remixicon-react/LinkedinBoxLineIcon";
import Internet from "../assets/images/cartoon-477.gif";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="internet-logo"
        src={Internet}
        alt="internet-logo"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <nav className={`nav ${isOpen ? "open" : ""}`}>
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
          Github
        </a>
        <a
          className="vertical"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinBoxLine
            size={50}
            color="rgba(95,76,158,1)"
            className="vertical-logo"
          />
          Linkedin
        </a>
      </nav>
    </>
  );
}
