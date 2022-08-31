import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useDetails from '../../hooks/useDetails';

const MobileDetail = () => {
    const { id } = useParams();
    const [detail] = useDetails(id);
    //handleStockQuantity
    const handleStock = event => {
        event.preventDefault();
        const stock = parseInt(event.target.stock.value);
        if (stock < 0) {
            alert('Negative number not allow');
            return;
        }
        console.log(detail);
        console.log('stock', stock);
        const previousValue = parseInt(detail.quantity);
        console.log('previous', previousValue);
        const totalQuantity = stock + previousValue;
        console.log(totalQuantity);
        const updatedQuantity = { quantity: totalQuantity };
        console.log(updatedQuantity);
        //send the data for update quantity
        console.log(id);
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.location.reload();
                event.target.reset();
            })

    }
    //handleDelivered
    const handleDelivered=()=>{
        const quantity=parseInt(detail.quantity);
        const deliverQuan=quantity-1;
        const afterQuantity={quantity:deliverQuan};
        fetch(`http://localhost:5000/services/${id}`,{
            method:"PUT",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(afterQuantity)
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.reload();
            console.log(data);
            
        })

    }
    return (
        <div className=' flex justify-center items-center h-screen gap-5 px-5'>
            <div class="card w-96 bg-secondary text-white border shadow-xl">
                <figure><img src={detail?.image} className='mt-3' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class=" font-bold  text-xl"><span className=''> Name:</span>{detail?.phone_name}</h2>
                    {/* <p>Slug:{slug}</p> */}
                    <p className=''>Brand:{detail.brand}</p>
                    {/* <p className='text-primary'>Brand:{detail?.phone_name}</p> */}
                    <p className='text-xl'>Stock:{detail?.quantity ? 'Available':'Sold Out'}</p>
                    <p className='text-xl'>Quantity:{detail?.quantity}</p>
                    <p className='text-xl'>Suplier Name:{detail?.supplier_name}</p>
                    {/* <p className='text-sm'>Description:{description}</p> */}
                    <button className='btn btn-outline hover:bg-red-500 text-white' onClick={handleDelivered}>Delivered</button>
                </div>
            </div>
            <div className='cols'>
                <h2 className='py-3 text-2xl text-secondary font-bold'>Please Restock Products Quantity</h2>
                <form onSubmit={handleStock}>
                    <input type="number" name='stock' placeholder="Give Your Restock Quantity" class="input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type='submit' value='Stock' className='btn btn-secondary text-white text-2xl  mt-3 hover:bg-primary hover:bg-red-500'></input>
                </form>
            </div>
        </div>
    );
};

export default MobileDetail;