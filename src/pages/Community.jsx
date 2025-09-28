import React from "react";
import { NavLink } from "react-router-dom";
import { posts } from "../assets/assests";

const Community = () => {
  return (
    <div className="container flex gap-10 mx-auto my-10  sm:px-6 lg:px-8 py-8 bg-gray-50 dark:bg-gray-900">
      {/* Sidebar/Profile */}
      <aside className="mb-12 lg:mb-0 lg:w-1/3">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-primary/20 dark:border-primary/30">
          <div className="flex flex-col items-center text-center">
            <div
              className="w-32 h-32 rounded-full bg-cover bg-center mb-4"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxlx0BMbB3YVKOpSfRDyNu02sNj3Nuha8dbLXk2Ek2LH3HTKQtCyTxbiuHLZ5ZVy0ae9BVTCAn2-STsymqFF2yQhlJGk8DQQ4d5uVRNfnKWYtaIm8x40DetxuHmH_IeNXt8X5PXqSDapITZkQ17Rh5iIcibebt753AmUbTnAz01FkcK8CPl_48U8gGFkwZ1rhtXr8eiC3ANpJFENojRoW4AdjGsmqiqUMdlsG0OVp0k8aoZErM30uCcQ_Z81QuI6eXq5dqGPJh2P4B")',
              }}
            />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Tenzin Gyatso
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              @tenzingyatso
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Joined 2021
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mt-6 text-center">
            <div className="p-3 rounded border border-primary/20 dark:border-primary/30">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                120
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Posts</p>
            </div>
            <div className="p-3 rounded border border-primary/20 dark:border-primary/30">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                85
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Followers
              </p>
            </div>
            <div className="p-3 rounded border border-primary/20 dark:border-primary/30">
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                30
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Following
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full bg-[#F36100] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
              Follow
            </button>
            <button className="w-full bg-[#F36100]/20 dark:bg-[#F36100]/30 text-primary font-bold py-2 px-4 rounded-lg hover:bg-[#F36100]/30 dark:hover:bg-[#F36100]/40 transition-colors">
              Message
            </button>
          </div>

          {/* About */}
          <div className="mt-6">
            <h3 className="font-bold text-gray-900 dark:text-white">About</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              A dedicated practitioner of Buddhist philosophy, focusing on
              community engagement and spiritual growth.
            </p>
          </div>

          {/* Interests */}
          <div className="mt-6">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Meditation",
                "Philosophy",
                "Community",
                "Sikkim",
                "Buddhism",
              ].map((interest, i) => (
                <span
                  key={i}
                  className="bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Community Posts */}
      <div className="lg:col-span-3 mt-12 lg:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Community
          </h2>
          <button className="bg-[#F36100] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            Create Post
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-primary/20 dark:border-primary/30 mb-6">
          <nav className="flex gap-8">
            <NavLink
              to="/posts"
              className="py-3 border-b-2 border-primary text-primary dark:text-white font-bold text-sm"
            >
              Posts
            </NavLink>
          </nav>
        </div>

        {/* Posts List */}
        <div className="space-y-8">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-primary/20 dark:border-primary/30 flex flex-col md:flex-row gap-6"
            >
              <div
                className="md:w-1/3 h-56 md:h-auto rounded-lg bg-contain bg-center"
                style={{ backgroundImage: `url(${post.img})` }}
              />
              <div className="md:w-2/3 flex flex-col">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {post.author}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                  {post.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
