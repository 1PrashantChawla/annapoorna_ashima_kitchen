import React from 'react';
import RecipeItem from './RecipeItem';
import { recipes } from '../JSONRecipeData';


export default function Recipes(){
  

    return(

        <div className="container my-0 mx-auto d-flex flex-wrap">

        <div className="row">
          {/* .map() method is used to iterate over the array and run a particular function for every element of array */}
          {/* jab bhi .map() method use karte hai to hume ek unique key deni padti hai  har ek element ko */}
          {/* is case me hamara news ka url unique hai */}
          {/* !this.state.loading && this.state.articles.map MEANS  {IF LOADING DONT SHOW THE RecipeItems} */}
          {recipes.map((element) => {
            return <div className="col-md-3  " key={element.date}>
              <RecipeItem
                // badgeColor={"warning"}
                title={element.title}
                description={element.description}
                imageUrl={element.imageUrl}
                // fullRecipeUrl={element.url}
                date={element.date}
                 />
            </div>
          })}

        </div>
      </div>
    

    )




}