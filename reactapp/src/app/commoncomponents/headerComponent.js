import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props)=>{
    return(
        <>
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
        </>
    )
}

export default Header;