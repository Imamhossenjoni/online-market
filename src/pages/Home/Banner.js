import React from 'react';
import img from '../../img/mobile.jpg'
import {Link} from 'react-router-dom'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-secondary text-white">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' style={{width:'450px'}}  class="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 class="text-5xl font-bold text-white">Welcome to Online Market</h1>
                        <p class="text-2xl text-white mt-2">You can buy latest phones from here.We promise, We will give you to our best service.</p>
                        <button class="btn btn-outline text-white text-xl mt-5"><Link to='/services'>Get Services</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;