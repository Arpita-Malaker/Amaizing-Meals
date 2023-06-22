import React from 'react';
import pic1 from '../assets/istockphoto-1363063865-640_adpp_is.mp4'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <div className="card lg:card-side ms-14 pb-14 pt-14 shadow-xl">
  <figure className="w-full"><video className='pt-4' width="750" height="500" controls >
      <source src={pic1} type="video/mp4"/>
     </video></figure>
  <div className="card-body w-full">
    <h2 className="card-title">Know About Us!!!</h2>
    <p>Do you know your onions, or specifically how to write about them in a recipe?

More and more people are writing about food for the web through blogs and on platforms like Instagram, and following a few rules will make you sound like you know what you're talking about (and help your reader avoid a kitchen disaster too!)

We've got some tasty tips about structure, measurements and units, writing authentically, and making sure your recipes are found through good SEO.
<span className='text-blue-600 font-bold'> So lets meets some chefs and their recipes!!! Tab to the HomePage</span>
</p>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary"><Link to='/'>Home Page</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;