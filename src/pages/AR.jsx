import React from "react";

const AR = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4 text-center">
      {/* AR Icon */}
      <div className="bg-primary/10 dark:bg-primary/20 text-primary w-32 h-32 rounded-full flex items-center justify-center mb-8 shadow-lg">
        <span className="material-symbols-outlined text-6xl">view_in_ar</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Augmented Reality Feature
      </h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        We are working on bringing an immersive AR experience to explore the
        monasteries virtually. This feature will be available soon!
      </p>

      {/* Call-to-action or placeholder */}
      <div className="flex gap-4">
        <button className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
          Notify Me
        </button>
        <button className="bg-transparent border border-primary text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AR;
