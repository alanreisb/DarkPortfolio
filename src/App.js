/*Core*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import './App.css';
/*Scripts*/
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Animate from 'animate.css';
import Barba from 'barba.js';
/*Pages*/
import Principal from './pages/Principal';
import Apresentacao from './pages/Apresentacao';
import Objetivo from './pages/Objetivo';
import Habilidades from './pages/Habilidades';
import Contato from './pages/Contato';




class App extends Component {
  componentDidMount(){
    document.title = "Dev Alan Reis"
  }
  render() {

    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL);
    return (
      <div className="App" >
        <link href={Bootstrap} rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond" rel="stylesheet" />
        
        <link href={Animate} rel="stylesheet" />


        <Route exact path={`/`} render={(routerProps) => < Principal routerProps={routerProps} />} />
        <Route exact path={`/apresentacao`} render={(routerProps) => < Apresentacao routerProps={routerProps} />} />
        <Route exact path={`/objetivo`} component={Objetivo} />
        {/*<Route exact path={`/apresentacao`} component={Apresentacao} />*/}
        <Route exact path={`/habilidades`} component={Habilidades} />
        <Route exact path={`/contato`} component={Contato} />




      </div>
    

    );
  }
}

export default App;