import { useState, useRef } from "react";
import Header from "./Header";
import { ckeckValidData } from "./utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // console.log(errMessage);
  const handleButtonClick = () => {
    const err = ckeckValidData(email.current.value, password.current.value);
    setErrMessage(err);
    // console.log(email.current.value);
    // console.log(password.current.value);
    if (err) return;
    if (!isSignInForm) {
      //Signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("USER: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Logged In User:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div
        className="bg-cover bg-center object-contain"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
        }}
      >
        <div className="w-full flex items-center justify-center p-20">
          <div className="w-[450px] h-[660px]  bg-black bg-opacity-80 text-white px-16 pt-14 pb-20 rounded ">
            <div>
              <form className="flex flex-col w-full space-y-4 h-full">
                <p className="text-3xl font-medium">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </p>
                {!isSignInForm && (
                  <input
                    className={`py-3 px-5 rounded bg-neutral-800 outline-none`}
                    type="text"
                    placeholder="Enter Full Name"
                    ref={fullName}
                  />
                )}
                <input
                  className="py-3 px-5 rounded bg-neutral-800 outline-none"
                  type="email"
                  placeholder="Email or phone number"
                  ref={email}
                />
                <input
                  className="py-3 px-5 rounded bg-neutral-800 outline-none mb-4"
                  type="password"
                  placeholder="Password"
                  ref={password}
                />
                <p className="text-[#E87C03] text-xs">
                  {errMessage ===
                  "auth/invalid-credential-Firebase: Error (auth/invalid-credential)."
                    ? "User not found, Please Sign Up"
                    : errMessage}
                </p>
                <div className="flex flex-col justify-between gap-3 ">
                  <button
                    type="button"
                    className="text-white bg-red-700  focus:outline-none  font-medium rounded-md text-sm px-5 py-3 text-center  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-full "
                    onClick={handleButtonClick}
                  >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                  </button>
                  <div className="flex justify-between items-center text-xs h-full">
                    <div className="flex items-center space-x-1 ">
                      <input type="checkbox" className="h-4 w-4" />
                      <span>Remember me</span>
                    </div>
                    <span>Need help?</span>
                  </div>
                </div>
              </form>
            </div>
            <div className="text-base mt-10 space-y-4 text-left">
              <div className="cursor-pointer" onClick={toogleSignInForm}>
                {isSignInForm ? (
                  <p>
                    <span className="text-[#8c8c8c]">New to Netflix? </span>Sign
                    up now.
                  </p>
                ) : (
                  <p>
                    <span className="text-[#8c8c8c]">Already a user? </span>Sign
                    In Now
                  </p>
                )}
              </div>
              <p className="text-xs text-[#8c8c8c]">
                Sign in is protected by Google reCAPTCHA to ensure you’re not a
                bot.
              </p>
              <p className="text-xs text-[#8c8c8c]">
                The information collected by Google reCAPTCHA is subject to the
                Google <span className="text-blue-600">Privacy Policy</span> and
                <span className="text-blue-600"> Terms of Service</span>, and is
                used for providing, maintaining, and improving the reCAPTCHA
                service and for general security purposes (it is not used for
                personalised advertising by Google).
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-black bg-opacity-80  flex flex-col justify-start items-center text-base text-[#8c8c8c] ">
          <div className="max-w-5xl   pt-6 pb-12  text-sm flex flex-col justify-between h-[270px]">
            <p>Questions? Call 000-800-919-1694</p>
            <div className="flex flex-wrap  items-start  justify-start  w-full h-1/2 text-xs">
              <div className="w-[230px]">
                <span>FAQ</span>
              </div>
              <div className="w-[230px]">
                <span>Help Centre</span>
              </div>
              <div className="w-[230px]">
                <span>Terms of Use</span>
              </div>
              <div className="w-[230px]">
                <span>Privacy</span>
              </div>
              <div className="w-[230px]">
                <span>Cookie Preferences</span>
              </div>
              <div className="w-[230px]">
                <span>Corporate Information</span>
              </div>
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
