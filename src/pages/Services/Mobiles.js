import React from 'react';
import { Link } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';
import Mobile from './Mobile';

const Mobiles = () => {
    const [mobiles] = useMobile()
    console.log(mobiles)
    return (
        <div>
            <div className=' py-6 grid lg:grid-cols-3 '>
                <div></div>
                <div>
                    <h2 className='text-5xl font-bold underline text-secondary py-5'>Our Services</h2>
                </div>
                <div>
                    <button className='ps-6 btn btn-outline text-secondary hover:bg-secondary text-white'><Link to='/addIteam'>Add New Items</Link></button>
                </div>

            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
                }
            </div>
        </div>
    );
};

export default Mobiles;