import React from 'react';
import useServices from '../../../hooks/useServices'
import Service from '../Service/Service';
const Services = () => {
    const { services, handleDetails } = useServices();
    return (
        <div className="px-8 py-6 bg-body">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                        handleDetails={handleDetails}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;