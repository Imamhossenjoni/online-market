import React from 'react';

const AddItem = () => {
    const handleAddItem=event=>{
        event.preventDefault();
        const phone_name=event.target.name.value;
        const brand=event.target.brand.value;
        const image=event.target.img.value;
        const description=event.target.discription.value;
        const price=event.target.price.value;
        const quantity=event.target.quantity.value;
        const supplier_name=event.target.suplier.value;
        const services={phone_name,brand,image,description,price,quantity,supplier_name};
        fetch("http://localhost:5000/services",{
            // https://i.ibb.co/X5YPPNf/15s-du1087tu-01-228x228.jpg
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(services)
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Your services added')
            console.log(data)
        })
    }
    return (
        <div className='bg-secondary'>
            <h2 className='py-3 font-bold text-3xl text-white '>Please Add New Items: </h2>
            <form onSubmit={handleAddItem}>
                <input type="text" placeholder="Product Name" name='name' class="input input-bordered my-2 w-full max-w-xs " /><br />
                <input type="number" placeholder="Enter Product Price" name='price' class="input input-bordered w-full my-2 max-w-xs " /><br />
                <input type="text" placeholder="Product Suplier name" name='suplier' class="input input-bordered w-full my-2 max-w-xs " /><br />
                <input type="number" placeholder="Enter Product Quantity" name='quantity' class="input input-bordered w-full my-2 max-w-xs " /><br />
                <input type="text" placeholder="Enter Product img URL" name='img' class="input input-bordered w-full my-2 max-w-xs " /><br />
                <input type="text" placeholder="Product brand" name='brand' class="input input-bordered w-full my-2 max-w-xs " /><br />
                <textarea class="textarea textarea-bordered my-2" name='discription' cols={'41'} placeholder="Write Product Discription"></textarea><br />
                <input type="submit" value='Add Item' class="input input-bordered btn-outline text-white text-2xl text-white font-bold w-full my-2 max-w-xs " /><br />
            </form>
        </div>
    );
};

export default AddItem;