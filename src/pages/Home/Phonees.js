import React from 'react';
import useMobile from '../../hooks/useMobile';
import Phone from './Phone';

const Phonees = () => {
    const [mobiles]=useMobile();
    return (
        <div>
            <h2 className='text-5xl font-bold underline text-secondary py-8'>Our Services</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {mobiles.slice(0,6).map(mobile=><Phone key={mobile.key} phone={mobile}></Phone>)}
            </div>
        </div>
    );
};

export default Phonees;