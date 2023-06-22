import React from 'react';
import mint from '../assets/istockphoto-1363063865-640_adpp_is.mp4'
import pic1 from '../assets/images (5).jpg'
import pic2 from '../assets/images (6).jpg'
import pic3 from '../assets/download.jpg'

const SummerSpecial = () => {
    return (
        <div className='pb-10'>
<h1 className='font-bold text-3xl text-orange-500 text-center pt-14 '> Summer Special</h1>
<p className='text-center text-xl text-orange-800 pb-14'>Lets enjoy cook the food see the Masters Chefs Recipe and Enjoy...</p>
          
  <div className=" grid grid-flow-col ms-12 gap-3">
  <video className='pt-4' width="750" height="500" controls >
      <source src={mint} type="video/mp4"/>
     </video>
  <div >
    <div className='flex pt-4'>
        <img className='h-36 w-48' src={pic1} alt="" />
        <p className='pr-2.5 ps-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias nisi molestiae officia error aliquid tenetur asperiores dolore facilis nulla.
         <br />
         Ratings:
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>
    </div>

    <div className='flex pt-5'>
        <img className='h-36 w-48' src={pic2} alt="" />
        <p className='pr-2.5 ps-2.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias nisi molestiae officia error aliquid tenetur asperiores dolore facilis nulla.
         <br />
         Ratings:
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div></p>
    </div>

   




  </div>
  </div>

        </div>
    );
};

export default SummerSpecial;