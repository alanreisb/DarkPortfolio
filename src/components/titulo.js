import React, { Component } from 'react';


const tituloContainerCss = {

    width:'100%',
    top:'28%',
    position:'absolute',
    textAlign:'left',
     alignContent:'center',
     overflow:'visible',
     fontSize:'24pt',
     userSelect:'none',
     animationDuration:'3s'
     
    

    
};

const tituloCss = { 
    whiteSpace: 'pre-wrap', 
    textAlign: 'center', 
    fontFamily: 'Cormorant Garamond, serif' ,
    lineHeight:'1',
    letterSpacing:'0.5px',
    color:'white',
    
    fontWeight:'700'
    
   };


    


//Classe
class Titulo extends Component {
    render() {

        return (
            <div id='titulo-container' style={tituloContainerCss} className='animated fadeInUp ' >
              <text style={tituloCss} className='' >Alan Reis.</text><br/>
              <text style={tituloCss} className='' >Desenvolvedor Front-end</text><br/>
              <div className='text-justify mt-5 '>
              <text style={tituloCss} className='text-justify' >Sou um desenvolvedor Front-end <br/>especializado em componentes e 
              <br/>páginas assíncronas.</text></div>
            </div>
        );
    }
}
export default Titulo;