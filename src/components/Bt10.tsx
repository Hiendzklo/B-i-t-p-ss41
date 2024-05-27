import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" />
          <p className="text-gray-600 text-xs">Your password is between 4 and 12 characters</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input-text">
            Input Text Label
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="input-text" type="text" placeholder="Typing" />
          <p className="text-red-500 text-xs italic">Error message informing me of a problem</p>
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input id="remember-me" type="checkbox" className="form-checkbox h-4 w-4 text-gray-600 transition duration-150 ease-in-out" />
            <label htmlFor="remember-me" className="ml-2 block text-sm leading-5 text-gray-900">
              Remember me
            </label>
          </div>
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 text-sm font-bold mb-2">Radio selection</p>
          <div className="flex items-center mb-2">
            <input id="radio1" name="radio" type="radio" className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out" />
            <label htmlFor="radio1" className="ml-2 block text-sm leading-5 text-gray-900">
              Radio selection 1
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input id="radio2" name="radio" type="radio" className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out" defaultChecked />
            <label htmlFor="radio2" className="ml-2 block text-sm leading-5 text-gray-900">
              Radio selection 2
            </label>
          </div>
          <div className="flex items-center">
            <input id="radio3" name="radio" type="radio" className="form-radio h-4 w-4 text-gray-600 transition duration-150 ease-in-out" />
            <label htmlFor="radio3" className="ml-2 block text-sm leading-5 text-gray-900">
              Radio selection 3
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dropdown">
            Dropdown Title
          </label>
          <div className="relative">
            <select id="dropdown" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Dropdown option</option>
              <option>Dropdown option 1</option>
              <option>Dropdown option 2</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
