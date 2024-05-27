import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faChartLine, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const AdminInterface: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <img src="http://mmoculture.com/wp-content/uploads/2019/09/League-of-Legends-new-icon-2019.jpg" alt="Company Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-semibold">Company</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-4">
          <a href="#" className="flex items-center py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            General
          </a>
          <a href="#" className="flex items-center py-2 px-4 bg-blue-600 rounded hover:bg-blue-500">
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Users
          </a>
          <a href="#" className="flex items-center py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            Statistic
          </a>
          <a href="#" className="flex items-center py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">
            <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
            Billing
          </a>
        </nav>
        <div className="px-4 py-4">
          <button className="w-full py-2 px-4 bg-red-600 rounded hover:bg-red-500">Sign out</button>
        </div>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">12</h2>
              <p className="text-gray-500">Peoples</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">5</h2>
              <p className="text-gray-500">Departments</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">0</h2>
              <p className="text-gray-500">Guests</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white py-2 px-4 rounded">Invite</button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <input 
                type="text" 
                placeholder="Search" 
                className="px-4 py-2 border rounded w-1/3"
              />
              <div className="flex space-x-4">
                <button className="py-2 px-4 border rounded">All</button>
                <button className="py-2 px-4 border rounded">All Departments</button>
                <button className="py-2 px-4 border rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input type="checkbox" className="form-checkbox" />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array(6).fill(0).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input type="checkbox" className="form-checkbox" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={`https://via.placeholder.com/40?text=A`} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Andrew Bojangles</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">+79000010101</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Designer</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Pride 1</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">2 days ago</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminInterface;
