import React, { Component } from 'react';
import logo from "./images/librehealth.png"
import {Link} from "react-router-dom"

export default function Navbar(){
    return (

        <>
       
        <nav className="navbar navbar-expand-lg navbar-light bg-white" >
        <img width="200" height="50"  src={logo}/>
        <span style={{color:"#f68d10"}} className="ml-5">
FHIR Web Components Catalog</span>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " to="/service">Link</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " to="">About</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link " to="">Contribute</Link>
      </li>
    

    
      
    </ul>
{/*     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>

</nav>
</>
    )

}


