import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ category }) => {
    const { id, name, image } = category
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-transparent bg-center bg-contain bg-no-repeat rounded-lg shadow-md"
                style={{
                    backgroundImage: `url(${image})`
                }}></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{name}</h3>
                <Link to={`/category/${id}`}>
                    <div className="flex items-center justify-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                            See Products</button>
                    </div>
                </Link>
            </div>
        </div >
    );
};

export default SingleCategory;