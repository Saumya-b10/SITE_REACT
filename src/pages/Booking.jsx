import React from "react";

const Booking = () => {
  return (
    <main className="flex flex-1 items-center justify-center py-10 lg:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="flex w-full justify-center gap-10 px-4 md:px-8 max-w-7xl">
        {/* Left Section - Booking Form */}
        <div className="flex-1 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-gray-900 dark:text-white">
            Book Your Visit
          </h1>

          <div className="space-y-4">
            {/* Monastery Select */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Monastery
              </span>
              <select className="form-select w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
                <option>Rumtek Monastery</option>
                <option>Pemayangtse Monastery</option>
                <option>Tashiding Monastery</option>
              </select>
            </label>

            {/* Visitors & Email */}
            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Number of Visitors
                </span>
                <input
                  className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                  placeholder="e.g. 2"
                  type="number"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Contact Email
                </span>
                <input
                  className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>

            {/* Phone */}
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone Number
              </span>
              <input
                className="form-input w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 p-3 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
                placeholder="Enter your phone number"
                type="tel"
              />
            </label>
          </div>

          {/* Booking Summary */}
          <div className="space-y-4 rounded-lg border border-gray-300 dark:border-gray-600 p-4 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Booking Summary
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Monastery
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Rumtek Monastery
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Visit Dates
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  July 15 - July 20, 2024
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Number of Visitors
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  2
                </span>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button className="w-full rounded-lg bg-primary py-3 text-base font-bold text-white shadow-lg hover:bg-primary transition">
            Confirm Booking
          </button>
        </div>

        {/* Right Section - Calendar */}
        <div className="flex-1 flex flex-col rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-6 shadow-lg">
          {/* Calendar Header */}
          <div className="flex items-center justify-between pb-4">
            {/* <button className="rounded-full p-2 hover:bg-primary dark:hover:bg-primary">
              <span className="material-symbols-outlined">chevron_left</span>
            </button> */}
            <p className="text-center font-bold text-gray-900 dark:text-white">
              July 2024
            </p>
            {/* <button className="rounded-full p-2 hover:bg-indigo-100 dark:hover:bg-primary">
              <span className="material-symbols-outlined">chevron_right</span>
            </button> */}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((day,idx) => (
              <p
                key={idx}
                className="py-2 text-xs font-bold text-gray-600 dark:text-gray-400"
              >
                {day}
              </p>
            ))}

            {/* Calendar Days (static for now) */}
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isSelected = day >= 15 && day <= 20;

              return (
                <div
                  key={day}
                  className={`${isSelected ? " dark:bg-primary" : ""}`}
                >
                  <button
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-gray-900 dark:text-white hover:bg-primary dark:hover:bg-primary transition ${
                      isSelected ? "bg-primary text-white" : ""
                    }`}
                  >
                    {day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Booking;
