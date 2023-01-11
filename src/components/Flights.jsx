import React from "react";
import { useNavigate } from "react-router-dom";

export default function Flights() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `destination`;
    navigate(path);
  };

  return (
    <div>
      <div className="bg-gray-100 pt-5">
        <div className="flex flex-col text-center w-full mt-20">
          <h1 className="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">Flights</h1>
        </div>
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  className="w-full h-44 rounded-tr-3xl rounded-tl-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <div className="w-72 mx-2 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 Ends */}
          </div>
          <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 1 Ends */}
            {/* Card 2 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 Ends */}
            {/* Card 3  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 Ends */}
            {/* Card 4  */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 cursor-pointer" onClick={routeChange}>
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                  className="w-full h-44 rounded-tl-3xl rounded-tr-3xl"
                />
              </div>
              <div className="bg-white rounded-bl-3xl rounded-br-3xl">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bookmark"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p className="text-xs text-yellow-500">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">iphone XS</h2>
                    <p className="text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos
                  </p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <h2 className="text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                    <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 Ends */}
          </div>
        </div>
      </div>
    </div>
  );
}
