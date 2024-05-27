// src/components/Layout.tsx
import React from 'react';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-3/4 grid grid-cols-3 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">01</div>
                <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-center">02</div>
                <div className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-center">03</div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg flex items-center justify-center">04</div>
                <div className="bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center">05</div>
                <div className="bg-pink-500 text-white p-4 rounded-lg flex items-center justify-center">06</div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg flex items-center justify-center">07</div>
                <div className="bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center">08</div>
                <div className="bg-pink-500 text-white p-4 rounded-lg flex items-center justify-center">09</div>
            </div>
        </div>
    );
};

export default Layout;
