import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (

        <>
            <nav className="bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center">
                            <div className="flex items-center justify-between ">
                                <img className="h-8 w-8 rounded-full" src="https://i.ibb.co/f2kvLcw/preview.png" alt="Workflow" />
                                <h5 className="text-white ml-2">Kafilatoly General Hospital</h5>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-40 flex items-baseline space-x-4">

                                    <NavLink to="/home" className="bg-gray-900 hover:bg-gray-700  text-white px-3 py-2 rounded-md text-sm font-medium no-underline" aria-current="page">Home</NavLink>

                                    <NavLink to="/services" className="text-gray-300   hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Service</NavLink>

                                    <NavLink to="/payment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Payment</NavLink>

                                    <NavLink to="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Details</NavLink>

                                    <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Login</NavLink>

                                    <NavLink to="/resister" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Register</NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </nav>

            <nav>
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-900">

                        <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline" aria-current="page">Home</NavLink>

                        <NavLink to="service" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Service</NavLink>

                        <NavLink to="/payment" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Payment</NavLink>

                        <NavLink to="details" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Details</NavLink>

                        <NavLink to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Login</NavLink>

                        <NavLink to="/resister" className="text-gray-300 hover:bg-gray-700 hover:text-white px-1 py-2 rounded-md text-sm font-medium no-underline">Register</NavLink>
                    </div>

                </div>

            </nav >




        </>
    );
};

export default Header;