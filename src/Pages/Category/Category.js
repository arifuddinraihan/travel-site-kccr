import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const Category = () => {
    const categoryData = useLoaderData()
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="underline decoration-blue-500">Category</span></h1>

                <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {
                        categoryData.map(category => <SingleCategory
                            key={category.id}
                            category={category}>

                        </SingleCategory>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;