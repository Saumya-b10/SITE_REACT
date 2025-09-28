import React from "react";

const NewsSetler = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center space-y-4 bg-gray-50 dark:bg-gray-900 py-8 px-4">
        <h1 className="md:text-4xl text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Stay Connected with Sikkim’s Monasteries
        </h1>
        <p className="md:text-lg text-gray-500/70 dark:text-gray-400 pb-8 max-w-2xl">
          Subscribe to get the latest updates on monasteries, virtual tours,
          cultural events, and spiritual insights.
        </p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
          <input
            className="border border-gray-300 dark:border-gray-600 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-600 dark:text-gray-200 bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="md:px-12 px-8 h-full text-white bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewsSetler;
