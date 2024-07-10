import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div
                onClick={() => navigate("/arapp")}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                Let's Learn
            </div>

            <div
                onClick={() => navigate("/download")}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer hover:bg-green-700 transition duration-300 ease-in-out"
            >
                Download Markers
            </div>

            <div
                onClick={() => navigate("/view-markers")}
                className="bg-purple-500 text-white font-bold py-2 px-4 rounded mb-4 cursor-pointer hover:bg-purple-700 transition duration-300 ease-in-out"
            >
                View Markers
            </div>
        </div>
    );
}

export default Home;
