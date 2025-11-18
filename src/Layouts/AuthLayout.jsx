import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo />

            <div className='flex justify-between items-center gap-4 h-screen'>
                <div className='flex-1'>
                    <Outlet />
                </div>

                <div className='flex-1 bg-primary/30 h-full flex justify-center items-center'>
                    <img src={authimg} alt="" className='max-h-[90%] ' />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
