import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
const Login = () => {
    const { handleGoogleSignIn, error,
        handleEmailChange, handlePasswordChange, handleUserLogin,
    } = useAuth()
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10">
            <div className="col">
                <div className=" w-3/4 mx-auto mt-10 border-solid rounded shadow-lg p-4">
                    <p>{error}</p>
                    <h3 className="text-purple-600">Welcome Back</h3>
                    <input
                        onChange={handleEmailChange} className=" block my-3 border-b-2 outline-none w-full py-2 border-indigo-600 " type="email" placeholder=" Type Your Email" />

                    <input
                        onChange={handlePasswordChange} className=" block border-b-2 outline-none w-full py-2  border-indigo-600  " type="password" placeholder="Type your Password" />


                    <button onClick={handleUserLogin} className="login-btn w-full mt-3 mb-1" > <i class="fas fa-sign-in-alt"></i> Log In</button>



                    <p>New user ?</p>
                    <Link to="/register"><button className="register-btn w-full my-1" > <i class="far fa-registered"></i> Create Your Account </button></Link>

                </div>
                <div className="text-purple-900">-----------Or----------</div>
                <button className="service-btn" onClick={signInGoogle}> <i class="fab fa-google text-red-700"></i> SignIn with Google</button>
            </div>
            <div className="col">
                <img src={'https://i.ibb.co/PzwQNj8/4673526.jpg'} alt="" />
            </div>
        </div>
    );
};

export default Login;