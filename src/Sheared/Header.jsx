import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
  const { user, logOut,updateUserProfile } = useContext(AuthContext);
  // console.log(user?.email);

  const handleLogout = () => {
    logOut().then()
      .catch((err) => {
        console.log(err);
      })
  }

  
  return (
    <div>
      <div className="navbar  bg-gray-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='text-orange-400 text-xl'><Link to='/'>Home</Link></li>

              <li className='text-orange-400'><Link to='/blog'>Blogs</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-bold text-orange-400 ">Amazing Mealz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='text-orange-500 text-xl font-bold'><NavLink to='/' > Home</NavLink></li>

            <li className='text-orange-500 text-xl font-bold'><NavLink to='/blog'> Blogs</NavLink></li>
            <li className='text-orange-500 text-xl font-bold'><NavLink to='/aboutus'> About Us</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (<div className='flex gap-3'>
            <img className='rounded w-10 h-10' src={user.photoURL} alt="" />
            <button className="btn btn-warning" onClick={handleLogout}>LogOut</button>
          </div>) : (<button className="btn btn-warning"><Link to='/login'>Login Here</Link></button>)
          }

        </div>
      </div>
    </div>
  );
};

export default Header;