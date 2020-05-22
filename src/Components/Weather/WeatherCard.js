import React from 'react'
const WeatherCard = () => {
    return ( 
        <div className ="col-md-3 col-sm-3 mb-3 align-self-center">
        <div className="card near-moon-gradient white-text mx-auto">
            <div className =" pt-2 text-center border-bottom ">
            <p>London</p>
            </div>
            <div className ="card-body text-center">     
            <p>23'C</p>
            <img src="https://img.icons8.com/ios/80/000000/cloud.png" alt="icon"/>
        </div>
            
            <a href="/#" className ="btn btn-sm unique-color text-center">refresh</a>
        
        </div>
        </div>
    
     );
}
 
export default WeatherCard;