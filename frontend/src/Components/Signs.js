import React, { Component } from 'react';


export default class Signs extends Component {

    constructor(props){
        super(props)
        this.state = {
            image : props.image,
            text  : props.text, 
        }
    }

    render(){
        return(
            <div>
            {
                <img src={this.state.image} width='30%' height='70%'/>
                
            }
            {
                this.state.text
            }
                
                 
            </div>
        )
    }
}