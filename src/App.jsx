import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Global/Header";
import Home from "./pages/Home/Index";
import Footer from "./pages/Global/Footer";
import Blog from "./pages/Blog/Index";
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
            <Route path="/blocks" element={<Blocks darkMode={darkMode}  />} />
            <Route path="/blog" element={<Blog darkMode={darkMode}  />} />
            <Route path="/proversion" element={<ProVersion darkMode={darkMode} />} />
            <Route path="/pricing" element={<Pricing darkMode={darkMode} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer darkMode={darkMode} />
        </BrowserRouter>
      </div>
  );
};

export default App;
