import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center h-[75vh]   ">
      <div className="border rounded-lg bg-white px-10 py-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h4 className="text-2xl mb-7">Login</h4>

          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:outline-none block ps-10 p-2.5 
                        w-full"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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

          <button
            type="submit"
            className="border border-blue-700 w-full mt-5 p-2 font-bold tracking-widest hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out  "
          >
            Login
          </button>
          <p className="text-sm text-center mt-4">
            Not registered yet?{" "}
            <Link to="/signup" className="font-medium text-primary underline">
              Click here to create an account.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
