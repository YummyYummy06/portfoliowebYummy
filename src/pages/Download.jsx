import Nav from "../components/Nav";
import img1 from "../assets/images/Workflow-linear.png";

export default function DownloadJson() {
  const downloadFile = () => {
    fetch("/DailyInfoAtomation.json")
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "DailyInfoAtomation.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      });
  };
  const goHome = () => {
    window.open("/", "_self", "noopener,noreferrer");
  };
  const openPicture = () => {
    window.open(
      "src/assets/images/Workflow-linear.png",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="page">
      <Nav></Nav>
      <div className="content">
        <h1 className="titulo">Download DailyInfoAutomation.json</h1>
        <div className="cajon-content">
          <p className="text-content">
            Click on the image to see a larger version.
          </p>
          <div className="cajon-img">
            <img
              className="imgStatic"
              src={img1}
              alt={`Workflow Automation`}
              onClick={openPicture}
            ></img>
          </div>
          <button className="btn-descarga" onClick={downloadFile}>
            Download JSON File
          </button>
          <p className="text-content">
            If you want to download the JSON file, click the button above.
          </p>
          <button className="btn-volver" onClick={goHome}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}
