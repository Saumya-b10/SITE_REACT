import React, { useState } from "react";
import { monasteriesData } from "../assets/assests";
import { useNavigate } from "react-router-dom";

const Monasteries = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredMonasteries = monasteriesData.filter((monastery) => {
    const matchesSearch = monastery.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation
      ? monastery.location_village_or_town === selectedLocation
      : true;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="py-6 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100">
          Monasteries of Sikkim
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          Explore the spiritual heart of Sikkim through its serene monasteries,
          each a beacon of peace and ancient wisdom.
        </p>
      </div>

      {/* Search and Location Filters */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:space-x-4 space-y-4 md:space-y-0 px-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search monasteries..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full max-w-2xl px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E65C00] bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500"
        />

        {/* Location Dropdown */}
        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-200"
        >
          <option value="">Select Location</option>
          <option value="Gangtok">Gangtok</option>
          <option value="Pelling">Pelling</option>
          <option value="Namchi">Namchi</option>
          <option value="Yuksom">Yuksom</option>
        </select>
      </div>

      {/* Monastery Listings */}
      <div className="mt-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredMonasteries.map((monastery, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <img
              src={monastery.ImageURL}
              alt={monastery.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {monastery.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 flex-1">
                {monastery.architectural_features}
              </p>
              <span
                onClick={() =>
                  navigate(`/monasteries/${monastery.monastery_id}`)
                }
                className="text-[#E65C00] dark:text-[#FF8C42] mt-4 cursor-pointer hover:underline self-start"
              >
                Read more...
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Monasteries;
