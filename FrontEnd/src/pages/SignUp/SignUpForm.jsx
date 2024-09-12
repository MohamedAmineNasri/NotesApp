import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Please enter a user name");
      return
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email addresse.");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return
    }
    setError("");
  };
  return (
    <div className="flex justify-center items-center h-[75vh]   ">
      <div className="border rounded-lg bg-white px-10 py-10">
        <form onSubmit={handleSignUp}>
          <h4 className="text-2xl mb-7 flex justify-center">
            Create an Account
          </h4>

          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block ps-5 p-2.5 
                      w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-50 border mt-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block ps-5 p-2.5 
                      w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="border border-blue-700 w-full mt-5 p-2 font-bold tracking-widest hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out  "
          >
            Register
          </button>
          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/signup" className="font-medium text-primary underline">
              Click here to Login.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
