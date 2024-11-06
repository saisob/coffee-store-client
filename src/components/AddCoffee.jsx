import React from 'react';

const addCoffee = () => {
    return (
        <div className='bg-[#F4F3F0]'>
            <div className='text-center'>
                <h2 className='text-4xl text-orange-500 font-bold'>Add New Coffee</h2>
                <p>It is a long established fact that a reader will be distraceted by the readable <br /> content of a page when looking at its layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal distribution of letters,<br /> as opposed to using Content here.</p>
            </div>

            <form>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10'>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Coffee Name</h2>
                        <input type="text" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Available Quantity</h2>
                        <input type="text" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10 '>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Supplier</h2>
                        <input type="text" placeholder="Supplier" className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Taste </h2>
                        <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='grid grid-cols-2 mx-4 space-x-5 mt-10'>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Category</h2>
                        <input type="text" placeholder="Category" className="input input-bordered w-full" />
                    </div>
                    <div className='flex space-x-2'>
                        <h2 className='my-auto'>Details</h2>
                        <input type="text" placeholder="Details" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='flex  mt-10 mx-4 space-x-2'>
                    <h2 className='my-auto'>Photo</h2>
                    <input type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                </div>

                <div className='mt-10 mx-4'>
                    <button className="btn btn-block bg-slate-500">Add Coffee</button>
                </div>


            </form>
        </div>
    );
};

export default addCoffee;