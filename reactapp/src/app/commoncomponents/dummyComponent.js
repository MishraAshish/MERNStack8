import React from "react";
import Footer from "./footerComponent"

//functional component using arrow function
let DummyComponent = (props)=>{
    let componentHeader = props.headerName ? props.headerName : "Static Dummy Component";
    
    //props.headerName = "xyz"; //props are immutable and cant be updated in child

    return(
        <>
            {/* <Footer/> */}
            <h1>Dummy Component</h1>
            <h2>{componentHeader}</h2>
            {/* <label>{props.time}</label>
            {props.children[0]}
            {props.children[1]} */}
            
        </>
    )

}

export default DummyComponent;