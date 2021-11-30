//react - everything is component :
import React, {Component} from "react";

import DummyComponent from "./commoncomponents/dummyComponent";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
        this.userName = "Namrta";
        this.state = {
            time  : (new Date()).toLocaleTimeString()
        }
        this.updateTime()
    }

    updateTime = ()=>{

        setInterval(() => {
            this.setState({
                time  : (new Date()).toLocaleTimeString()
            })
        }, 1000);

    }

   render(){
    
       return( 
           <React.Fragment>
                <h2>{"This is my AppComponent"}</h2>
                <button>{"This is the first button"}</button>
                <br/>
                <b id="username">{this.userName}</b>
                <div>{this.state.time}</div>

                <input type="text" value="my value"></input>

                <DummyComponent headerName={"Dynamic Dummy Component"} time={this.state.time}>
                    <div>{"First Child HTML"}</div>
                    <div>{"Second Child HTML"}</div>    
                </DummyComponent>

           </React.Fragment>           
       )
   } 

}