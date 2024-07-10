import React from 'react';
import { NavLink } from 'react-router-dom';

const markerId = [
    { id: 'A' },
    { id: 'B' },
    { id: 'C' },
    { id: 'D' },
    { id: 'E' },
    { id: 'F' },
    { id: 'G' },
    { id: 'H' },
    { id: 'I' },
    { id: 'J' },
    { id: 'K' },
    { id: 'L' },
    { id: 'M' },
    { id: 'N' },
    { id: 'O' },
    { id: 'P' },
    { id: 'Q' },
    { id: 'R' },
    { id: 'S' },
    { id: 'T' },
    { id: 'U' },
    { id: 'V' },
    { id: 'W' },
    { id: 'X' },
    { id: 'Y' },
    { id: 'Z' },
];

const ViewMarkers = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">View Markers</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full max-w-4xl">
                {markerId.map(marker => (
                    <NavLink
                        to={`singleMarker/${marker.id}`}
                        key={marker.id}
                        className="bg-white rounded shadow-lg p-4 text-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <div className="text-xl font-semibold">{marker.id}</div>
                        <div>View Marker</div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default ViewMarkers;
