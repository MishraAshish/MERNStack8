//react - everything is component :
import React, {Component} from "react";
import "./app.css"

import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";

import Header from "./commoncomponents/headerComponent";
import DummyComponent from "./commoncomponents/dummyComponent";
import Footer from "./commoncomponents/footerComponent";
import Home from "./commoncomponents/homeComponent";
import NotFound from "./commoncomponents/notFfoundComponent";
import About from "./commoncomponents/aboutComponent";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }

    render(){        
       return( 
           <Router>
            <Header /> 
                <Routes>
                    <Route path="/home" element={<Home />} /> 
                    <Route path="/about" element={<About />} />                    
                    <Route path="/about/:id" element={<About />} />                    
                    
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            <Footer />           
           </Router>
       )
   } 

}




// constructor(props, context){
//     super(props);
//     this.userName = "Namrta";
//     this.state = {
//         time  : (new Date()).toLocaleTimeString()
//     }
//     this.updateTime()
// }

// updateTime = ()=>{

//     setInterval(() => {
//         this.setState({
//             time  : (new Date()).toLocaleTimeString()
//         })
//     }, 3000);

// }

// clickHandler = ()=>{
//     //alert("Button clicked")

//     this.setState({
//         time : "No Time to show"
//     })
// }
// {/* <h2>{"This is my AppComponent"}</h2>
//                 <button onClick={this.clickHandler}>{"This is the first button"}</button>
//                 <br/>
//                 <b id="username">{this.userName}</b>
//                 <div>{this.state.time}</div>

//                 <input type="text" value="my value"></input>

//                 <DummyComponent headerName={"Dynamic Dummy Component"} time={this.state.time}>
//                     <div>{"First Child HTML"}</div>
//                     <div>{"Second Child HTML"}</div>    
//                 </DummyComponent>
//                 { age >= 18 ? "I am a valid voter " : "Invalid voter"  }

//                 <div>
//                 { age * age }
//                 </div>
//                 { age + age }
//                 <br/>
//                 { age - age }
//                 <hr/>
//                 { age / age }
//                 <h1>
//                 { 2000 / 10 }</h1> */}