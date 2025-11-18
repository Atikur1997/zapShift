import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, updateUserProfile } = useAuth();




    const handleRegistration = (data) => {

        const profileImg = data.photo[0];
        registerUser(data.email, data.password)
            .then(res => {
                console.log(res)
                // store the image and get the URL
                const formData = new FormData();

                formData.append('image', profileImg);
                const imageApI = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_hosting_key}`


                axios.post(imageApI, formData)
                    .then(res => {

                        console.log("after image upload", res.data.data.display_url);
                        //update user profile here
                        const userProfile = {

                            displayName: data.name,
                            photoURL: res.data.data.display_url,

                        }
                        updateUserProfile(userProfile)
                        .then(res => { console.log(res) })

                    })
                //update user profile here 

            })
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
                    {/* Image field */}

                    <label className="label">Photo</label>

                    <input
                        type="file"
                        {...register('photo', { required: true })}
                        className="file-input w-full"
                        placeholder="your photo"
                    />
                    {
                        errors.photo?.type === 'required' && (
                            <p className="text-red-500 text-sm">Photo is required</p>)
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
