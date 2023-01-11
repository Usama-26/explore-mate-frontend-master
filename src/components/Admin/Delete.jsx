import React from "react";

export default function Delete() {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-semmiibold ">
            Delete Data
          </h1>
        </div>
        <section class="bg-white dark:bg-gray-900">
          <div class="container flex items-center justify-center mt-20 px-6 mx-auto">
            <form class="w-full max-w-md" action="dashboard">
              <div class="relative flex items-center ">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>

              <div class="relative flex items-center mt-6">
                <span class="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                />
              </div>

              <p className="mt-5 font-normal text-gray-500 ">
                Delete user based upon their usernames and Email
              </p>

              <div class="mt-6">
                <button class="w-full px-6 py-3 border-2 border-transparent text-sm font-medium tracking-wide text-white capitalize transform bg-orange-500 rounded-md hover:bg-white-500 focus:ring-blue-300 focus:ring-opacity-50 transition duration-500 ease-in hover:bg-white focus:outline-none focus:ring-2 hover:text-black hover:border-orange-500">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
