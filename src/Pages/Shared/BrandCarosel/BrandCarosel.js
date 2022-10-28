import React from 'react';

const BrandCarosel = () => {
    return (
        <div className='lg:grid lg:grid-cols-9 gap-3 bg-gray-900'>
            {/* main intersering likha  */}
            <div className="hero rounded col-span-4" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-left text-neutral-content text-white">
                    <div className="max-w-md">
                        <h1 className="mb-4 text-4xl font-bold ">Worlds No. 1 Trusted site</h1>
                        <p className="mb-4">We Provide the world best products from the worlds most prestigious sellers. Who works for long time. So, There is no issue to lose your hope. Also we have no heisted to our sellers.</p>
                        <p className='mb-4 text-yellow-400'>We provide Buyers priority First.  So feel Free to Shopping.</p>
                        <div className='text-center'>
                            <button className="btn btn-primary ">Wellcome to First-Drop-Shipping</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* carosel  */}
            <div className="carousel w-full h-[200px] lg:h-[300px] rounded col-span-5 p-4 bg-gray-800">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCarosel;