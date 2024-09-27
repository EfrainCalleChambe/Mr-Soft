import React from "react";
import imgLogo from "../src/assets/images/logo.svg";

const features = [
  {
    title: "Easy to use",
    description:
      "Simplified chore lists with intuitive layout for seamless daily planning",
  },
  {
    title: "Full Support",
    description:
      "Empower your productivity with personalized task management guided by your rules",
  },
  {
    title: "Never feel lost",
    description:
      "Stay seamlessly connected to your tasks anytime, anywhere with our sync mobile app",
  },
];

const Features = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto p-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h2>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
