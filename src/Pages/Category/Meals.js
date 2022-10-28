import React from 'react';
import noImgFound from '../../accets/noImgFound/images.png'


const Meals = ({ meal, index }) => {

    // console.log(index)
    const { idMeal, strCategory, strArea, strMealThumb, strMeal } = meal;




    return (
        <div className=" bg-cyan-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-[500px] w-[300px]">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={strMealThumb ? strMealThumb : noImgFound} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    Rating:
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"> 5.0</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show Details</a>
                </div>
            </div>
        </div>
    );
};

export default Meals;