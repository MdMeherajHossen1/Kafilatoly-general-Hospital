import React from 'react';

const Footer = () => {
    return (
        <>
            <div className=" bg-gray-900 grid grid-cols-1 md:grid-cols-3 gap-4 py-8 px-12 text-white">
                <div className="col">
                    <h3 className="bg-blue-700 rounded-md p-1  hover:bg-gray-900">KAFILATOLY GENERAL HOSPITAL</h3>
                    <img src={'https://i.ibb.co/f2kvLcw/preview.png'} className="w-40 m-auto " alt="" />
                    <p>Bring a new standard in Private HealthCare in Lakshmipur District. Worldclass healthcare where you live</p>
                </div>
                <div className="col">
                    <h3 className="bg-blue-700 p-2 rounded-lg hover:bg-gray-900"><i className="fab fa-servicestack"></i> OUR SERVICES</h3>
                    <p className="bg-red-600 rounded-md p-1  hover:bg-gray-900"><i className="fas fa-stethoscope mr-2"></i> DIGITAL X RAY</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"><i className="fas fa-stethoscope mr-2"></i> MRI AND CT</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"><i className="fas fa-stethoscope mr-2"></i> ECG (ELECTROENGCEPHALOGRAPHY)</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"><i className="fas fa-stethoscope mr-2"></i> MANOGRAPHY</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"> <i className="fas fa-stethoscope mr-2"></i>BONE DENSITOMETRY</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"> <i className="fas fa-stethoscope mr-2"></i>4D ULTRASOUND</p>
                    <p className="bg-red-600 rounded-md p-1 hover:bg-gray-900"> <i className="fas fa-stethoscope mr-2"></i>PATHOLOGY LABORATORY</p>

                </div>
                <div className="col text-left">
                    <h3 className="bg-blue-700 text-center p-2 rounded-lg hover:bg-gray-900"><i className="far fa-address-card"></i> CONTACT US</h3>
                    <p>Lakshmipur-Ramgong Street, Kafilatoly-3100 . Sarder Bari, Kafilatoly, Lakshmipur.</p>
                    <p className="m-0"><i className="fas fa-phone-square-alt text-3xl text-red-600 "></i> Phone : +880 17616263932 (24 hours)</p>
                    <p><i className="far fa-clock text-3xl text-red-600 "></i> Monday - Sunday. We are open 7/24</p>
                    <div>
                        <h6 className="bg-blue-700 text-center p-1 rounded-lg hover:bg-gray-900">MORE CONTACT</h6>
                        <div className="flex mt-4 justify-center">
                            <p><i class="fab fa-facebook text-4xl mr-7 "></i></p>
                            <p><i class="fab fa-twitter text-4xl mr-7"></i></p>
                            <p><i class="fab fa-whatsapp text-4xl mr-7"></i></p>
                            <p><i class="fab fa-youtube text-4xl mr-7"></i></p>
                            <p><i class="fab fa-instagram text-4xl mr-7"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 text-white p-2">
                <p> <small>ALL RIGHTS RESERVE &copy; KAFILATOLY GENERAL HOSPITAL| MADE WITH <i class="fas fa-heart text-red-600"></i> BY MEHERAJ MUHUMMAD</small></p>
            </div>
        </>
    );
};

export default Footer;