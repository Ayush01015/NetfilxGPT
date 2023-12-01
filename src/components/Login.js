import React from "react";
import Header from "./Header";
import { BG_IMG } from "./utils/constant";

const Login = () => {
  return (
    <>
      <Header />
      <div
        className="bg-cover bg-center  object-contain "
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
        }}
      >
        <div className="w-full flex items-center justify-center p-20">
          <div className="w-[450px] h-[660px] bg-black bg-opacity-80 text-white px-16 pt-14 pb-12 rounded ">
            <div>
              <form className="flex flex-col w-full  space-y-3 h-full">
                <p className="text-3xl font-medium">Sign In</p>
                <input
                  className="py-3 px-5 rounded bg-neutral-800 outline-none"
                  type="text"
                  placeholder="Email or phone number"
                />
                <input
                  className="py-3 px-5 rounded mb-36 bg-neutral-800 outline-none"
                  type="password"
                  placeholder="Password"
                />
                <button
                  type="button"
                  class="text-white bg-red-700  focus:outline-none  font-medium rounded-md text-sm px-5 py-3 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full "
                >
                  Sign In
                </button>
                <div className="flex justify-between items-center text-xs h-full">
                  <div className="flex items-center space-x-1 ">
                    <input type="checkbox" className="h-4 w-4" />
                    <span>Remember me</span>
                  </div>
                  <span>Need help?</span>
                </div>
              </form>
            </div>
            <div className="text-base mt-10 space-y-4 text-left">
              <p>
                <span className="text-[#8c8c8c]">New to Netflix? </span> Sign up
                now.
              </p>
              <p className="text-xs text-[#8c8c8c]">
                Sign in is protected by Google reCAPTCHA to ensure you’re not a
                bot.
              </p>
              <p className="text-xs text-[#8c8c8c]">
                The information collected by Google reCAPTCHA is subject to the
                Google <span className="text-blue-600">Privacy Policy</span> and{" "}
                <span className="text-blue-600">Terms of Service</span>, and is
                used for providing, maintaining, and improving the reCAPTCHA
                service and for general security purposes (it is not used for
                personalised advertising by Google).
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-black bg-opacity-80 text-white flex flex-col justify-start items-center text-base ">
          <div className="max-w-5xl   pt-6 pb-12  text-sm flex flex-col justify-between h-[270px]">
            <p>Questions? Call 000-800-919-1694</p>
            <div className="flex flex-wrap gap-5 items-start w-8/12">
                <p className="mr-16">FAQ</p>
                <p className="mr-16">Help Centre</p>
                <p className="mr-16">Terms of Use</p>
                <p className="mr-16">Privacy</p>
                <p className="mr-16">Cookie Preferences</p>
                <p className="mr-16">Corporate Information</p>
            </div>
            <div>
            <select className="text-white bg-black py-3 px-6">
              <option value="0">English</option>
              <option value="1"> Hindi</option>
            </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
