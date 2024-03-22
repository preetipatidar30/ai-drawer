import Link from 'next/link';
import React from 'react';


const mainw= () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-24"
      id="signup"
    >
     <div className="p-22 mt-0 rounded shadow-md w-96">
    <h1 className="text-6xl text-center font-semibold mb-8 text-white">Sign Up</h1>
    <form>
        <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-8 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Full Name"
            required
        />
        <input
            type="email"
            className="w-full border border-gray-300 text-black rounded px-6 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Email"
            required
        />
        <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-6 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Password"
            required
        />
        <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-6 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black text-lg"
            placeholder="Confirm Password"
            required
        />
        <button type="submit" className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 text-lg">
            Sign Up
        </button>
    </form>
</div>

</div>


  );
};

export default mainw;