import React,{} from 'react'

const Navbar = () =>{
    
        return (
            <div>       
<nav className="navbar navbar-expand-lg navbar-dark unique-color">

  <a className="navbar-brand"  href="#/">Weather-app</a>

  <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="basicExampleNav">
  
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">Pricing</a>
      </li>


    </ul>

  </div>
</nav>
</div>
)
   }
   export default Navbar