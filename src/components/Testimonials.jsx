import React from "react";
import Review from "./Review";
export default function Testimonials() {
  return (
    <section className="text-gray-600 body-font">
      <div class="flex flex-col text-center w-full">
        <h4 class="text-lg font-bold text-gray-600 title-font mb-4 uppercase  ">
          Testimonials
        </h4>
        <h1 class="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">
          what our clients has to say
        </h1>
      </div>
      <Review />
    </section>
  );
}
