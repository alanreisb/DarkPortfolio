import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import FormMessage from '../components/form-message';

const tituloCss = {
    fontFamily:'Azonix'
}

const textoCss = {
    float: 'left',
    color: 'white',
    backgroundColor: 'black',
    left: '10%',
    top: '40%',
    position: 'relative',
    transform: 'translateY(-50%)',
    height: '80%',
    width: '35%',
    fontFamily: 'arial !important'
  
  }

class Contato extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-absolute container-fluid' style={{ backgroundColor: 'black', width:'100%', height:'100%' }}>
            <div className='w-100 p-4 text-center text-light text-uppercase font-weight-bold mt-3' style={tituloCss}><h2> Contatos </h2> </div>
            
            <MenuLateral></MenuLateral>

            <div style={textoCss}>
          <h1 className='display-5 mb-4'>Entre em contato...</h1>
          <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '1.5' }}></p>
        </div>
            <FormMessage></FormMessage>
    </div>
        );
    }
}

export default Contato;