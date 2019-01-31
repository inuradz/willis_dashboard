import React, { Component } from 'react';
import {Panel, Table} from 'react-bootstrap';
import {map} from 'lodash'
import safT from './safety_sign2.PNG'

export default class Annoucements extends Component {

    constructor(){
      super()
      this.state = {
        annoucements : [],
      }
      this.state.annoucements.push('Check BE making for new classes and times')
    }
  
  
    render(){
      let sty = {
        fontSize : '25px'
      }
      return(
        <div>
          <h1>Announcements</h1>
            <img src={safT} height='250px' style={{display: 'block', marginLeft : 'auto', marginRight : 'auto'}}></img>
          <Table striped bordered condensed hover>
            <tbody>
              {
                map(this.state.annoucements,(item) => {
                  return(
                      <tr style={sty}>
                        <td>{item}</td>
                      </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
        
      );
    }
  }





