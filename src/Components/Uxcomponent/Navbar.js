import React,{} from 'react'

const Navbar = () =>{
    
        return (
            <div>       
<nav className="navbar navbar-expand-lg navbar-dark unique-color">

  <a className="navbar-brand"  href="#/">Navbar</a>

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

      <li className="nav-item dropdown multi-level-dropdown">
        <a href="/#" id="menu" data-toggle="dropdown" className="nav-link dropdown-toggle w-100">Dropdown</a>
        <ul className="dropdown-menu mt-2 rounded-0 primary-color border-0 z-depth-1">
          <li className="dropdown-item dropdown-submenu p-0">
            <a href="/#" data-toggle="dropdown" className="dropdown-toggle text-white w-100">Click Me Too! </a>
            <ul className="dropdown-menu ml-2 rounded-0 primary-color border-0 z-depth-1">
              <li className="dropdown-item p-0">
                <a href="/#" className="text-white w-100">Hey</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="/#" className="text-white w-100">Hi</a>
              </li>
              <li className="dropdown-item dropdown-submenu p-0">
                <a href="/#" data-toggle="dropdown" className="dropdown-toggle text-white w-100">Hello </a>
                <ul className="dropdown-menu mr-2 rounded-0 primary-color border-0 z-depth-1 r-100 ">
                  <li className="dropdown-item p-0">
                    <a href="/#" className="text-white w-100">Some</a>
                  </li>
                  <li className="dropdown-item p-0">
                    <a href="/#" className="text-white w-100">Text</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="dropdown-item dropdown-submenu">
            <a href="/#" data-toggle="dropdown" className="dropdown-toggle text-white w-100">Click me </a>
            <ul className="dropdown-menu mr-2 rounded-0  primary-color border-0 z-depth-1 r-100 ">
              <li className="dropdown-item p-0">
                <a href="/#" className="text-white w-100">How</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="/#" className="text-white w-100">are</a>
              </li>
              <li className="dropdown-item p-0">
                <a href="/#" className="text-white w-100">you </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <form d="form-inline">
      <div className="md-form my-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </form>
  </div>
</nav>
</div>
)
   }
   export default Navbar