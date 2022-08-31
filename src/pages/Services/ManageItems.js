import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../hooks/useDetails';
import useMobile from '../../hooks/useMobile';
import {toast}from 'react-toastify'

const ManageItems = () => {
    const { id } = useParams();
    const [mobiles,setMobiles]=useMobile();
    console.log(mobiles);
    const [detail] = useDetails(id)

    const handleDelete = () => {
        const confirm=window.confirm("Are you surely want to delete?");
        if(confirm){
            fetch(`http://localhost:5000/services/${id}`,{
                method:"Delete",
                headers:{
                    'content-type':"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remaining=mobiles.filter(mobile=>mobile._id !==id);
                    console.log(remaining)
                    setMobiles(remaining);
                    window.location.reload();
                    toast('Delete Done');
                }
            })
        }
    }
    return (
        
        <div className='flex items-center justify-center h-screen'>
            <div class="card w-96 bg-secondary text-white border shadow-2xl margin-auto items-center justify-center text-center px-6">
                <figure><img src={detail?.image} className='mt-3' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class=" font-bold  text-xl"><span className=''> Name:</span>{detail?.phone_name}</h2>
                    {/* <p>Slug:{slug}</p> */}
                    <p className=''>Brand:{detail.brand}</p>
                    {/* <p className='text-primary'>Brand:{detail?.phone_name}</p> */}
                    <p className='text-xl'>Stock:{detail?.quantity ? 'Available' : 'Sold Out'}</p>
                    <p className='text-xl'>Quantity:{detail?.quantity}</p>
                    <p className='text-xl'>Price:{detail?.price}</p>
                    <p className='text-xl'>Suplier Name:{detail?.supplier_name}</p>
                    {/* <p className='text-sm'>Description:{description}</p> */}
                    <button className='btn btn-outline hover:bg-red-500 text-white' onClick={handleDelete}>Delete Now</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;