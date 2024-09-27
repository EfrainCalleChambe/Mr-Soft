import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/FeaturesSection";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-blue-200 flex flex-col">
      <Navbar />
      <HeroSection />
      <Features />
      {/* Footer */}
      <footer className="mt-16 text-gray-600">
        <div className="flex space-x-4 justify-center">
          <a href="#" className="hover:underline">
            About us
          </a>
          <a href="#" className="hover:underline">
            Contacts
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
