import React from 'react';
import './Details.css'
import { useParams } from 'react-router-dom'
import useServices from '../../hooks/useServices'

const Details = () => {
    const { id } = useParams()
    const { services } = useServices()
    console.log(services)
    const seletedService = services?.filter(service => service.id === id)

    return (
        <div className=" details-bg py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 ">
                <div className="col p-4 bg-details">
                    <h1>{seletedService[0]?.name}</h1>
                    <p className="text-justify ">Description: {seletedService[0]?.desc?.slice(0, 500)}</p>
                </div>
                <div className="col pt-2">
                    <img src={seletedService[0]?.img} className="" alt="" />
                </div>
                <div className="col ">
                    <button className="service-btn">Make an Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Details;