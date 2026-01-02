import Internet from "../assets/images/Internet-white-logo.svg";
export default function Nav() {
  return (
    <>
      <nav className="nav">
        <img className="internet-logo" src={Internet} alt="internet-logo" />
        <p className="vertical">Hola</p>
        <p className="vertical">Portfolio</p>
      </nav>
    </>
  );
}
