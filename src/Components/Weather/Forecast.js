import React, { Component } from 'react'

export default class Forecast extends Component {
    render() {
        return (
            <div className="row ml-2">
                <h5 className="text-center unique-color text-white py-2 w-75">Todays' forecast</h5>
                <div className="w-75">
                <table className="table table-sm table-border">
                    <thead>
                    <tr>
                        <th>City</th>
                        <th>High</th>
                    </tr>
                    </thead> 
                    <tbody>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                       <tr><td>London</td>
                       <td>43'C</td></tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
