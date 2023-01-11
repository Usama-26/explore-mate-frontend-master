import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";

export default function Signup() {
  const { signupUser } = useContext(ApiContext);
  const [signupData, setSignupData] = useState(null);

  function handleSignupData(event) {
    const { name, value } = event.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleSignup(e) {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPass) {
      console.log("Password Unmatched");
      return;
    }
    const { email, password, name } = signupData;
    const newUser = signupUser({
      email,
      password,
      name,
    });
  }
  return (
    <div>
      <div>
        <div className="flex flex-col text-center w-full mt-20">
          <h4 className="text-lg font-bold text-gray-600 title-font mb-4 uppercase">For Explore Mate</h4>
          <h1 className="sm:text-3xl lg:text-4xl title-font mb-4 text-gray-900 capitalize font-bold ">Sign up</h1>
        </div>
        <section className="bg-white">
          <div className="container flex items-center justify-center mt-20 px-6 mx-auto">
            <form className="w-full max-w-md" action="destinations" onSubmit={handleSignup}>
              <div className="relative flex items-center ">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleSignupData}
                />
              </div>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  type="email"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11   00 focus:border-blue-400 blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  name="email"
                  onChange={handleSignupData}
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md   00 focus:border-blue-400 blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  name="password"
                  onChange={handleSignupData}
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md   00 focus:border-blue-400 blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Confirm Password"
                  name="confirmPass"
                  onChange={handleSignupData}
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 border-2 border-transparent text-sm font-semibold tracking-wide text-white capitalize transform bg-orange-500  rounded-md hover:bg-white-500 focus:ring-blue-300 focus:ring-opacity-50 transition ease-in hover:bg-white focus:outline-none focus:ring-2 hover:text-black hover:border-orange-500"
                >
                  Sign Up
                </button>

                <div className="mt-6 text-center ">
                  <a href="Accounts/Login.jsx" className="text-sm text-blue-500 hover:underline ">
                    Already have an account?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
