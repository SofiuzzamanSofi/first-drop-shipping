import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import Meals from '../Category/Meals';

const Home = () => {

    const [meals, setMeals] = useState([]);
    const title = useTitle('Home');



    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [])

    return (
        <div>

            <div>
                <h1 className='text-5xl font-extrabold py-6 text-center text-white'><u>This is all your meals .</u></h1>
            </div>
            <div className='grid gap-2 sm:grid-cols-2 2xl:grid-cols-3 justify-items-center'>
                {
                    // meals.map(meal => <Meals meal={meal} />)
                    meals.map((meal, index) => {
                        return <Meals key={index} index={index} meal={meal} />
                    })
                }
            </div>
        </div>
    );
};

export default Home;