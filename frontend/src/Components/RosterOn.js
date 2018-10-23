import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';


export default class RosteredOn extends Component {

    render(){
        return(
            <Panel>
                <Panel.Heading>Who is rostered on</Panel.Heading>
                <Panel.Body>
                    All the people who are rostered on for today and their times
                </Panel.Body>
            </Panel>
        );
    }
}