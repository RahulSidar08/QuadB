import React, { useState } from "react";

export const Signup = () => {

    const [fullname,setFullName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        const formData = {
            fullname,email,password
        }
        console.log(formData)
    }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="mb-1 font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="fullname"
                placeholder="Enter Your Name"
                required
                onChange={(e) => {
                    setFullName(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <input
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Enter Email Address"
                required
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 font-medium text-gray-700"
              >
                Password
              </label>
              <input
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter Password"
                required
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
