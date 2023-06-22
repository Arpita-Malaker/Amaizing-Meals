import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut, signInWithEmailAndPassword,signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true);

    const githubLogin=(githubProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }
    const googleLogin=(googleProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
   
    const registerUser=(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
       
          setUser(loggedInUser);
          setLoading(false);
        });
        return () => {
           return unSubscribe();
          };
        }, []);

       const updateUserProfile = profile =>{
        // console.log("hdhdkj",profile)

         return  updateProfile(auth.currentUser,profile);
        
       };

      
   
    const authInfo ={registerUser,loginUser,user,logOut,githubLogin,googleLogin, loading,updateUserProfile};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;