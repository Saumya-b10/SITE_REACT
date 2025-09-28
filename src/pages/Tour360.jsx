import React, { useEffect, useRef, useState } from "react";
import { monasteriesData } from "../assets/assests";

const Tour360 = () => {
  const [selectedMonastery, setSelectedMonastery] = useState(
    monasteriesData[0]
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const panoramaRef = useRef(null);
  const panoramaInstance = useRef(null);

  const [googleLoaded, setGoogleLoaded] = useState(false);

  // ✅ Check if Google Maps API has loaded
  useEffect(() => {
    if (window.google && window.google.maps) {
      setGoogleLoaded(true);
    } else {
      const interval = setInterval(() => {
        if (window.google && window.google.maps) {
          setGoogleLoaded(true);
          clearInterval(interval);
        }
      }, 500);
    }
  }, []);

  useEffect(() => {
    if (googleLoaded) {
      loadPanorama(selectedMonastery);
    }
  }, [selectedMonastery, googleLoaded]);

  const loadPanorama = async (monastery) => {
    if (!monastery) return;
    setLoading(true);
    setError("");

    try {
      const address = `${monastery.name.replace(/ /g, "+")}+Sikkim`;

      // Call your backend (should return { lat, lng, heading, pitch })
      const response = await fetch(
        `http://localhost:8082/api/map/${address}?heading=60&pitch=5&fov=90`
      );
      if (!response.ok) throw new Error("API call failed");
      const data = await response.json();

      panoramaInstance.current = new window.google.maps.StreetViewPanorama(
        panoramaRef.current,
        {
          position: { lat: data.lat, lng: data.lng },
          pov: { heading: data.heading, pitch: data.pitch },
          zoom: 1,
        }
      );

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load panorama. Is the backend running?");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <main className="pt-24 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Monastery 360° Virtual Tour
        </h2>

        {/* Dropdown */}
        <div className="flex justify-center mb-6">
          <select
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
            value={selectedMonastery.name}
            onChange={(e) =>
              setSelectedMonastery(
                monasteriesData.find((m) => m.name === e.target.value)
              )
            }
          >
            {monasteriesData.map((monastery) => (
              <option key={monastery.monastery_id} value={monastery.name}>
                {monastery.name}
              </option>
            ))}
          </select>
        </div>

        {/* Panorama */}
        <div
          ref={panoramaRef}
          className="w-full h-[600px] rounded-lg border-2 border-gray-400 shadow-lg mb-4"
        >
          {loading && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-700 dark:text-gray-300">
                Loading 360° tour...
              </p>
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
        )}
      </main>
    </div>
  );
};

export default Tour360;
