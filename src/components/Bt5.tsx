import React from 'react';

const PositionExample: React.FC = () => {
    return (
        <div className="relative bg-blue-200 p-6 rounded-lg w-64 h-40">
            <div className="relative bg-blue-300 p-4 rounded w-full h-full">
                <p>Relative parent</p>
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white p-2 rounded-lg shadow-lg">
                    Absolute child
                </div>
            </div>
        </div>
    );
};

export default PositionExample;
