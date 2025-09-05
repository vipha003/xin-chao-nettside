import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/meny" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="flex-grow"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
