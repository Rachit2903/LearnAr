import React from 'react';

const markers = [
    { id: 'A', imageName: 'pattern-A.png' },
    { id: 'B', imageName: 'pattern-B.png' },
    { id: 'C', imageName: 'pattern-C.png' },
    { id: 'D', imageName: 'pattern-D.png' },
    { id: 'E', imageName: 'pattern-E.png' },
    { id: 'F', imageName: 'pattern-F.png' },
    { id: 'G', imageName: 'pattern-G.png' },
    { id: 'H', imageName: 'pattern-H.png' },
    { id: 'I', imageName: 'pattern-I.png' },
    { id: 'J', imageName: 'pattern-J.png' },
    { id: 'K', imageName: 'pattern-K.png' },
    { id: 'L', imageName: 'pattern-L.png' },
    { id: 'M', imageName: 'pattern-M.png' },
    { id: 'N', imageName: 'pattern-N.png' },
    { id: 'O', imageName: 'pattern-O.png' },
    { id: 'P', imageName: 'pattern-P.png' },
    { id: 'Q', imageName: 'pattern-Q.png' },
    { id: 'R', imageName: 'pattern-R.png' },
    { id: 'S', imageName: 'pattern-S.png' },
    { id: 'T', imageName: 'pattern-T.png' },
    { id: 'U', imageName: 'pattern-U.png' },
    { id: 'V', imageName: 'pattern-V.png' },
    { id: 'W', imageName: 'pattern-W.png' },
    { id: 'X', imageName: 'pattern-X.png' },
    { id: 'Y', imageName: 'pattern-Y.png' },
    { id: 'Z', imageName: 'pattern-Z.png' },
];

const DownloadMarkers = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Download Marker Images</h1>
            <ul className="w-full max-w-xl">
                {markers.map(marker => (
                    <li key={marker.id} className="mb-2">
                        <a
                            href={`/Marker_img/${marker.imageName}`}
                            download
                            className="block w-full text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                        >
                            Download {marker.id} Marker
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DownloadMarkers;
