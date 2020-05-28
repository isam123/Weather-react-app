import React from 'react'
const WeatherCard = (props) => {
   
    const weather=props.weather;
    console.log(weather);
    return ( 
        <div className ="col-md-3 col-sm-3 mb-3 align-self-center">
        <div className="card near-moon-gradient white-text mx-auto">

        <div className =" pt-2 text-center border-bottom h-25">
    <p>{weather.name}</p>
    <p className="small">{weather.sys.country}</p>
        </div>
            
        <div className ="card-body text-center">     
    <p>{weather.main.temp}</p>
            <img src="https://img.icons8.com/ios/80/000000/cloud.png" alt="icon"/>
        </div>
            
            {/* <a href="/#" className ="btn btn-sm unique-color text-center">Refresh</a> */}
        
        </div>
        </div>
    
     );
}
 
export default WeatherCard;