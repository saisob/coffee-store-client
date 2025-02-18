import React from 'react';
import Swal from 'sweetalert2'

const addCoffee = () => {
    const handleAddCoffee = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        // console.log("Sending coffee data:")

        try {
            const response = await fetch("http://localhost:3000/coffee", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCoffee)
            });

            const data = await response.json();
            console.log("Server Response:", data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done!'
                  })
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    }



    return (
        <div className='bg-[#F4F3F0]'>
            <div className='text-center'>
                <h2 className='text-4xl text-orange-500 font-bold'>Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal distribution of letters,<br /> as opposed to using Content here.</p>
            </div>

            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10'>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Coffee Name</h2>
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Available Quantity</h2>
                        <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10 '>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Supplier</h2>
                        <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Taste </h2>
                        <input type="text" placeholder="Enter coffee taste" name='taste' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10'>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Category</h2>
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Details</h2>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex  mt-10 mx-4 space-x-2'>
                    <h2 className='my-auto'>Photo</h2>
                    <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                </div>

                <div className='mt-10 mx-4'>
                    <button className="btn btn-block bg-slate-500">Add Coffee</button>
                </div>


            </form>
        </div>
    );
};

export default addCoffee;