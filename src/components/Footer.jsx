import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font border border-gray-200 mt-10">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <NavLink
            to={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
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
            <span className="ml-3 text-xl font-bold uppercase">explore mate</span>
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">Your travel expert. Travel, enjoy and live a new life.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-md font-bold text-gray-500 title-font mb-4">Navigation</h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="destinations"
                >
                  Destinations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="booking"
                >
                  Bookings
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="about"
                >
                  About
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-md font-bold text-gray-500 title-font mb-4">Useful Links</h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="signup"
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="mission"
                >
                  Our Mission
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer"
                  to="story"
                >
                  Our Story
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-md font-bold text-gray-500 title-font mb-4">Follow Us</h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Facebook
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Instagram
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Twitter
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Youtube
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-md font-bold text-gray-500 title-font mb-4">Documentations</h2>
            <nav className="list-none mb-10">
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Term and Conditions
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Second Link
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Third Link
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium hover:underline underline-offset-2 hover:text-orange-500 cursor-pointer">
                  Fourth Link
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © Exlpore Mate - 2022 | Made with love by
            <Link
              to="/"
              href="https://sites.google.com/view/muhammad-sikander-iqbal"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1 font-bold"
              target="_blank"
            >
              Muhammad Sikander Iqbal
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link to="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link to="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
