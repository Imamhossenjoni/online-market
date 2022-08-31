import React from 'react';
import useMobiles from '../../hooks/useMobile'
import {useParams}from 'react-router-dom'

const ManageDelete = () => {
    const [mobiles] = useMobiles();
    const {id}=useParams();
    console.log(id);
    const handleDelete=()=>{
        console.log('I am saying inside button')
        const confirm=window.confirm('Are you sure');
        if(confirm){
            fetch(`http://localhost:5000/services/${id}`,{
                method:'DELETE',
                headers:{
                    'content-type':"application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>console.log(data));
        }
    }
    return (
        <div className='bg-secondary'>
            <div class="overflow-x-auto px-12 py-12">
                <table class="table table-zebra w-full py-12">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mobiles.map(mobile => <tr>
                            <td><div class="flex items-center space-x">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={mobile?.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div></td>
                            <td>{mobile?.phone_name}</td>
                            <td>{mobile?.price}</td>

                            <td>{mobile?.quantity}</td>
                            <td><button onClick={handleDelete} className='btn btn-outline hover:bg-secondary'>Delete</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageDelete;