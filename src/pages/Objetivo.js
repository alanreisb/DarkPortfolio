import React, { Component } from 'react';
import Textual from '../components/textual';
import Botoes from '../components/botoes';
import Wave from '../components/wave';
class Objetivo extends Component {
    render() {
        return (
            <div className='secao'>
                <Textual titulo='Objetivo' texto={<text>{`Estagiar na área de Desenvolvimento Web aplicando os conhecimentos já adquiridos a fim de desenvolvê-los .`}</text>} gradiente='bgObjetivo' icone='objetivo'>


                </Textual>
<Wave></Wave>
                <Botoes
                 linkAnterior='/apresentacao'
                 linkProximo='/habilidades'
                imagem1='seta' 
                imagem2='seta'
                fundo='bgObjetivo'></Botoes>
            </div>
        );
    }
}

export default Objetivo;