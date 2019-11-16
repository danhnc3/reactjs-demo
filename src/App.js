import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="row">
          <div className="col app-header-bar">
            <div className="logo">
              <a href="#">
                <img src={logo}></img>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
