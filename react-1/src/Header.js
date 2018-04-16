import React, { Component } from 'react';
import logo from './logo.svg';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <Navigation links={[{id: 1, url: '/', text: 'Home'}, {id: 2, url: '/contacts', text: 'Contacts'}, {id: 3, url: '/about', text: 'About'}]}/>
      </header>
    );
  }
}

export default Header;
