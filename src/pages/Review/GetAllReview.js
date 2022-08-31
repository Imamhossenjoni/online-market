import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReviews from './SingleReviews';

const GetAllReview = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div>
            <h2 className='text-center text-white font-bold text-5xl py-5 underline'>Our Customer Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'> 
                {
                    reviews.map(singleReview => <SingleReviews key={singleReview?._id} singleReview={singleReview}></SingleReviews>)
                }
            </div>
        </div>
    );
};

export default GetAllReview;