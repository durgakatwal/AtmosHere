import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import About from "./components/pages/About";
import WeatherPage from "./components/pages/WeatherPage";
import Contact from "./components/shared/Contact";
import Features from "./components/shared/Features";

function App() {
  return (
    <>
      {/* <Button /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
