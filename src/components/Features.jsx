import React from "react";

export default function Features() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h4 class="text-lg font-bold text-gray-600 title-font mb-4 uppercase">
            category
          </h4>
          <h1 class="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">
            we offer best services
          </h1>
        </div>
        <div class="flex flex-wrap -m-4 text-center">
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="hover:shadow-lg px-4 py-6 hover:rounded-3xl">
              <img
                src="./img/radar-sm.png"
                alt="Radar"
                className="mx-auto my-6"
              />
              <h2 class="title-font font-medium text-lg text-gray-900 capitalize">
                calculated weather
              </h2>
              <p class="leading-relaxed px-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                ipsum?
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="hover:shadow-lg px-4 py-6 hover:rounded-3xl">
              <img src="./img/plane.png" alt="Radar" className="mx-auto my-6" />
              <h2 class="title-font font-medium text-lg text-gray-900 capitalize">
                best flights
              </h2>
              <p class="leading-relaxed px-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                ipsum?
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="hover:shadow-lg px-4 py-6 hover:rounded-3xl">
              <img
                src="./img/microphone-sm.png"
                alt="Radar"
                className="mx-auto my-6"
              />
              <h2 class="title-font font-medium text-lg text-gray-900 capitalize">
                local events
              </h2>
              <p class="leading-relaxed px-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                ipsum?
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div class="hover:shadow-lg px-4 py-6 hover:rounded-3xl">
              <img src="./img/gear.png" alt="Radar" className="mx-auto my-6" />
              <h2 class="title-font font-medium text-lg text-gray-900 capitalize">
                customization
              </h2>
              <p class="leading-relaxed px-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                ipsum?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
