import React from "react";
import { monastery } from "../assets/assests";

const DiscoverSection = () => {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Discover Sikkim</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {monastery.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverSection;
