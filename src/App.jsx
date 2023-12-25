import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navber from "./components/Navber/Navber";
import Home from "./pages/Home/Home";
import Appgallery from "./pages/appgallery/Appgallery";
import Footer from "./components/footer/Footer";
import Gallery from "./components/imegegallery/Gallery";
import Appdetails from "./pages/appgallery/Appdetails";
import Project from "./components/projects/Project";
import ShowProject from "./components/projects/ShowProject";
import LegendsPage from "./components/legends/LegendsPage";
import Alert from "./components/alert/Alert";
import Surveilance_robot from "./components/ACSR/Surveilance_robot";
import OurContents from "./components/ourcontents/OurContents";
import Error from "./components/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appgallery" element={<Appgallery />} />
          <Route path="/appgallery/:title" element={<Appdetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/legends" element={<LegendsPage />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/project/:name" element={<ShowProject />} />
          <Route path="/ourcontents" element={<OurContents />} />
          <Route
            path="/android-control-surveilance-robot"
            element={<Surveilance_robot />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        {/* <Alert /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
