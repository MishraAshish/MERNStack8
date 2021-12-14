import React from "react";
import {NavLink} from "react-router-dom";
import { connect } from "react-redux"

let Header = (props)=>{
    let userName = props.userName ? props.userName : "Default User Name"
    return(
        <>
             Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
                {userName == "" ?<b> Please Login to see other features</b>:""}
            <hr/>
            <NavLink to="/home" className="button" >Home </NavLink> 
            <NavLink to="/user" className="button" >User </NavLink> 
            <NavLink to="/product" className="button" >Product </NavLink> 
            <NavLink to="/about" className="button" >About </NavLink> 
        </>
    )
}

let mapStateToProps = (state)=>{
    return {
        userName : state.userReducer.user.userName
    }
}

//export default Header;
export default connect(mapStateToProps, null)(Header);

// when user is logged in
// Hi userName, Welcome to SynergisticIT Shopping Cart

// when user is not logged in
// Hi There! Please Login to see other features
