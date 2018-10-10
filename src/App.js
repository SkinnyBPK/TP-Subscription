import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import Register from './componentes/Suscripcion';
import NavBar from './componentes/Navbar';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Suscripcion" component={Register} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;