import Image from "next/image";
const Login = () => {
  return (
    <div className="bg-gray-100 grid place-items-center">
      <div className="w-96 bg-white flex flex-col items-center mt-10 mb-10 p-5">
        <h1 className="font-bold text-2xl">Sign up</h1>

        <button className="flex items-center rounded-md border-2 w-full justify-center py-2 mt-4">
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
              type={"text"}
              placeholder="Lessa Alexandar"
              className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold">Email</label>
            <input
              type={"email"}
              placeholder="Lessa Alexandar"
              className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold">Password</label>
            <input
              type={"password"}
              placeholder="At least 8 characters"
              className="w-full outline-none mt-2 border-2 rounded-md px-2 py-2 text-sm"
            />
          </div>

          <button className="text-center py-2 rounded-md text-white font-bold mt-8 bg-emerald-600 w-full">
            <span>Sign Up</span>
          </button>
        </form>
        <p className="text-slate-700 mt-3">
          Already have an account? <span className="text-sky-500">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
