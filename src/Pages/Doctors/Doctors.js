import React from 'react';
import useServices from '../../hooks/useServices';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const { doctors } = useServices()
    return (
        <div className="px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}

                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;