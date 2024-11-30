import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = ({ name, quantity, supplier, taste, category, details, photo });
        console.log(newCoffee);

        // send data to the server

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })



    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">ADD coffee</h2>

            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-6 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Available Quantity" name="quantity" className="input input-bordered md:w-full" />
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
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered md:w-full" />
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
                            <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>

                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered md:w-full" />
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
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn btn-block bg-[#D2B48C]" />

            </form>
        </div>
    );
};

export default AddCoffee;