import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const ChefsInfo = () => {
    const [chefs, setChefs] = useState([]);
   


    useState(()=>{
      
      fetch('https://assignment-10-server-arpita-malaker.vercel.app/chefsInfo')
      .then(res=>res.json())
      .then(data=>setChefs(data))
    },[])

   

    return (

      
        <div>
            <h1 className='font-bold text-3xl text-orange-500 text-center pt-14 pb-14'> Lets Meet Some Chefs </h1>
            <div  className='grid grid-rows-3 grid-flow-col gap-4 lg:grid-rows-2 md:grid-rows-3 sm:grid-rows-6 ms-10'>
        {
            chefs.map(chef=>(
                <div key={chef.id}
                >
                    
                    <div className="card w-96 bg-gray-50 shadow-xl">
  <figure> <LazyLoadImage
     
     src={chef.picture} 
    className='h-48 w-96'
     effect="blur"
     // effect="opacity-scroll"
     
     // use normal <img> attributes as props
     /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {chef.name}
    
    </h2>
    <p>Years of Experience:{chef.years_of_experience}</p>
    
    <p>Number of Recipe:{chef.num_recipes}</p>
    <div className="card-actions justify-center ">
      <div className="badge badge-outline bg-white text-orange-500 p-5">Rating: {chef.rating}</div>
      <div className="badge badge-outline bg-white text-orange-500 p-5">Likes: {chef.likes}</div>
    </div>
    <div className="card-actions justify-center pt-5">
    <button  className="btn btn-warning"><Link to={`/detailrecipe/${chef.id}`}>Veiw Recipe</Link></button>
    {/* <button  className="btn btn-warning"><Link to='detailrecipe/'>Veiw Recipe</Link></button> */}
    </div>
  </div>
</div>
                
            
                </div>
            ))
        }
          
        </div>
        </div>
    );
};

export default ChefsInfo;