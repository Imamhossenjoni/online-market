import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/mobile.jpg'

const Banner2 = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div class="hero-overlay bg-opacity"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <div className=''>
                            <h1 class="text-5xl font-bold text-white">Welcome to Online Market</h1>
                            <p class="text-2xl text-white mt-5">You can buy latest phones from here.We promise, We will give you to our best service.</p>
                            <button class="btn btn-outline text-white text-xl mt-5"><Link to='/services'>Get Services</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;