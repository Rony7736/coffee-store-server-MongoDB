import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee


    const handleUpdateCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatedCoffee = ({ name, quantity, supplier, taste, category, details, photo });
        console.log(updatedCoffee);

        // send data to the server

        fetch(`https://coffee-store-server-tawny-nine.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Coffee: {name}</h2>

            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" name="name" defaultValue={name} className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" name="quantity" defaultValue={quantity} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                {/* form Supplier and Taste row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" defaultValue={supplier} className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee taste" name="taste" defaultValue={taste} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                {/* form Category and Details row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee category" name="category" defaultValue={category} className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee details" name="details" defaultValue={details} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                {/* form Photo URL row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter photo URL" name="photo" defaultValue={photo} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />

            </form>
        </div>
    );
};

export default UpdateCoffee;