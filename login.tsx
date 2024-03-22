import React from "react";

const login = () => {
  return (
      
    <div
      className="flex min-h-screen flex-col items-center justify-center py-24"
      id="login"
    >
<div className="p-22 rounded shadow-md w-96">
    <h1 className="text-6xl text-center font-semibold mb-8 text-white">Login</h1>
    <form>
        <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-6 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Email"
            required
        />
        <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-6 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Password"
            required
        />
         <a href="#" className="text-lg font-bold text-white text-left block mt-0">Forgot Password ?</a>
        <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 text-lg">
            Submit
        </button>
    </form>
</div>

    </div>
  );
};

export default login;
