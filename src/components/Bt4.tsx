import React from 'react';

const Button: React.FC = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <button className="bg-blue-400 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600">
                Submit
            </button>
        </div>
    );
};

export default Button;
