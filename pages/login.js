import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";
import axios from "../config/axios";
import { useRouter } from "next/router";
const Login = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const router = useRouter();

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [passVisibility, setPassVisibility] = useState(false);

  const login = async () => {
    try {
      const res = await axios.post("api/customer/auth/login", {
        email,
        password,
      });

      if (res.status == 200) router.push("/");
    } catch (err) {
      if (error.response.data) {
        const { message } = error.response.data;

        setError(message);
      }
    }
  };

  return (
    <div className="bg-gray-100 grid place-items-center">
      <div className="w-96 bg-white flex flex-col items-center mt-10 mb-10 p-5">
        <h1 className="font-bold text-2xl">Sign in</h1>

        <button className="flex items-center rounded-md border-2 w-full justify-center py-2 mt-4">
          <Image src={"/google.svg"} width={20} height={20} />
          <span className="font-bold text-slate-700 ml-2 text-sm">
            Sign in with Google
          </span>
        </button>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="self-start mt-5 w-full"
        >
          <div className="flex flex-col mt-5">
            <label className="font-bold">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={() => login()}
            className="text-center py-2 rounded-md text-white font-bold mt-8 bg-emerald-600 w-full"
          >
            <span>Log in</span>
          </button>
        </form>
        <p className="text-slate-700 mt-3">
          Don't have an account?{" "}
          <span className="text-sky-500">
            <Link href={"/register"}>register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
