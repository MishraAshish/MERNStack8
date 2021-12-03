import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import DummyComponent from "./dummyComponent";

export default class Home extends PureComponent{ //has implementation of shuoldComponentUpdate and does comparison of each
//export default class Home extends React.Component{

    constructor(props, context){
        super(props);
        this.state = {
            headerNameForChild : "Header Name From Home Component",
            textBoxValue : "This is a text box",
            name : "default Name"
        }

        //ref - keyword uses
        this.inputAddress = React.createRef(); //as we dont have any html selectors available in react so this provides a reference to html
        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        
        this.inputAge = React.createRef();
    }

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount")
        //view is accessible
        setTimeout(() => {
            this.inputAddress.current.focus();
            this.inputAddress.current.value = "Added Value";   
            
        }, 3000);
    }

    //destruction life cycle methods
    componentWillUnmount(){
        console.log("componentWillUnmount");
        //previous component needs to clear all subscriptions and any pending calls while navigating to other component
    }

    //update lifecycle method
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextState, nextProps) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextProps.name == this.state.name) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }

    // getSnapshotBeforeUpdate(prevState, prevProps){
    //     console.log("getSnapshotBeforeUpdate");
    //     console.log("prevState", prevState);
    //     console.log("prevProps", prevProps);
    //     return {
    //         prevState,
    //         prevProps
    //     }
    // }

    // componentDidUpdate(prevState, prevProps){
    //     console.log("componentDidUpdate");
    //     console.log("prevState",prevState);
    //     console.log("prevProps", prevProps);
    // }


    changeEventHandler = (evt)=>{
        const target = evt.target;
        console.log('target value', target.value)
        //this.state.textBoxValue = target.value;        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState({
            textBoxValue : target.value
        })
        console.log('state value'+ this.state.textBoxValue);

        evt.preventDefault();
    }

    changeNameOnType = (evt)=>{
        const target = evt.target;
        //this.state.textBoxValue = target.value;        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly

        //set state api - is tightly coupled with react change detection framework and works in async, batch processing
        this.setState({
            name : target.value
        })
        console.log('state value'+ this.state.textBoxValue);

        evt.preventDefault();
    }

    updateNameEvent = (evt)=>{        
        //this.state.name = "Estban";        
        //this.forceUpdate();//skips shouldcomponentupdate and calls render immediatly
       
        this.setState({
            name : "Estban"
        })
        evt.preventDefault();
    }

    render() {
        console.log("Home Render ")
        return(
            <Fragment>
                <h1>Header Name - {this.props.headerName}</h1>
                <input type="text" value={this.state.textBoxValue} onChange={this.changeEventHandler} />

                <label>
                    Address:
                         <input type="text" ref={this.inputAddress} placeholder="Please enter age"/>
                     </label>


                {/* An input form element whose value is controlled by React in this way is called a “controlled component”. */}
                    
                    <input type="text" placeholder="Please enter your name" 
                            value={this.state.name} 
                            onChange={this.changeNameOnType}/>
 
                    <button className={"form-control btn btn-primary col-md-2"} 
                        onClick={this.updateNameEvent}>Update Name</button>
                <DummyComponent headerName={this.state.headerNameForChild} />
            </Fragment>
        )
    }
}


// Home.defaultProps = {
//     headerName : "This is Default Home Header"
// }

Home.propTypes = {
    headerName : PropTypes.string.isRequired
}