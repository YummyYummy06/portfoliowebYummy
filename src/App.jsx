import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DownloadJson from "./pages/Download.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/descargar-json" element={<DownloadJson />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
