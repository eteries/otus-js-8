import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
const ReactRouter = require('react-router-dom');
const BrowserRouter = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;


class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div className='content'>
                  <Header/>
                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path='/contacts' component={Contacts} />
                      <Route path='/about' component={About} />
                      <Route render={function () {
                          return <p>Not Found</p>
                      }} />
                  </Switch>
              </div>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
