import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../config/axios";

const Login = () => {
  const [name, setName] = useState("");

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [passVisibility, setPassVisibility] = useState(false);

  const register = async () => {
    try {
      const res = await axios.post("api/customer/auth/register", {
        name,
        email,
        password,
      });

      if (res.status == 200) window.location.pathname = "/";
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;

        setError(message);
      }
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center">
      <div className="w-96 bg-white flex flex-col items-center mt-10 mb-10 p-5">
        <h1 className="font-bold text-2xl">Sign up</h1>

        <button
          onClick={() => router.push("/api/customer/auth/google")}
          className="flex items-center rounded-md border-2 w-full justify-center py-2 mt-4"
        >
          <Image src={"/google.svg"} width={20} height={20} />
          <span className="font-bold text-slate-700 ml-2 text-sm">
            Sign up with Google
          </span>
        </button>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="self-start mt-5 w-full"
        >
          <div className="flex flex-col">
            <label className="font-bold">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type={"text"}
              placeholder="Lessa Alexandar"
              className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type={"email"}
              placeholder="Lessa Alexandar"
              className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold">Password</label>
            <div className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm flex">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passVisibility ? "text" : "password"}
                placeholder="At least 8 characters"
                className="w-full outline-none"
              />
              <button onClick={() => setPassVisibility(!passVisibility)}>
                {passVisibility ? (
                  <EyeIcon className="w-5 h-5" />
                ) : (
                  <EyeOffIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <p className="text-red-400 mt-2 text-center">{error && error}</p>

          <button
            onClick={() => register()}
            className="text-center py-2 rounded-md text-white font-bold mt-8 bg-emerald-600 w-full"
          >
            <span>Sign Up</span>
          </button>
        </form>
        <p className="text-slate-700 mt-3">
          Already have an account?{" "}
          <span className="text-sky-500">
            <Link href={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
