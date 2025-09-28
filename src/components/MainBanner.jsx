import React from "react";

const MainBanner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Overlay container for slides */}
      <div className="absolute inset-0 flex transition-all duration-700">
        {/* Slide 1 */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: "url('/mona1.jpeg')" }}
        >
          {/* Dark/Light Overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 dark:from-black/60 dark:via-black/30 dark:to-black/60"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-lg">
              Discover Sikkim
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 drop-shadow-md">
              The Land of Mystical Monasteries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
