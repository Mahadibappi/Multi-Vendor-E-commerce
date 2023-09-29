import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-center text-2xl font-semibold text-[#3c6d42]">
        Login To Our Platform
      </h1>

      <div className="">
        <form action="">
          <div>
            <input
              className="w-full py-2 border rounded-2xl px-8 text-center my-5"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="w-full py-2 border rounded-2xl px-8 text-center my-"
              type="Password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center my-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-8 rounded-full">
              Login
            </button>
          </div>
        </form>
        <p className="text-md ">
          Don't Have An Account ?
          <Link className="mx-1 text-blue-600" to={"/sign-up"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
