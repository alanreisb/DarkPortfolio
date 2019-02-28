import React, { Component } from 'react';
import Contatos from '../components/contatos';
import Botoes from '../components/botoes';
import Wave from '../components/wave';

class Contato extends Component {
    render() {
        return (
            <div className='secao' >
                <Contatos icone='contatos' gradiente='bgContato'></Contatos>
                <Wave></Wave>
                <Botoes linkAnterior='/habilidades' linkProximo='/'
                imagem1='seta' imagem2='fechar' fundo='bgContato'></Botoes>
                
            </div>
        );
    }
}

export default Contato;