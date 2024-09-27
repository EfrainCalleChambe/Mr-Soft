import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Tareas from "./components/TareasRecientes";import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 flex flex-col">
      <Navbar />
      <HeroSection />
      <Features />
      <Tareas />
      <Footer />
    </div>
    </Router>
  );
};

export default App;
