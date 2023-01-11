import React from "react";

export default function Stars() {
  return (
    <section className="text-gray-600 body-font mb-10">
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">
          our clients
        </h1>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-2 sm:w-1/4 w-1/2">
            <img
              src="./img/axon.png"
              alt="star"
              className="object-scale-down h-48 w-96 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-1 sm:w-1/4 w-1/2">
            <img
              src="./img/jetstar.png"
              alt="star"
              className="object-scale-down h-48 w-96 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-1 sm:w-1/4 w-1/2">
            <img
              src="./img/alitalia.png"
              alt="star"
              className="object-scale-down h-48 w-96 grayscale hover:grayscale-0"
            />
          </div>
          <div className="p-1 sm:w-1/4 w-1/2">
            <img
              src="./img/expedia.png"
              alt="star"
              className="object-scale-down h-48 w-96 grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
