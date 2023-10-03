import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvater] = useState(null);
  const handleFile = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvater(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative h-[650px] w-[400px] overflow-hidden rounded-3xl">
        <div
          className="h-full w-full bg-[100%] "
          style={{
            backgroundImage: `url(
              https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg?w=900&t=st=1695564871~exp=1695565471~hmac=4fbe38826442c0a07cec3412127bd88d230f1cee0186b9038a1a1e4046ee4c85
            )`,
          }}
        ></div>

        <div className="absolute bottom-0 flex h-3/4 w-full flex-col rounded-t-3xl bg-black bg-opacity-20 shadow ">
          <h2 className="text-center text-white text-2xl mt-[-80px]">
            Register As New User
          </h2>
          <form action="#" className="mt-10 space-y-8 px-10 py-10 text-center">
            <div className="group relative">
              <input
                type="text"
                id="email"
                autoComplete="name"
                onChange={(e) => setEmail(e.target.value)}
                value={name}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />

              <label
                htmlFor="name"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Full Name
              </label>
            </div>
            <div className="group relative">
              <input
                type="text"
                id="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none "
              />
              {/* a */}
              <label
                htmlFor="email"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Email
              </label>
            </div>
            <div className="group relative">
              <input
                type={visible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="peer h-12 w-full rounded-3xl bg-gray-100 px-4 text-sm outline-none"
              />
              <label
                htmlFor="password"
                className="absolute left-1/3 top-0 flex h-full transform items-center pl-2 text-base transition-all duration-300 group-focus-within:-top-7 group-focus-within:h-1/2 group-focus-within:pl-0 group-focus-within:text-base group-focus-within:text-white peer-valid:-top-7 peer-valid:h-1/2 peer-valid:pl-0 peer-valid:text-base peer-valid:text-white"
              >
                Password
                {visible ? (
                  <AiOutlineEye
                    size={20}
                    className=" mx-20 "
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={20}
                    className=" mx-20 "
                    onClick={() => setVisible(true)}
                  />
                )}
              </label>
            </div>
            <div className="flex justify-center items-center">
              <label htmlFor="avatar"></label>
              <span className="text-gray-300 ml-5 h-10 w-10 overflow-hidden rounded-full">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar className="w-10 h-10" />
                )}
              </span>
              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFile}
                  className="sr-only"
                />
              </label>
            </div>
            <button
              type="submit"
              className=" h-10 w-full rounded-3xl bg-blue-900 text-white transition-all duration-300 hover: bg-blue-800"
            >
              Register
            </button>
          </form>
          <p className="gap-2 text-center text-white ">
            Already have an account?
            <Link
              to={"/login"}
              className="font-semibold text-sky-400 hover:text-blue-800 "
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
