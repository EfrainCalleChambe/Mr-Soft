import React from "react";
import imgTarea from "../assets/images/tareas.png";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center flex-grow px-4 md:px-8">
      <header className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Do your tasks <span className="text-indigo-600">quickly</span> and{" "}
          <span className="text-indigo-600">easy</span>
        </h1>
        <p className="text-lg text-gray-600">
          Your tasks, your rules, our support.
        </p>

        <div className="mt-6">
          <Link
            to="/get-stcomoarted"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={imgTarea}
          alt="Task Management Illustration"
          className="w-3/4 h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
