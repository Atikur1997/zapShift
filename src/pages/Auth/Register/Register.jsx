import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    


    const handleRegistration = (data) => {
        registerUser(data.email, data.password)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    };

    return (
        <div>
            <form className='card-body' onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">

                    {/* name field */}

                    <label className="label">Full Name</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        className="input w-full"
                        placeholder="Enter your full name"
                    />
                    {
                        errors.name?.type === 'required' && (
                            <p className="text-red-500 text-sm">Name is required</p>)
                    }


                    {/* Email field */}
                    <label className="label">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="input w-full"
                        placeholder="Email"
                    />
                    {errors.email?.type === 'required' && (
                        <p className="text-red-500 text-sm">Email is required</p>
                    )}

                    {/* Password field */}
                    <label className="label">Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                        })}
                        className="input w-full"
                        placeholder="Password"
                    />
                    {errors.password?.type === 'required' && (
                        <p className="text-red-500 text-sm">Password is required</p>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <p className="text-red-500 text-sm">Min length is 6</p>
                    )}

                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p className=' mt-4'>Already have an account ?
                    <Link to='/login' className='text-secondary underline font-bold'>Login  here!!!</Link>
                </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
