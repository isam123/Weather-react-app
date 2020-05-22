import  React ,{Component}  from "react";

export class navbar extends Component {

    constructor(props) {
        super(props)

    }

render = () =>

 <h4 className="bg-success text-white text-center p-3">
     Jobs  <span className ="ml-5 text-small">(total {this.props.jobs.length})</span>  
 </h4>

}