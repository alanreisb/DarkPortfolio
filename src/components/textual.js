import React, { Component } from 'react';
/*Card*/
const cardCss = {
  overflow:'hidden',
  height: '100%',
  position:'absolute',
  maxHeight:'100%',

}
const cardBodyCss = {
  paddingLeft: '7%',
  paddingRight: '15%',
  marginTop: '100px',
  userSelect: 'none',
  overflow:'auto',
  maxHeight:'58%',
  zIndex:'2'
};
/*Titulo */
const tituloClasse = 'card-title text-light pl-3 pr-3 text-left mt-0 mb-0 pt-0 pb-0';
const textoClasse = 'card-text text-light text-left p-3 texto-conteudo';
const textoCss = {
  lineHeight: '1.5',
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: '600',
  fontSize: '14pt',
  margin: '0',
  whiteSpace: 'pre-wrap',
  overflow:'visible',
  
};

class Textual extends Component {
  render() {
    return (
      <div class={`card shadow w-100 h-100 ${this.props.gradiente}`} style={cardCss} >
        <img src={require('./imagens/iconespagina/' + this.props.icone + '.svg')} className='icone'></img>
        <div class={`card-body`} style={cardBodyCss} >

          <h5 class={tituloClasse}>{this.props.titulo} </h5>
          <p class={textoClasse} >{this.props.texto}</p>

        </div>
      </div>
    );
  }
}

export default Textual;