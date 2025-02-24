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
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light": "dark"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="flex flex-col min-h-screen" id={theme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/figma" element={<Figma />} />
            <Route path="/icons" element={<Icons />} />
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/proversion" element={<ProVersion />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
