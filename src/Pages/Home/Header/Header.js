import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const { user, handleSignOut } = useAuth()
    return (

        <>
            <nav className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center">
                            <div className="flex items-center justify-between ">
                                <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/f2kvLcw/preview.png" alt="Workflow" />
                                <h5 className="text-white ml-2">KAFILATOLY GENERAL HOSPITAL</h5>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-24 flex items-baseline space-x-4">

                                    <NavLink to="/home" className="bg-gray-900 hover:bg-gray-700  text-white px-2 py-2 rounded-md text-sm font-medium no-underline" aria-current="page">Home</NavLink>

                                    <NavLink to="/doctors" className="text-gray-300   hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium no-underline">Doctors</NavLink>

                                    {user.email && [<NavLink to="/appoinment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium no-underline">Appoinment</NavLink>,

                                    <NavLink to="/services/:id" className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium no-underline">Details</NavLink>]}

                                    {
                                        user.email ? [[<p className="text-white ml-2"><small>{user.displayName}</small></p>, <img src={user.photoURL} className="h-8 w-8 rounded-full m-auto" alt="" />], <button onClick={handleSignOut} className="login-btn" >Sign Out <i class="fas fa-sign-out-alt"></i></button>]

                                            :
                                            [<NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Login</NavLink>,

                                            <NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Register</NavLink>]
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

            <nav>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">

                        <NavLink to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline" aria-current="page">Home</NavLink>

                        <NavLink to="/doctors" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Doctors</NavLink>

                        <NavLink to="/appoinment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Appoinment</NavLink>

                        <NavLink to="/services/:id" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Details</NavLink>

                        {
                            user.email ? [[<p className="text-white ml-2"><small>{user.displayName}</small></p>, <img src={user.photoURL} className="h-8 w-8 rounded-full m-auto" alt="" />], <button onClick={handleSignOut} className="login-btn" >Sign Out <i class="fas fa-sign-out-alt"></i></button>]

                                :
                                [<NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Login</NavLink>,

                                <NavLink to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Register</NavLink>]
                        }
                    </div>

                </div>

            </nav >




        </>
    );
};

export default Header;