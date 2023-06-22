import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import banpic1 from '../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
import banpic2 from '../assets/images (2).jpg'
import banpic3 from '../assets/images (3).jpg'
// import { ColorRing } from 'react-loader-spinner'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import  { AuthContext } from '../Provider/AuthProvider';




const DetailRecipe = () => {
 

  const featuredata = useLoaderData();
  // const {loading} =useContext(AuthContext);
  // if(loading){
  //   return <div> <ColorRing
  //   visible={true}
  //   height="80"
  //   width="80"
  //   ariaLabel="blocks-loading"
  //   wrapperStyle={{}}
  //   wrapperClass="blocks-wrapper"
  //   colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  // />
  // </div>
  // }
  // console.log(featuredata)

  const { id } = useParams();
  console.log("param id", id);

  const [recipe, setrecipe] = useState({});
  const [message, setMessage] = useState(true);
  const [message2, setMessage2] = useState(true);
  const [message3, setMessage3] = useState(true);


  useEffect(() => {

    const recipeData = featuredata.find(feature => feature.id == id);
    setrecipe(recipeData);


  }, [])


  const favbtn = () => {
    toast.success(' The recipe is your favorite .YAYYY Lets cook it');
    setMessage(false);

  }
  const favbtn2 = () => {
    toast.success(' The recipe is your favorite .YAYYY Lets cook it');
    setMessage2(false);

  }
  const favbtn3 = () => {
    toast.success(' The recipe is your favorite .YAYYY Lets cook it');
    setMessage3(false);

  }


  return (
    <div >
      <ToastContainer />
      <h1 className='font-bold text-3xl text-orange-500 text-center pt-14 pb-14'> Lets see some Chefs Recipies </h1>


      <div className="card lg:card-side bg-base-100 shadow-xl mx-11 pb-14">
        <figure className='w-9/12'> <LazyLoadImage src={recipe.picture} /></figure>
        <div className="card-body">

          <p> London-based chef <span className='text-orange-600'>{recipe.name}</span> has been honing his skills in Spanish cuisine since his early days in Barcelona. With a passion for creating traditional flavours with a modern twist, he has established himself as an acclaimed chef in the city..</p>
          <p><span className='text-orange-600'>Number of Recipe:</span> {recipe.num_recipes}</p>
          <p><span className='text-orange-600'>Experience:</span> {recipe.years_of_experience} Years.</p>
          <p><span className='text-orange-600'>Number of Likes:</span> {recipe.likes}K</p>

        </div>
      </div>

      <div className='recipeCard grid grid-flow-col  pt-14 ms-10 pb-16'>


        <div>
          <div className="card w-96  bg-base-100 shadow-xl image-full">
            <figure><img src={banpic1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.recipe1Name}</h2>
              <p><span className='font-bold text-2xl'>Ingridentents: </span>{recipe.ingredients1}</p>
              <p><span className='font-bold text-2xl'>Instructions:</span>{recipe.instructions1}</p>
              <div className="card-actions justify-end">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  {message ? <button className="btn btn-warning" onClick={favbtn} >Favourite</button> : <span className='text-orange-600'>Save as favorite</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96  bg-base-100 shadow-xl image-full">
            <figure><img src={banpic2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.recipe2Name}</h2>
              <p><span className='font-bold text-2xl'>Ingridentents: </span>{recipe.ingredients2}</p>
              <p><span className='font-bold text-2xl'>Instructions:</span>{recipe.instructions2}</p>
              <div className="card-actions justify-end">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  {message2 ? <button className="btn btn-warning" onClick={favbtn2} >Favourite</button> : <span className='text-orange-600'>Save as favorite</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96  bg-base-100 shadow-xl image-full">
            <figure><img src={banpic3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.recipe3Name}</h2>
              <p><span className='font-bold text-2xl'>Ingridentents: </span>{recipe.ingredients3}</p>
              <p><span className='font-bold text-2xl'>Instructions:</span>{recipe.instructions3}</p>
              <div className="card-actions justify-end">
                <div className="rating">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <div className="card-actions justify-end">
                  {message3 ? <button className="btn btn-warning" onClick={favbtn3} >Favourite</button> : <span className='text-orange-600'>Save as favorite</span>}
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>


    </div>
  );
};

export default DetailRecipe;