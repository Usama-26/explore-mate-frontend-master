import React from "react";

export default function Contact() {
  return (
    <div>
      <div>
        <div class="flex flex-col text-center w-full mt-20">
          <h1 class="sm:text-3xl lg:text-4xl title-font text-gray-600 underline capitalize font-bold ">
            Contact Us
          </h1>
        </div>
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                class="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
              <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div class="lg:w-1/2 px-6">
                  <h2 class="text-xs font-bold text-gray-500 title-font mb-4">
                    ADDRESS
                  </h2>
                  <p class="mt-1">
                    12-A Block A Phase 5 Bahria Town, Defence Road Lahore.
                  </p>
                </div>
                <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 class="text-xs font-bold text-gray-500 title-font">
                    EMAIL
                  </h2>
                  <a class="text-indigo-500 leading-relaxed">
                    info@explore-mate.com
                  </a>
                  <h2 class="text-xs font-bold text-gray-500 title-font mt-4">
                    PHONE
                  </h2>
                  <p class="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600">
                We value your feedbacks.
              </p>
              <div class="relative mb-4">
                <label
                  for="name"
                  class="leading-7 text-sm text-gray-600 font-bold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="email"
                  class="leading-7 text-sm text-gray-600 font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative mb-4">
                <label
                  for="message"
                  class="leading-7 text-sm text-gray-600 font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  data-gramm="false"
                  wt-ignore-input="true"
                ></textarea>
              </div>
              <button class="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                Button
              </button>
              <p class="text-xs text-gray-500 mt-3">
                We will get back to you if we find an concern in your feedback.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
