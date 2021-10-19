import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase'

const Register = () => {
    const { error, handleGoogleSignIn,
        handleEmailChange, handlePasswordChange,
        handleUserRegister } = useFirebase()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home';
    const signInGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
                <div className="col">
                    <div className=" w-3/4 mx-auto mt-10 border-solid rounded shadow-lg p-4">

                        <p>{error}</p>

                        <h3 className="text-purple-600">Create Your Account </h3>

                        <input
                            onChange={handleEmailChange} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " type="email" placeholder=" Type Your Email" />

                        <input
                            onChange={handlePasswordChange} className=" block border-b-2 outline-none w-full py-2  border-indigo-600  " type="password" placeholder="Type your Password" />


                        <button onClick={handleUserRegister} className="login-btn w-full mt-3 mb-1" >Register</button>


                        <p>Already Registered ?</p>
                        <Link to="/login"><button className="register-btn w-full my-1" > Go the the Login  </button></Link>

                    </div>
                    <div className="text-purple-900">-----------Or----------</div>
                    <button className="service-btn" onClick={signInGoogle}>SignIn with Google</button>
                </div>
                <div className="col">
                    <img src={'https://i.ibb.co/PzwQNj8/4673526.jpg'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;