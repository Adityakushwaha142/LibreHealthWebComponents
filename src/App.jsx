import React from "react" ; 
import  Navbar   from "./Navbar"
import About from "./About"
import Services from "./Services"
import NoFound from "./NoFound"
import "./index.css"
import Card from "./Card"
import { Redirect, Route, Switch} from "react-router-dom"
export default function App(){
    return (
       
        <>
        
<Switch>
    <Route exact  path="/" component={About}></Route>
    <Route exact  path="/service" component={Services}></Route>
    <Redirect to="/not-found" component={NoFound}></Redirect>
</Switch>



        </>
    )
}