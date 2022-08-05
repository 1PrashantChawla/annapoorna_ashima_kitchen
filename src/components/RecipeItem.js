import React from 'react';
export default function RecipeItem(props){


return(
    // {title,description,imageUrl,newsUrl,author,date,newsChannel,badgeColor}=this.props;

    <div >
    <div className="card my-2  "  >
    {/* <span class={`position-absolute top-0  translate-middle badge rounded-pill bg-${badgeColor}`} style={{left:"85%",zIndex:1}} >{newsChannel}</span> */}
      {/* if image url is not found we will add a custom image url to view the image as done below using ternary operator */}

      <img src={props.imageUrl?props.imageUrl:"https://c.ndtvimg.com/2022-06/dp1ahkko_us-abortion_625x300_25_June_22.jpg"} className="card-img-top" alt="Image"/>
        <div className="card-body">
          <h5 className="card-title ">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p class="card-text"><small class="text-muted fst-italic fs-6">Published by <strong>Annapoorna|Ashima Kitchen</strong> on {props.date}</small></p>
          <a href={props.fullRecipeUrl} rel="noreferrer" target="_blank" className="btn btn-sm  btn-outline-dark ">View More </a>
        </div>
    </div>
  </div>
)




} 