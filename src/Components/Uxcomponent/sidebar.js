import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className= "row border mx-auto">
                <div className="col-md-12 unique-color white-text text-center pt-2">
                  <h4 className="">Browse by Country</h4>
                </div>
                <div className="mx-auto">
             <select className="mdb-select md-form colorful-select dropdown-default">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
  <option value="5">Option 5</option>
</select>
<label className="mdb-main-label">Blue select</label>
                </div>
                
            </div>
        )
    }
}

