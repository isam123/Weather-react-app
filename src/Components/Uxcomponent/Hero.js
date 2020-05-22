import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
