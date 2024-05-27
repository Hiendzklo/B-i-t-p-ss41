import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBox, faUsers, faDollarSign, faBullhorn, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const AdminInterface: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
          <img src="http://mmoculture.com/wp-content/uploads/2019/09/League-of-Legends-new-icon-2019.jpg" alt="Company Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-4">
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Dashboard
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            <FontAwesomeIcon icon={faBox} className="mr-2" />
            Product
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded bg-blue-100">
            <FontAwesomeIcon icon={faUsers} className="mr-2 text-blue-600" />
            Customers
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            Income
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
            Promote
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            Help
          </a>
        </nav>
        <div className="px-4 py-4">
          <div className="flex items-center space-x-4">
            <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-15-1024x698.jpg" alt="User Avatar" className="h-10 w-10 rounded-full" />
            <div>
              <h3 className="text-sm font-semibold text-gray-700">Duy Hiển</h3>
              <p className="text-xs text-gray-500">Project Manager</p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-700">Hello Duy Hiển, 👋</h1>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded w-1/3"
          />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-green-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Total Customers</h3>
                <p className="text-2xl font-bold">5,423</p>
                <p className="text-sm text-green-500">18% this month</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Members</h3>
                <p className="text-2xl font-bold">1,893</p>
                <p className="text-sm text-red-500">7% this month</p>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faUsers} className="h-10 w-10 text-purple-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Active Now</h3>
                <p className="text-2xl font-bold">189</p>
                <div className="flex space-x-2 mt-2">
                  <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-600x750.jpg" alt="User 1" className="h-5 w-5 rounded-full" />
                  <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-2-600x750.jpg" alt="User 2" className="h-5 w-5 rounded-full" />
                  <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-3-600x799.jpg" alt="User 3" className="h-5 w-5 rounded-full" />
                  <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-6-768x768.jpg" alt="User 4" className="h-5 w-5 rounded-full" />
                  <img src="https://dungplus.com/wp-content/uploads/2019/12/girl-xinh-7.jpg" alt="User 5" className="h-5 w-5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">All Customers</h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 border rounded"
                />
                <select className="px-4 py-2 border rounded">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Oldest</option>
                </select>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
                  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
                  { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
                  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
                  { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
                  { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
                  { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
                  { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
                ].map((customer, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.company}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{customer.country}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {customer.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-700">Showing data 1 to 8 of 256K entries</span>
              <div className="flex space-x-2">
                <button className="py-2 px-4 border rounded">1</button>
                <button className="py-2 px-4 border rounded">2</button>
                <button className="py-2 px-4 border rounded">3</button>
                <span className="py-2 px-4 border rounded">...</span>
                <button className="py-2 px-4 border rounded">40</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminInterface;

