import React from 'react';
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SocialLoginBtn from './SocialLoginBtn/SocialLoginBtn';
import { Link, useNavigate } from 'react-router-dom';



const RegisterNew = () => {
  // const {test}= useContext(AuthContext);
  // console.log(test());
  const { registerUser,updateUserProfile } = useContext(AuthContext);
  // const user = auth.currentUser;

  
    let navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [displayName, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [empty, setEmpty]= useState("");
  const [photoURL, setUrl] = useState("");
  
  const handleRegistration = (event) => {
    event.preventDefault();
    if((email=='')&&(password==''))
    {
      setEmpty("Email and Password Should enter");
      return;
    }
    if (!/[0-9a-zA-Z]{6,}/.test(password)) {
      setError("password not valid need minimum 6 char ");
      return;
    }
    
    if ((displayName, email, password,photoURL)) {
      registerUser(email, password)
        .then((result) => {
          navigate('/login')
          updateUserProfile({displayName,photoURL});
         
        })
        .catch((err) => {
          console.log(err.message);
          setMessage("This Email Allready  used ")
        
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='h-96' src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png" alt="" />
          </div>
          <div className="card shadow-2xl bg-base-100 w-9/12">
            <div className="card-body">
              <p className="text-danger">{error}</p>
              <p>{message}</p>
              <p>{empty}</p>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                < input onChange={(e) => setName(e.target.value)}
                  className="displayName input input-bordered"
                  type="text"
                  placeholder="name"
                  required />
              </div>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)}
                  className="email input input-bordered"
                  type="email"
                  placeholder="enter your email" />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input onChange={(e) => setUrl(e.target.value)}
                className="photoURL input input-bordered"
                  type="text"
                  placeholder="enter photo url" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)}
                  className="password input input-bordered"
                  type="password"
                  placeholder="type your password" />

              </div>
              <div className="form-control mt-6">
                <button onClick={handleRegistration} className="btn btn-primary">Register</button>
              </div>

              <p className="p-2">
                <small className="text-info">
                  <Link to='/login'> already have account? login here..</Link>
                </small>
              </p>
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

export default RegisterNew;