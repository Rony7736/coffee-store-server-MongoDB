import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);

    const { _id, category, name, details, photo, quantity, supplier, taste } = coffee

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
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`https://coffee-store-server-tawny-nine.vercel.app/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            })

                            const remaining = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        });




    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src={photo} alt="Movie" />
                </figure>
                <div className="card-body flex-row justify-between">
                    <div>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{category}</p>
                        <p>{quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn btn-primary">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn btn-warning">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;