import React from "react";
import { Link } from "react-router-dom";
import navigator from "./../assets/img/navigator.svg";
export default function TopDestinations() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h4 className="text-lg font-bold text-gray-600 title-font mb-4 uppercase  ">top selling</h4>
          <h1 className="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">destinations</h1>
        </div>

        <div className="flex gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md cursor-pointer">
            <Link to={"/"}>
              <img className="rounded-t-lg" src="./img/location-1.png" alt="" />
            </Link>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between w-full font-bold text-lg">
                <span>London, United Kingdom</span>
                <span>$7.8k</span>
              </div>
              <p className="font-bold text-lg flex items-center gap-3">
                {" "}
                <span className="">
                  <img src={navigator} alt="paperplane" />
                </span>{" "}
                15 Days Trip
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md cursor-pointer">
            <Link to={"/"}>
              <img className="rounded-t-lg" src="./img/location-2.png" alt="" />
            </Link>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between w-full font-bold text-lg">
                <span>Rome, Italy</span>
                <span>$4.2k</span>
              </div>
              <p className="font-bold text-lg flex items-center gap-3">
                {" "}
                <span className="">
                  <img src={navigator} alt="paperplane" />
                </span>{" "}
                12 Days Trip
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md cursor-pointer">
            <Link to={"/"}>
              <img className="rounded-t-lg" src="./img/location-2.png" alt="" />
            </Link>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between w-full font-bold text-lg">
                <span>Rome, Italy</span>
                <span>$4.2k</span>
              </div>
              <p className="font-bold text-lg flex items-center gap-3">
                {" "}
                <span className="">
                  <img src={navigator} alt="paperplane" />
                </span>{" "}
                12 Days Trip
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md cursor-pointer">
            <Link to={"/"}>
              <img className="rounded-t-lg" src="./img/location-2.png" alt="" />
            </Link>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between w-full font-bold text-lg">
                <span>Rome, Italy</span>
                <span>$4.2k</span>
              </div>
              <p className="font-bold text-lg flex items-center gap-3">
                {" "}
                <span className="">
                  <img src={navigator} alt="paperplane" />
                </span>{" "}
                12 Days Trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
