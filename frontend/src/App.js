import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import Clock from './Components/Clock';
import RosterOn from './Components/RosterOn'
import Annoucements from './Components/Annoucements'
import CurrentClass from './Components/CurrentClass'
//import '/node_modules/react-grid-layout/css/styles.css'
//import '/node_modules/react-resizable/css/styles.css'


class App extends Component {
  render() {
    var layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 2},
      {i: 'b', x: 0, y: 1, w: 1, h: 2},
      {i: 'c', x: 1, y: 3, w: 1, h: 2},
      //{i: 'd', x: 1, y: 3, w: 1, h: 2},
    ];
    let bSytle = {
      //borderStyle : 'solid',
      margin : '0px',
    }

    let borderLess = {
      margin : '0px'
    }



    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossOrigin="anonymous" />
        <GridLayout className="layout" layout={layout} cols={2} rowHeight={270} width={1920} style={bSytle}>
          <div key="a" style={bSytle}>
            <Clock />
          </div>
          <div key="b" style={bSytle}>
            <RosterOn />
          </div>
          <div key="c"style={bSytle}>
            <Annoucements />
          </div>
        </GridLayout>
        <meta httpEquiv="refresh" content="300" />
      </div>
    );
  }
}

export default App;
