import React from 'react';
import banpic from '../assets/images (1).jpg'
import banpic1 from '../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
import banpic2 from '../assets/images (2).jpg'
import banpic3 from '../assets/images (3).jpg'

const SeeSomeFood = () => {
    return (
        <div>


<h1 className='font-bold text-3xl text-orange-500 text-center pt-14 '> See Some Foods</h1>
<p className='text-center text-xl text-orange-800 pb-14'>Lets enjoy cook the food see the Masters Chefs Recipe and Enjoy...</p>
            <div className="carousel rounded-box h-48 mx-8">
  <div className="carousel-item">
    <img src={banpic} alt="Burger" />
   
  </div> 
  <div className="carousel-item">
    <img src={banpic1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={banpic2} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={banpic3} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={banpic1} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={banpic3} alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src={banpic1} alt="Burger" />
  </div> 
</div>
        </div>
    );
};

export default SeeSomeFood;