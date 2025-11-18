import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { signInUser } = useAuth()
    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then(result => console.log(result))
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className=''>
            <h2 className='text-3xl  text-secondary font-semibold'>Welcome to ZapShift!</h2>
            <p>Login with ZapShift</p>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">

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

                    <button className="btn bg-primary text-secondary mt-4">Login</button>

                </fieldset>
                <p className=' mt-4'>New to ZapShift ?
                    <Link to='/register' className='text-secondary underline font-bold'>Register here!!!</Link>
                </p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;