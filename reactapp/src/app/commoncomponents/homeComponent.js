import React, {Fragment} from "react";
import PropTypes from "prop-types";
import DummyComponent from "./dummyComponent";

export default class Home extends React.Component{

    constructor(props, context){
        super(props);
        this.state = {
            headerNameForChild : "Header Name From Home Component",
            textBoxValue : "This is a text box"
        }
    }

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

    render() {
        console.log("Home Render ")
        return(
            <Fragment>
                <h1>Header Name - {this.props.headerName}</h1>
                <input type="text" value={this.state.textBoxValue} onChange={this.changeEventHandler} />

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