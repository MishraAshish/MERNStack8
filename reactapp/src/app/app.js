//react - everything is component :
import React, {Component} from "react";
import "./app.css"

import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";
import Loadable  from "react-loadable";//lazy loading of components with bundle splitting

//import Header from "./commoncomponents/headerComponent";
//import DummyComponent from "./commoncomponents/dummyComponent";
//import Footer from "./commoncomponents/footerComponent";
//import Home from "./commoncomponents/homeComponent";
import NotFound from "./commoncomponents/notFfoundComponent";
//import About from "./commoncomponents/aboutComponent";
import HookUsage from "./hooks/HookUsage";
//import User from "./applicationcomponents/Components/User/UserComponent";
//import User from "./applicationcomponents/Container/UserContainer";
import UserComponent from "./applicationcomponents/Components/User/UserComponentHooks";
import ProductComponent from "./applicationcomponents/Components/Product/ProductComponent";
import DisplayProduct from "./applicationcomponents/Components/Product/DisplayProduct";
import Cart from "./applicationcomponents/Components/Cart/CartComponent";
import CheckoutComponent from "./applicationcomponents/Components/Checkout/CheckoutComponent";
import Coupon from "./applicationcomponents/Components/Coupon/CouponComponent";

// functional component, used as placeholder
//when lazy loaded modules delayed
function Loading() {
    return (
        <div>
            Loading Component in Lazy Manner...
        </div>
    )
}

const Home = Loadable({
    loader: () => import("./commoncomponents/homeComponent"),
    loading: Loading,
});

const Header = Loadable({
    loader: () => import("./commoncomponents/headerComponent"),
    loading: Loading,
});

const Footer = Loadable({
    loader: () => import("./commoncomponents/FooterComponent"),
    loading: Loading,
});

const About = Loadable({
    loader: () => import("./commoncomponents/AboutComponent"),
    loading: Loading,
});


export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }

    render(){        
       return( 
           <Router>
            <Header /> 
                <Routes>
                    {/* <Route path="/" element={<HookUsage />} />  */}
                    <Route path="/" element={<Home />} /> 
                    {/* <Route path="/user" element={<User />} />  */}
                    <Route path="/user" element={<UserComponent />} /> 
                    <Route path="/product" element={<ProductComponent />} /> 
                    <Route path="/cart" element={<Cart />} /> 
                    <Route path="/displayProd" element={<DisplayProduct />} /> 
                    <Route path="/home" element={<Home headerName={"Home from App Component"} />} /> 
                    <Route path="/about" element={<About />} />           
                    <Route path="/checkout" element={<CheckoutComponent />} />           
                    <Route path="/coupon" element={<Coupon />} />           
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