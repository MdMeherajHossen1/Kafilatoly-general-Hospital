import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-bg flex justify-center align-center sm:mt-32">
            <div className="md:w-3/4 sm:px-2 h-50 p-2  rounded text-white mt-4 ">
                <h3 > Welcome to <span className="text-yellow-400 border-b-2 border-red-600">KAFILATOLY GENERAL HOSPITAL</span></h3>
                <h4 className="lg:text-6xl sm:text-3xl">Improving the lives of our patients and their Famillies</h4>
                <p>Professional care for your health</p>
                <button className="primary-btn mr-2">Get in Tuch</button>
                <button className="secondary-btn">Our Services</button>
            </div>
        </div>
    );
};

export default Banner;