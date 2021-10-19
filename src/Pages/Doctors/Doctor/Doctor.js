import React from 'react';
import { useHistory } from 'react-router-dom'
const Doctor = ({ doctor }) => {
    const { name, spc, deg, img } = doctor;
    const history = useHistory()
    const handleAppoinment = () => {
        history.push('/appoinment')
    }
    return (
        <div>
            <div className="col">
                <div className="bg-gray-900  p-2 rounded shadow-lg text-white">
                    <img src={img} className="w-full h-60 rounded" alt="" />
                    <div className="text-left">
                        <h4 className="pt-2 "> Name: {name}</h4>

                        <p>  specialist: {spc}</p>
                        <p>  Qualification: {deg}</p>

                        <button onClick={handleAppoinment} className="service-btn w-full">Make an appoinment <i class="fas fa-arrow-alt-circle-right"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;