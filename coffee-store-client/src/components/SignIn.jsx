import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext)

    const handleSignIn = (e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result)            
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center mb-8">Signin now</h1>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign In</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignIn;