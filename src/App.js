import React, { Component } from 'react';

import  WeatherCard  from './Components/Weather/WeatherCard'
import Navbar from './Components/Uxcomponent/Navbar';
import Hero from './Components/Uxcomponent/Hero';

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
    <div className="row mt-3 ">
        
    <div className ="col-4">

    </div>
        <div className ="col-6">
        <div className ="row">
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         <WeatherCard/>
         </div>
        </div>
        
    </div>
     </div>
   
 )
 };
}