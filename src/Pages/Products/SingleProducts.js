import React from 'react';

const SingleProducts = ({perProduct}) => {
    const { title, price, description, image, rating } = perProduct;
    const { rate, count } = rating;
    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-transparent bg-center bg-contain bg-no-repeat"
                style={{
                    backgroundImage: `url(${image})`
                }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title ? title.slice(0,15)+"..." : title}</h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {description ? description.slice(0,40)+"..." : description}
                </p>

                <div className="flex mt-2 item-center">
                    <p>Rating : {rate}</p>
                </div>

                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                    <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;