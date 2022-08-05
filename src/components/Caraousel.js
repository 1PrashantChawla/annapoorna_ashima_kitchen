import React from 'react';


export default function Caraousel(props){

  
return (


  
 // <!-- CARAOUSEL  -->
  <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
         {/* // <!-- ACTIVE CARAOUSEL 0 --> */}
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
         {/* // <!-- ACTIVE CARAOUSEL SLIDE --> */}
          <div className="carousel-item active">
              <img src="https://source.unsplash.com/1400x400/?kitchen" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>Welcome to Annapoorna | Ashima Kitchen</h2>
                  <p>New Recipes every week.</p>
                  <button className="btn btn-danger ">Deserts</button>
                  <button className="btn btn-warning ">Drinks</button>
                  <button className="btn btn-success ">South Indian</button>
              </div>
          </div>
          <div className="carousel-item">
              <img src="https://source.unsplash.com/1400x400/?food" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>Follow Our Facebook Page</h2>
                  <p>Connect with us on instagram</p>
                  <button className="btn btn-danger ">Deserts</button>
                  <button className="btn btn-warning ">Drinks</button>
                  <button className="btn btn-success ">South Indian</button>
              </div>
          </div>
          <div className="carousel-item">
              <img src="https://source.unsplash.com/1400x400/?eat" className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>Award Winning Blog</h2>
                  <p>Technology News,Development and Trends</p>
                 {/* // <!-- buttons cofull  --> */}
                 <button className="btn btn-danger ">Deserts</button>
                  <button className="btn btn-warning ">Drinks</button>
                  <button className="btn btn-success ">South Indian</button>
              </div>
          </div>

      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"  >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
      </button>
  </div>
    
);







}