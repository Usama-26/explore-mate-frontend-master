import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  function handleLogout() {
    window.localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-bold">Explore Mate</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex gap-10 flex-wrap items-center text-base justify-center">
          <NavLink
            className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
            to="places"
          >
            Explore
          </NavLink>

          <NavLink
            className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
            to="hotels"
          >
            Hotels
          </NavLink>
          <NavLink
            className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
            to="flights"
          >
            Flights
          </NavLink>
          <NavLink
            className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
            to="contact"
          >
            Contact
          </NavLink>
        </nav>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center gap-4 text-gray-800 font-bold text-lg rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user-circle stroke-gray-500 hover:stroke-orange-500"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2 z-10">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-orange-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-lg p-2 text-md  transition-colors`}
                        >
                          Settings
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={"/account"}
                          className={`${
                            active ? "bg-orange-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-lg p-2 text-md transition-colors`}
                        >
                          My Bookings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`${
                            active ? "bg-orange-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-lg p-2 text-md transition-colors`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <>
              <Link
                to={"login"}
                className="font-medium px-4 py-2 border-2 border-transparent rounded-lg bg-orange-500 text-white hover:bg-orange-700 hover:bg-transparent hover:text-gray-800 hover:border-orange-500 focus:outline-none transition ease-in-out duration-700"
              >
                Login
              </Link>
              <Link
                to="signup"
                className=" font-medium px-4 py-2 border-2 border-orange-500 rounded-lg hover:text-white hover:border-orange-500 hover:bg-orange-500 focus:outline-none transition ease-in-out duration-700"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
