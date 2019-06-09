/*Core*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
/*Estilo*/
import './styles/App.scss';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Animate from './styles/Animate.css';
/*Pages*/
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import Portfolio from './pages/Porfolio';
import Habilidades from './pages/Habilidades';
import Contatos from './pages/Contatos';




class App extends Component {
  componentDidMount() {
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
        <Route exact path={`/sobre`} render={(routerProps) => < Sobre routerProps={routerProps} />} />
        <Route exact path={`/habilidades`} component={Habilidades} />
        {/*<Route exact path={`/apresentacao`} component={Apresentacao} />*/}
        <Route exact path={`/portfolio`} component={Portfolio} />
        <Route exact path={`/contatos`} component={Contatos} />


      </div>


    );
  }
}

export default App;