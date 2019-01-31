import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {map} from 'lodash';

export default class CurrentClass extends Component {

    constructor(){
      super()
      this.state = {
        classes : [],
      }
      this.state.classes.push({name:'ENGG1000',colour:'#f7945b',start_time:'10:00AM',end_time:'1:00PM'})
      this.state.classes.push({name:'MECH3110',colour:'#5c5cc4'})
      this.state.classes.push({name:'CHEESE42',colour:'#f7945b'})
      //this.state.classes.push({name:'POTATO18',colour:'#5c5cc4'})
      
    }
  
  
    render(){
      let rStyle = {
        height : '100px',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '75px',
        borderRadius: '25px',
        width : '50%',
        padding: '5px',
      }
      let two_pair = [];
      let i = 0;
      let empty = {name:'',colour:'#ffffff',start_time:'',end_time:''};
      for ( i = 0 ; i < this.state.classes.length;i+=2){
        let t = {}
        if (i+1 >= this.state.classes.length){
          t = {
            a : this.state.classes[i],
            b : empty,
          }
        } else {
          t = {
            a : this.state.classes[i],
            b : this.state.classes[i+1], 
          }
        }
        
        two_pair.push(t)
      }
      

      return(
        <div>
          <h1>Current Classes</h1>
          <Table>
            {
              map(two_pair,(item) => {
                return (
                  <tr width='100%'>
                    <td style={rStyle} bgcolor={item.a.colour}>
                      {item.a.name}
                      <br/>
                      <h3>
                        {item.a.start_time} - {item.a.end_time}
                      </h3>
                    </td>
                    <td style={rStyle} bgcolor={item.b.colour}>
                      {item.b.name}
                      <br/>
                      <h3>
                        {item.b.start_time} - {item.b.end_time}
                      </h3>
                  </td>
                  </tr>
                  )
              })
            }
          </Table>
          <h1>Upcoming classes</h1>
        </div>
        
      );
    }
  }