import React from 'react';
import banpic from '../assets/images (1).jpg'
import banpic1 from '../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
import banpic2 from '../assets/images (2).jpg'
import banpic3 from '../assets/images (3).jpg'
import ChefsInfo from './ChefsInfo';
import { Link } from 'react-router-dom';
import SeeSomeFood from './SeeSomeFood';
import SummerSpecial from './SummerSpecial';


const Home = () => {
    return (
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

  <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body flex-col">
       <img src={banpic2} alt="" />
       <img src={banpic} alt="" />
      </div>
      
    </div>

    <div className="text-center">
      <h1 className="text-5xl font-bold text-orange-500">Bon Appétit!</h1>
      
      <p className="py-6">See some Amaging recipe here Also check out chefs BackGround and see some<span> Secrect recipe</span>.</p>
      <button className="btn btn-warning">Explore Chefs</button>
     
      
    </div>
    

    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body flex-col">
       <img src={banpic3} alt="" />
       <img src={banpic1} alt="" />
      </div>
      
    </div>
  </div>
</div>

<div><ChefsInfo></ChefsInfo></div>

<div>
    <SeeSomeFood></SeeSomeFood>
</div>

<SummerSpecial></SummerSpecial>

        </div>
    );
};

export default Home;