import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useServices from '../../hooks/useServices'
const Appionment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };

    const { services, doctors } = useServices()

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">

            <div className="col">
                <div className=" my-10 border-solid rounded shadow-lg p-4">
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <h5>Give your Imformation for Appoinment</h5>
                        <input defaultValue={user.displayName} {...register("name")} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " />

                        <input defaultValue={user.email} {...register("email", { required: true })} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " />
                        {errors.email && <span className="error">This field is required</span>}
                        <input placeholder="Address" defaultValue="" {...register("address")} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " />
                        <input placeholder="City" defaultValue="" {...register("city")} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " />
                        <input placeholder="phone number" defaultValue="" {...register("phone")} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " />

                        <input type="submit" className="login-btn w-full mt-3 mb-1" />
                    </form>
                </div>
            </div>

            <div className="col mt-3">
                <h4>Choose your Departments</h4>
                {
                    services?.map(sr => <div className="shadow-lg mb-2 rounded align-center hover:text-white hover:bg-blue-900 p-2 flex justify-between">

                        <h5 className="text-center"> {sr.name}</h5>
                        <img src={sr.img} className="w-24  rounded-xl" alt="" />

                    </div>)
                }
            </div>

            <div className="col mt-3">
                <h4>Choose Your Doctor</h4>
                {
                    doctors?.map(sr => <div className="shadow-lg mb-2 rounded align-center hover:text-white hover:bg-blue-900 p-2 flex justify-between">

                        <h5 className="text-center"> {sr.name}</h5>
                        <img src={sr.img} className="w-24 h-16 rounded-xl" alt="" />

                    </div>)
                }
            </div>
        </div>
    );
};

export default Appionment;