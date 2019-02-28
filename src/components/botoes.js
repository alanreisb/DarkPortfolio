import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import Seta from '../components/imagens/botao/seta.svg';
import Fechar from '../components/imagens/botao/fechar.svg';

const botaoClasse =
    'btn rounded-circle position-absolute  botao'
    ;




class botoes extends Component {
    render() {
        return (
            <div style={{height:'20vh'}}>

                <Link to={this.props.linkAnterior}>
                    <button class={`${botaoClasse} primeiro-botao  ${this.props.fundo}`} >
                        <img src={require('./imagens/botao/' + this.props.imagem1 + '.svg')} className='imagem-botao'></img>
                    </button>
                </Link>

                <Link to={this.props.linkProximo}>
                    <button class={`${botaoClasse} ${this.props.fundo} ${(this.props.imagem2 === 'fechar'? 'botao-fechar' : '')}`} >
                        <img src={require('./imagens/botao/' + this.props.imagem2 + '.svg')} className='imagem-botao' ></img>
                    </button>
                </Link>

            </div>
        );
    }       
}

export default botoes;