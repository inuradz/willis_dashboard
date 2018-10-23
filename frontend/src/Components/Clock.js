import React, { Component } from 'react';
import Clock from 'react-live-clock';


export default class Clock extends Component {
    constructor(){

    }

    render(){
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/NSW'} />
    }
}

