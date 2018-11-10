import React, { Component } from 'react';
import {Panel, Table} from 'react-bootstrap';
import {map} from 'lodash';
import axios from 'axios';
import config from '../config';


export default class RosteredOn extends Component {

  constructor(){
    super()
    this.state = {
      staff : [],
    }
  }

  componentDidMount(){
      this.getRoster()
  }

  convertTime(unix_timestamp){
    //Copied from https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp*1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) //+ ':' + seconds.substr(-2);
    return formattedTime
  }

  async getRoster(){
    axios({
        url : 'http://localhost:5000/api/deputy',
        method : 'GET',
    }).then(
        (response) =>
        {
          var roster = response.data
          
          this.setState({staff: response.data})
        }
    )
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
                        <td>{this.convertTime(member.start)}</td>
                        <td>{this.convertTime(member.end)}</td>
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