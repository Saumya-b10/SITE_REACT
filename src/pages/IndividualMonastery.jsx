import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { monasteriesData } from "../assets/assests";

const IndividualMonastery = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const monasteryInfo = monasteriesData.find(
    (monastery) => monastery.monastery_id == id
  );

  if (!monasteryInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          Monastery not found.
        </h1>
      </div>
    );
  }

  const galleryImages = [
    monasteryInfo.ImageURL,
    monasteryInfo.ImageURL,
    monasteryInfo.ImageURL,
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Main Banner */}
      <header
        className="relative h-[60vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `url(${monasteryInfo.ImageURL})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-500 dark:from-gray-900 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
            {monasteryInfo.name}
          </h1>
          <p className="text-xl text-gray-300">
            {monasteryInfo.significance_or_remarks}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-3">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-16">
          {/* History */}
          <section id="history">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              History
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400">
              <p>{monasteryInfo.detailed_description}</p>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((url, idx) => (
                <div
                  key={idx}
                  className="w-full h-48 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${url})` }}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky top-24 self-start space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-6">
            {/* Visiting Info */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Visiting Information
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Visiting Hours
                    </h4>
                    <p>{monasteryInfo.visiting_hours}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">
                    info
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Location
                    </h4>
                    <p>
                      {monasteryInfo.location_village_or_town},{" "}
                      {monasteryInfo.district}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-primary mr-3 mt-1">
                    star
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Altitude
                    </h4>
                    <p>
                      {monasteryInfo.altitude_meters
                        ? `${monasteryInfo.altitude_meters} meters`
                        : "N/A"}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Location Map
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  src={`https://www.google.com/maps?q=${monasteryInfo.coordinates.latitude},${monasteryInfo.coordinates.longitude}&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {monasteryInfo.location_village_or_town},{" "}
                {monasteryInfo.district}
              </p>
              <button
                onClick={() => navigate("/360tour")}
                className="w-full py-3 cursor-pointer  rounded-xl mt-5 font-bold text-xl bg-primary text-white "
              >
                Virtual Tour
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default IndividualMonastery;
