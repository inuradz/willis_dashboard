import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Panel} from 'react-bootstrap';
import BigText from 'react-bigtext';


export default class ClockBlock extends Component {

    render(){
        var divStyle = {
            fontSize: '350px',
            //verticalAlign: 'middle',
            //horizontalAlign: 'middle',
            textAlign: 'center',
            backgroundColor: 'coral',
            width:'100%'
        }
        return(
            <div style={divStyle}>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/NSW'} />
            </div>
            
        )
        return(
            <Panel>
                <Panel.Heading>Time</Panel.Heading>
                <Panel.Body>
                    <div style={divStyle}>
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/NSW'} />
                    </div>
                </Panel.Body>
            </Panel>
        );
    }
}

/*

                        
                    </BigText>
                    */