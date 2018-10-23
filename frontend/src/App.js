import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import Clock from './Components/Clock';
import RosterOn from './Components/RosterOn'
//import '/node_modules/react-grid-layout/css/styles.css'
//import '/node_modules/react-resizable/css/styles.css'


class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous" />
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">
            <Clock />
          </div>
          <div key="b">
            <RosterOn />
          </div>
          <div key="c">c</div>
        </GridLayout>
      </div>
    );
  }
}

export default App;
