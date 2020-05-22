import React, { Component } from 'react';

import  WeatherCard  from './Components/Weather/WeatherCard'
import Navbar from './Components/Uxcomponent/Navbar';

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
         <div 
          style={{ height:'340px' ,
          backgroundImage:`url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg")`
          }}  className="row justify-content-center mx-auto" >
    <div class="col-sm-10 my-auto">
        <div className="row justify-content-center">
       <button href="#/" className="btn btn-sm btn-danger"> search </button>
        <input type="text" className="form-control col-5" placeholder="Last name"/>
        
        </div>
    </div>
     </div>

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