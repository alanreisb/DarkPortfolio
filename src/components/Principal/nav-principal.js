import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
//Estilo BootStrap
const menuClasse = 'w-100 navbar navbar-dark navbar-expand-sm p-0 m-0 shadow pb-3 pl-3  pt-3';
const menuListaClasse = 'navbar-nav p-0 pr-3 m-0 ml-auto float-right';
const menuLiClasse = 'nav-item text-center p-3';
const menuLinkClasse = "nav-link ";
//Sobreposição de BootStrap Inline 
const linkCss = {
  color: 'white',
  fontWeight: '400',
  fontSize: '12pt',
  textDecoration: 'none',
  fontFamily: 'Azonix'
}

class navPrincipal extends Component {
  render() {

    return (
      <nav className={menuClasse} >
        <ul className={menuListaClasse}>

          <li class={menuLiClasse} >
            <Link to="/sobre" class={menuLinkClasse} style={linkCss} >Sobre Mim</Link>

          </li>
          <li class={menuLiClasse} >
            <Link to="/habilidades" class={menuLinkClasse} style={linkCss}  >Habilidades</Link >
          </li>
          <li class={menuLiClasse} >
            <Link to="/portfolio" class={menuLinkClasse} style={linkCss} >Portfolio</Link >
          </li>
          <li class={menuLiClasse} >
            <Link to="/contatos" class={menuLinkClasse} style={linkCss} >Contatos</Link >
          </li>

        </ul>
      </nav>

    );
  }
}
export default navPrincipal;