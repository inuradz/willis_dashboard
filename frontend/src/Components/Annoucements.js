import React, { Component } from 'react';
import {Panel, Table} from 'react-bootstrap';
import {map} from 'lodash';

export default class Annoucements extends Component {

    constructor(){
      super()
      this.state = {
        annoucements : [],
      }
      this.state.annoucements.push('Remember to wear your safety glasses')
      this.state.annoucements.push('There is a CNC mill training coming up')
      this.state.annoucements.push("If you don't feel confident in what you are doing, ask for help")
    }
  
  
    render(){
      return(
        <Panel>
          <Panel.Heading>Annoucements</Panel.Heading>
          <Panel.Body>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                {
                  map(this.state.annoucements,(item) => {
                    return(
                        <tr>
                          <td>{item}</td>
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





