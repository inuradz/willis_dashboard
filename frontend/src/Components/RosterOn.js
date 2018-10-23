import React, { Component } from 'react';
import {Panel, Table} from 'react-bootstrap';
import {map} from 'lodash';


export default class RosteredOn extends Component {

  constructor(){
    super()
    this.state = {
      staff : [],
    }
    this.state.staff.push({name : 'person 1',start_time: '09:00',end_time:'15:00'})
    this.state.staff.push({name : 'person 2',start_time: '10:00',end_time:'18:00'})
    this.state.staff.push({name : 'person 3',start_time: '14:00',end_time:'20:00'})
    this.state.staff.push({name : 'person 4',start_time: '15:00',end_time:'20:00'})
    this.state.staff.push({name : 'person 5',start_time: '14:00',end_time:'20:00'})
  }


  render(){
    return(
      <Panel>
        <Panel.Heading>Who is rostered on</Panel.Heading>
        <Panel.Body>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              {
                map(this.state.staff,(member) => {
                  return(
                      <tr>
                        <td>{member.name}</td>
                        <td>{member.start_time}</td>
                        <td>{member.end_time}</td>
                      </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Panel.Body>
      </Panel>
    );
  }
}