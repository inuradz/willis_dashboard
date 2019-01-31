import React, { Component } from 'react';
import Clock from 'react-live-clock';
import {Panel} from 'react-bootstrap';
import BigText from 'react-bigtext';


export default class ClockBlock extends Component {

    render(){
        var divStyle = {
            fontSize: '400px',
            //verticalAlign: 'middle',
            //horizontalAlign: 'middle',
            textAlign: 'center',
            //backgroundColor: 'coral',
            width:'100%'
        }
        return(
            <div style={divStyle}>
                <Clock format={'hh:mm:ss'} ticking={true} timezone={'Australia/NSW'} />
            </div>
            
        )
    }
}

/*

                        
                    </BigText>
                    */