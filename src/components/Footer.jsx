import React from "react";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        "Home",
        "Monasteries",
        "Virtual Tours",
        "Community",
        "Contact Us",
      ],
    },
    {
      title: "Explore More",
      links: [
        "360° Experiences",
        "Augmented Reality",
        "Cultural Insights",
        "Travel Guides",
        "Booking",
      ],
    },
    {
      title: "Follow Us",
      links: ["Instagram", "Twitter", "Facebook", "YouTube"],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-50 dark:bg-gray-900">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-600 dark:text-gray-400">
        {/* Logo + Info */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              className="w-12 h-12"
              src="/monologo.jpeg"
              alt="Monastery360 Logo"
            />
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Monastery360
            </h2>
          </div>
          <p className="max-w-[410px] mt-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Discover the mystical monasteries of Sikkim through immersive
            digital experiences. Explore ancient traditions, breathtaking
            landscapes, and vibrant culture — all from the comfort of your home.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[55%] gap-8">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80 dark:text-gray-500">
        Copyright {new Date().getFullYear()} ©{" "}
        <span className="font-medium text-gray-800 dark:text-gray-200">
          Monastery360
        </span>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
