import React, { useContext } from "react";
import "./SocialLoginBtn.css";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLoginBtn = () => {

  const location = useLocation();
  console.log(location);
  let navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const { githubLogin } = useContext(AuthContext);
  const { googleLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from)
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          onClick={handleGithubLogin}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;