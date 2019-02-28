import React, { Component } from 'react';
import FotoPerfil from './imagens/FotoPerfil.jpg';
import { generateKeyPairSync } from 'crypto';


const fotoContainerCss = {
    width: '24vh',
    height:'auto',
    marginTop:'0%',
    marginRight:'40px',
    float:'left',
    verticalAlign: 'middle',
    alignContent: 'center',
    transform: 'translateX(10px)',
    userSelect:'none',
    outline:'none',
    overflow:'visible'
    
}
const fotoCss = {
        
        margin:'0',
        height: '100%',
        width:'100%',
        
        overflow:'visible'
        
        
        
}

class foto extends Component {
    render() {
        return (
            <div style={fotoContainerCss} className='animated fadeInRight '>
              <img src={FotoPerfil} style={fotoCss} id='perfil' className='img-thumbnail rounded-circle shadow-lg ' />  
            </div>
        );
    }
}

export default foto;