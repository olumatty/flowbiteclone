import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Global/Header";
import Home from "./pages/Home/Index";
import Footer from "./pages/Global/Footer";
import Blog from "./pages/Blog/Index";
import Figma from "./pages/Figma/Index";
import Icons from "./pages/Icons/Index";
import Illustrations from "./pages/illustrations/Index";
import Blocks from "./pages/Blocks/Index";
import ProVersion from "./pages/ProVersion/Index";
import Pricing from "./pages/Pricing/Index";
import Login from "./pages/Login/Index";
import {useState, useEffect} from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(()=> localStorage.getItem("theme")==="dark");

  useEffect(() => {
    const root = document.documentElement; 
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    console.log("Current Theme:", darkMode ? "Dark" : "Light");  // Debugging
  }, [darkMode]);

  return (
      <div className={`flex flex-col min-h-screen transition-all duration-200 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <BrowserRouter>
          <Header key={darkMode ? "dark" : "light"} darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Routes>
            <Route path="/" element={<Home key={darkMode ? "dark" : "light"} darkMode={darkMode} setDarkMode={setDarkMode} />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/figma" element={<Figma />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/proversion" element={<ProVersion />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
};

export default App;
