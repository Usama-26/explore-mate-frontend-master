import React from "react";

export default function CTA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto bg-slate-100 rounded-tl-[100px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700">
            Subscribe to get information, latest news and other interesting
            offers
          </h1>
        </div>
        <div className="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded focus:border-indigo-500 focus:ring-2 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Email"
            />
          </div>
          <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
