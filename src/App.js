import React, { Component } from 'react';
import axios from 'axios';
import  WeatherCard  from './Components/Weather/WeatherCard'
import Navbar from './Components/Uxcomponent/Navbar';
import Hero from './Components/Uxcomponent/Hero';
import Sidebar from './Components/Uxcomponent/Sidebar';
import Forecast from './Components/Weather/Forecast';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state={
                isloading:false,
                weather:[{}]
                       
        }
    }
       componentWillMount() {
           const cities = "4855958,4855967,5791805,5792244,6254928,4893037,6183235";
         axios({
            method:'get',
            url :'http://api.openweathermap.org/data/2.5/group?id='+ cities+'&units=metric&appid=d59d105e1298917cc782f91602152ae1',
         
        })
         .then(res=>{

               setTimeout( ()=>{ 
                   this.setState({weather:res.data.list,isloading:true})
                });
               
                // console.log(this.state.weather.main.temp);
               
         });
 
 
    
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
        
        {
            this.state.weather.map((list,index) =>{
                return (
                    this.state.isloading ===true? <WeatherCard key={index} weather={list}/>:<i className="fa fa-spinner" >loading</i>
                )
            })
        }
         
        
    </div>

    </div> {/* End of Wherther container*/}

    <div className="col-sm-3 col-md-3">
        <Forecast></Forecast>
 </div> {/* End of fore cast*/}
        
    </div> {/* End of main row */}

    <div className="row borrder h-100"></div>
     </div> 
   
 )
 };
}