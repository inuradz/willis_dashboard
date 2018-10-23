import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';


export default class DaysSinceLastIncident extends Component {

    render(){
        return(
            <Panel>
                <Panel.Heading>Days Since Last Incident</Panel.Heading>
                <Panel.Body>
                    0
                </Panel.Body>
            </Panel>
        );
    }
}