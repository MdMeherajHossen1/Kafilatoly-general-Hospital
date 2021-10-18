import React from 'react';

const Service = ({ service, handleDetails }) => {
    const { name, id, desc, img } = service;
    console.log(service)
    return (
        <div>
            <div className="col">
                <div className="bg-green-900  p-2 rounded shadow-lg text-white">
                    <img src={img} className="w-full h-52 rounded" alt="" />
                    <div>
                        <h4 className="pt-2 text-pink-700"> {name}</h4>
                        <p className="text-left ">Description: {desc.slice(0, 260).toLowerCase()}</p>
                        <button onClick={() => handleDetails(id)} className="service-btn w-full">DETAILS</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;