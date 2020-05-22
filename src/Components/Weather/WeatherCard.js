import React from 'react'
const WeatherCard = () => {
    return ( 
        <div className ="col-md-3 col-sm-5 align-self-center">
        <div className="card near-moon-gradient white-text mx-auto">
            <div className =" pt-2 text-center">
            <p>London</p>
            </div>
            <div className ="card-body text-center">     
            <p>23'C</p>
            <img className="" alt="icon"></img>
        </div>
            <div className ="card-footer">
            <a href="/#" className ="btn btn-sm unique-color text-center">refresh</a>
        </div>
        </div>
        </div>
    
     );
}
 
export default WeatherCard;