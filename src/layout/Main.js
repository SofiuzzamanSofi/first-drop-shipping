import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandCarosel from '../Pages/Shared/BrandCarosel/BrandCarosel';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RighSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header />
            <div className=' m-auto lg:w-10/12  lg:min-h-[350px] xl:min-h-[450px] 2xl:min-h-[50px]'>
                <BrandCarosel />
                <div className='lg:grid lg:grid-cols-12 mt-3'>
                    <div className='col-span-2 bg-cyan-800'> <LeftSideNav /></div>
                    <div className='col-span-8 bg-cyan-600 '><Outlet /></div>
                    <div className='col-span-2 bg-cyan-800'><RightSideNav /> </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main;