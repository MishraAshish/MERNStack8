import React from "react";

//functional component using arrow function
let DummyComponent = (props)=>{
    let componentHeader = props.headerName ? props.headerName : "Static Dummy Component";

    return(
        <>
            <h1>{componentHeader}</h1>
            <label>{props.time}</label>
            {props.children[0]}
            {props.children[1]}
        </>
    )

}

export default DummyComponent;