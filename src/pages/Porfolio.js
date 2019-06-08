import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import Exodus from '../components/imagens/portfolio/Exodus.gif';


const textoCss = {
  color: 'white',

  marginTop: '12%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  alignItens: 'center',
  height: '45%',
  width: '60%',
  fontFamily: 'arial !important'

}
const liCss = {
  
  height: '100%',
  width: '240px',
  borderRadius: '10px'
}


  ;
class Portfolio extends Component {
  render() {
    return (
      <div className='principal container-fluid'>
        <MenuLateral></MenuLateral>


        <div style={textoCss}>
          <ul className='d-flex d-inline-block'>
            <li style={liCss} className='m-3'><figure><figcaption className='mb-3'>Exodus - LandingPage</figcaption><img src={Exodus}></img></figure></li>
            <li style={liCss} className='m-3'><figure><figcaption></figcaption><img></img></figure></li>
            <li style={liCss} className='m-3'><figure><figcaption></figcaption><img></img></figure></li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Portfolio;