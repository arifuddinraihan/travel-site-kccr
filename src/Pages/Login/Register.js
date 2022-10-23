import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext)

    const formSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email?.value;
        const password = form.password?.value;
        console.log("Yes form is working", email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => {
                console.error(e);
            });
    }
    return (
        <div className='min-h-screen mt-9'>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Register Now!</h2>
                        <form className='flex flex-col items-center' onSubmit={formSubmit}>
                            <div className="form-control gap-4 mt-4">
                                <label className="input-group input-group-vertical">
                                    <span>Email</span>
                                    <input name="email" type="text" placeholder="info@site.com" className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control gap-4 mt-4">
                                <label className="input-group input-group-vertical">
                                    <span>Password</span>
                                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="card-actions mt-4">
                                <button className="btn btn-secondary">Create Your Accout</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;