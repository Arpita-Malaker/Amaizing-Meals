import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ColorRing } from 'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user,loading } = useContext(AuthContext);
 
  console.log(location);

  if(loading){
    return <div> 

    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
 
  }
  return (
    user ? <div>{ children }</div> : <Navigate to={ '/login' } state={ { from: location } } replace />
);
};

export default PrivateRoute;
