import React, { useEffect, useState } from 'react';
import SocialLoginBtn from './SocialLoginBtn/SocialLoginBtn';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';
// import { redirect } from "react-router-dom";


const Login = () => {
    
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const [errorMessage, setErrorMessage] = useState("");
    console.log(location);
    // const history = useHistory();
    const from =location.state?.from?.pathname||'/'
    let navigate = useNavigate();


    
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (event) => {
      event.preventDefault();
      if ((email, password)) {
        loginUser(email, password)
          .then((result) => {
            console.log(result.user);
            // navigate(`detailrecipe/${id}`);
            // return redirect("detailrecipe/");
            navigate(from)
          })
          .catch((error) => {
            console.log(error.message);
            setErrorMessage("Email address or Password doesn't match")
           
          });
      }
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">See some amazing foods and food recope. Also see the chefs Information.  </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <p className='text-red-600'>{errorMessage}</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button   onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>

        <div><small className='text-info'><Link to="/registernew"> Are you new?Register Here...</Link></small></div>

        <div className=''>
  <SocialLoginBtn></SocialLoginBtn>
            </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;