import React from "react";

const MainBanner = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-700">
        {/* Slide 1 */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: "url('/mona1.jpeg')" }}
        >
          <div className="bg-black/40 p-6 rounded-lg text-center">
            <h1 className="text-4xl font-bold">Discover Sikkim</h1>
            <p className="mt-2 text-lg">The Land of Mystical Monasteries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
