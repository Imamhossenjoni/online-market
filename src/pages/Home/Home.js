import React from 'react';
import Contact from '../Contact/Contact';
import Banner2 from './Banner2';
import Banner from './Banner'
import Phonees from './Phonees';
import {Link}from 'react-router-dom'
import GetAllReview from '../Review/GetAllReview';
// import phones from './phones';

const Home = () => {
    return (
        <div className=''>
            <Banner2></Banner2>
            <div className='px-8 bg-base-100'>
            <Phonees className='mt-5'></Phonees>
            <button className='text-xl btn btn-outline text-white font-bold my-8'><Link to='/services'>See All Services...</Link></button>
            <Contact className='my-4'></Contact>
            <GetAllReview></GetAllReview>
            </div>
        </div>
    );
};

export default Home;