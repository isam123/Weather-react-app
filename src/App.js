import React, { Component } from 'react';

import  WeatherCard  from './Components/Weather/WeatherCard'
import Navbar from './Components/Uxcomponent/Navbar';
import Hero from './Components/Uxcomponent/Hero';
import Sidebar from './Components/Uxcomponent/Sidebar';
import Forecast from './Components/Weather/Forecast';

export default class App extends Component {

    
  twoUpdateState = (event) => {

        this.setState({

            title : event.target.value
        });

    }
  changeStateDate = () => {

        this.setState({
            type : this.state.type === "Part-time" ? "Full-Time" :"Part-time"
        })
    } 
     
 render() {
 return (
     <div className="container-fluid"> 
         <Navbar/>
         {/* style={{ backgroundImage: `url(require("images/img.svg"))` }} */}   
         <Hero></Hero>   
         {/* Main Container */}
    <div className="row mt-3 "> 
       
    <div className ="col-sm-3">
         <Sidebar/>
    </div>

    <div className ="col-sm-6">

    <div className ="row">
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
    </div>

    </div>

    <div className="col-sm-3 col-md-3">
        <Forecast></Forecast>
    </div>
        
    </div>
     </div>
   
 )
 };
}