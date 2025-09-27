import React from "react";
import { features } from "../assets/assests";

const Features = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Monastery360 Features
      </h2>

      {/* Responsive grid: 1 column on mobile, 2 on desktop */}
      <div className="grid gap-12 max-w-6xl mx-auto md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            {/* Feature Image */}
            <img
              src={feature.img}
              alt={feature.title}
              className="rounded-xl shadow-md w-full h-42 object-cover mb-4 hover:scale-105 transition-transform duration-300"
            />

            {/* Feature Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
