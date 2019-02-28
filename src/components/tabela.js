import React, { Component } from 'react';
/*Cards*/
const cardCss = {
  overflow: 'hidden',
  height: '100%',
  position: 'absolute',
  marginLeft:'0',
  marginRight:'0',}
const cardBodyCss = {
  paddingLeft: '7%',
  paddingRight: '7%',
  marginTop: '100px',
  userSelect: 'none',
  overflowY: 'auto',
  overflowX:'hidden',
  maxHeight:'58%',
  zIndex:'2'

};
/*Textos*/
const tituloClasse = 'card-title pr-3 text-left mt-0 mb-0 pt-0 pb-0 text-white';
const textoClasse = 'card-text text-left p-3 texto-conteudo';
const textoCss = {
  lineHeight: '1.5',
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: '600',
  fontSize: '14pt',
  margin: '0',
  whiteSpace: 'pre-wrap',
  color:'white'

};

class Tabela extends Component {
  render() {
    return (
      <div class={`card shadow w-100 ${this.props.gradiente} `} style={cardCss} >
        <img src={require('./imagens/iconespagina/' + this.props.icone + '.svg')} className='icone'></img>
        <div class="card-body" style={cardBodyCss} >

          <h5 class={tituloClasse}>{this.props.titulo} </h5>
          <div class={`container row ${textoClasse}`} >{this.props.children}</div>

        </div>
      </div>
    );
  }
}

export default Tabela;