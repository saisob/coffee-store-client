import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const coffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining);
                        }
                    })

            }
        });
    }


    return (
        <div className="">
            <div className=" bg-base-100 shadow-xl rounded-2xl flex">
                <figure>
                    <img
                        src={photo}
                    />
                </figure>
                <div className="my-auto">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-xl mt-4 ">Supplier Name:<span className="font-semibold">{supplier}</span></p>
                    <p className="mt-4">{details}</p>

                </div>
                <div className="card-actions justify-end mt-10 ml-10">
                    <div className="join join-vertical my-4">
                        <button className="btn btn-ghost">View</button>
                        <Link to = {`updateCoffee/${_id}`}>
                            <button className="btn btn-ghost">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500 btn-ghost">X</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default coffeeCard;