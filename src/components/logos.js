import React, { Component } from 'react';
import logoReact from './imagens/logos/react.png';
import logoJquery from './imagens/logos/jquery.png';
import logoCsharp from './imagens/logos/csharp.png';
import logoNode from './imagens/logos/nodejs.png';


//Estilização 
const logosCss = {

    position:'absolute',
    top:'85%',
    margin:'0 !important',
    padding:'0 !important',
    height:'14%',
    verticalAlign:'bottom',
    width:'88%',
    overflow:'visible',
    userSelect:'none',

    
}
const logosUlCss = {
    listStyle: 'none',
    margin:'auto',
    width:'93%',
    
   

    
        
}
const liCss = {

    height:'100%',
    padding:'0',
    margin:'0'
   
}
const imgCss = {
    height:'55px',
    objectFit:'cover'
    

}
//Classe
class Logos extends Component {
    render() {

        return (
          
                <div id='logos' style={logosCss} className='m-0 p-0'>
                    <ul style={logosUlCss} className='d-flex flex-row justify-content-between h-100 '>
                        <li  style={liCss}><img style={imgCss} className='logo animated fadeIn delay-1s'   src={logoReact} /></li>
                        <li  style={liCss}><img style={imgCss} className='logo animated fadeIn delay-2s'   src={logoJquery} /></li>
                        <li  style={liCss}><img style={imgCss} className='logo animated fadeIn delay-3s'   src={logoNode} /></li>
                        <li  style={liCss}><img style={imgCss} className='logo animated fadeIn delay-4s'   src={logoCsharp} /></li>
                    </ul>

                </div>


            
        );
    }
}
export default Logos;