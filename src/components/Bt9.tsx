import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-max w-64 bg-gray-900 text-white flex flex-col">
      <div className="flex items-center justify-center h-20">
        <img src="http://mmoculture.com/wp-content/uploads/2019/09/League-of-Legends-new-icon-2019.jpg" alt="Logo" className="h-15 w-10" />
      </div>
      <div className="mt-8 flex-1">
        <ul>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-home mr-3"></i>
            Dashboard
          </li>
          <li className="flex items-center p-4 bg-gray-700">
            <i className="fas fa-pencil-alt mr-3"></i>
            Posts
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-photo-video mr-3"></i>
            Media
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-file-alt mr-3"></i>
            Pages
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700 relative">
            <i className="fas fa-comments mr-3"></i>
            Comments
            <span className="absolute right-4 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">1</span>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-paint-brush mr-3"></i>
            Appearance
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-plug mr-3"></i>
            Plugins
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-users mr-3"></i>
            Users
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-cog mr-3"></i>
            Settings
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700">
            <i className="fas fa-wrench mr-3"></i>
            Tools
          </li>
        </ul>
      </div>
      <div className="p-4 mt-auto">
        <div className="p-4 bg-gray-800 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <span>Light Mode</span>
            <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
              <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
            </label>
          </div>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600">
          <div className="flex items-center">
            <i className="fas fa-sign-out-alt mr-3"></i>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
