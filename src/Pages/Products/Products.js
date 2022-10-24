import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProducts from './SingleProducts';

const Products = () => {
    const products = useLoaderData()
    return (
        <div className='container px-6 py-10 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 xl:mt-12 xl:gap-12">
                {
                    products.map(perProduct => <SingleProducts
                        key={perProduct.id}
                        perProduct={perProduct}
                    ></SingleProducts>)
                }
            </div>
        </div>
    );
};

export default Products;