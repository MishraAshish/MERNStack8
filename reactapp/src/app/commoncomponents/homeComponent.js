import React, {Fragment} from "react";

export default class Home extends React.Component{

    constructor(props, context){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <h1>{`Home Component`}</h1>
            </Fragment>
        )
    }
}