import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

const navClasse = "nav p-1 pt-0 mt-0 float-right  ";
const navCss = {


backgroundColor:'black'


  

}
const liClasse = "nav-item  text-center  rounded bg-transparent float-left";
const liCss = { transition: '3s background-color ease-in', fontSize: '12pt'};
const menuLinkClasse = "nav-link  ";
const menuLinkClasseUltima = "nav-link  ";
const linkCss = {
  color: 'white',
  fontWeight: '400',
  fontSize:'12pt'


}

class Menu extends Component {
  render() {

    return (
<nav  id="Menu-Nav" className='navbar navbar-dark navbar-expand-sm p-0 m-0 shadow pb-3 pl-3 pr-3 pt-4' style={navCss}>
      <ul  className='navbar-nav p-0 m-0 float-right position-relative'  style={{position:'relative',left:'68%'}}>

        <li class='nav-item text-left m-0 p-2' >
          <a href='#sobreMim' class={menuLinkClasse} style={linkCss}>Sobre Mim</a>

        </li>
        <li class='nav-item text-center p-2'>
          <Link to="/objetivo" class={menuLinkClasse} style={linkCss}  >Objetivo</Link >
        </li>
        <li class='nav-item text-center p-2'>
          <Link to="/habilidades" class={menuLinkClasse} style={linkCss} >Habilidades</Link >
        </li>
        <li class='nav-item text-center p-2' >
          <Link to="/contato" class={menuLinkClasseUltima} style={linkCss} >Contatos</Link >
        </li>

      </ul>
      </nav>

    );
  }
}
export default Menu;