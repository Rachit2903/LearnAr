import React from 'react';
import { useParams } from 'react-router-dom';

const Marker = () => {
    const { id } = useParams();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Marker {id}</h1>
            <div className="bg-white rounded shadow-lg p-6">
                <img
                    src={`/marker_img/pattern-${id}.png`}
                    alt={`Marker ${id}`}
                    className="max-w-full h-auto rounded"
                />
            </div>
        </div>
    );
}

export default Marker;
