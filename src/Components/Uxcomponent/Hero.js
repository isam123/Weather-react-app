import React, { Component } from 'react'

export default class git extends Component {
    render() {
        return (
            <div> 
                <div 
          style={{ height:"280px" ,
          backgroundImage: "url( https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=589&q=80 )",
          
          }}  className=" row justify-content-center w-100 mx-auto" >
             {/* <div className="d-inline" style={{backgroundColor:" rgba(0, 0, 0, 0.5)",
             width: "100%",height:"inherit",
  transition: ".5s ease",
  opacity:0.4}}>
 
  </div> */}
  <span className=" text-warning black text-sm"><i className="fa fa-warning"></i>Alert lorem ispncdjsa vdjalszkAlert lorem ispncdjsa vdjalszk</span>
<div className=" text-center w-75 ">

            <h3 className="text-white">Get the Latest Weather Forecast</h3>
       <button href="#/" className="btn btn-default btn-md unique-color "> search </button>
        <input type="text" className="form-control w-50  mt-2 d-inline" placeholder="Search City"/>
        
        
    </div>
        
     </div>
            </div>
        )
    }
}
