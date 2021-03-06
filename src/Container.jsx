import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./index.css"

 export default function Container(props){

    return(
        <>

<div style={{margin:"auto"}}>
    
        <div style={{ cursor:"pointer" ,  height:"30px"}} className="container-fluid align-middle ">
        <Link to="/service"><span  className="align-middle   a1">{props.name}</span></Link>
        </div>



    </div>
    </>
    )

}