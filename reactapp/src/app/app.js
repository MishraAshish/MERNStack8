//react - everything is component :
import React, {Component} from "react";

export default class AppComponent extends Component {
    constructor(props, context){
        super(props);
    }

   render(){
       return( 
           <React.Fragment>
                <h2>{"This is my AppComponent"}</h2>
                <button>{"This is the first button"}</button>
           </React.Fragment>           
       )
   } 

}