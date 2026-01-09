import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DownloadJson() {
  const navigate = useNavigate();

  useEffect(() => {
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

        // ⏱️ redirigir al home
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  }, [navigate]);

  return <p className="text">Downloading file...</p>;
}
