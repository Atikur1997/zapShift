import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import useAuth from '../../../Hooks/useAuth';

const NavBar = () => {
    const { user, logOutUser } = useAuth()
    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch((error) => { console.log(error) })
    }

    const links = <>
        <li><NavLink to=''>services</NavLink></li>
        <li><NavLink to=''>About Us</NavLink></li>
        <li><NavLink to='/sendparcel'>Send Parcel</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm rounded-2xl mt-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <NavLink  className="btn btn-ghost text-xl cursor-pointer"><Logo></Logo></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <a onClick={handleLogOut} className="btn btn-outline text-secondary hover:bg-primary">Log Out </a> : <Link to='/login' className="btn btn-outline text-secondary">Login </Link>
                    }

                    <Link
                        to='/rider'
                        className="btn btn-primary text-secondary ml-4">Be a Rider </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;