import React from 'react';
import {useNavigate}from 'react-router-dom'

const Phone = ({ phone }) => {
    const navigate=useNavigate();
    console.log(phone);
    const { image, brand, slug, phone_name,price,quantity,supplier_name,_id } = phone;
    return (
        <div>
            <div class="card  bg-base-100 shadow-2xl">
                <figure><img src={image} style={{ height: '150px' }} className='mt-3' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="text-secondary font-bold  text-xl"><span className=''> Name:</span>{phone_name}</h2>
                    {/* <p>Slug:{slug}</p> */}
                    <p className='text-secondary text-xl'>Brand:{brand}</p>
                    <p className='text-xl'>Price:{price}</p>
                    <p className='text-xl'>Quantity:{quantity}</p>
                    {/* <p className='text-xl'>Suplier Name:{supplier_name}</p> */}
                    {/* <p className='text-sm'>Description:{description}</p> */}
                    <div className='grid lg:grid-cols-2 sm:grid-cols-2 gap-5'>
                         <div>
                            <button onClick={() => navigate(`/manageInventory/${_id}`)} className='btn btn-sm btn-secondary ' >Manage</button>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/services/${_id}`)} className='btn btn-secondary btn-sm text-white'>Update </button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;