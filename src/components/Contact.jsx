export default function Contact() {
  const sendEmail = () => {
    window.location.href = "mailto:navarro.miguel.a.n@gmail.com";
  };
  const sendWhatsapp = () => {
    window.open("https://wa.me/34633370897", "_blank", "noopener,noreferrer");
  };
  const goLinkedin = () => {
    window.open(
      "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const goGitHub = () => {
    window.open(
      "https://github.com/YummyYummy06",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="cajon-contacto">
      <h3 className="section-name">CONTACT ME</h3>
      <p className="text-content">
        You can reach me via email at:
        <strong className="email" onClick={sendEmail}>
          navarro.miguel.a.n@gmail.com
        </strong>
        , or give me a call:
        <strong className="telf" onClick={sendWhatsapp}>
          +34 633 370 897
        </strong>
      </p>
      <p className="text-content">
        I'm also available on
        <span className="social-links">
          <strong className="linkedin" onClick={goLinkedin}>
            LinkedIn
          </strong>{" "}
          and
          <strong className="github" onClick={goGitHub}>
            GitHub
          </strong>
          , feel free to connect with me there!
        </span>
      </p>
    </div>
  );
}
