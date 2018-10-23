import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Panel} from 'react-bootstrap';


export default class ClockBlock extends Component {

    render(){
        return(
            <Panel>
                <Panel.Heading>Time</Panel.Heading>
                <Panel.Body>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/NSW'} />
                </Panel.Body>
            </Panel>
        );
    }
}

