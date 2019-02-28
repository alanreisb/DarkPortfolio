import React, { Component } from 'react';
import Textual from '../components/textual';
import Botoes from '../components/botoes';
import Wave from '../components/wave';




class Apresentacao extends Component {
  render() {
    return (
      <div>
        <Textual titulo='Apresentação' texto={<text>{`Profissional de desenvolvimento web focado na composição de componentes assíncronos e sem perda de perfomance. \n\nUtilizando tecnologias como ReactJs, Jquery, entre outras plataformas. Buscando sempre acompanhar as tendências atuais  em UI/UX.`}</text>} gradiente='bgApresentacao' icone='apresentacao' >

        </Textual>
        <Wave></Wave>
        <Botoes 
        linkAnterior='/'
         linkProximo='/objetivo'
        imagem1='seta'
        imagem2='seta'
        fundo='bgApresentacao'></Botoes>

      </div>
    );
  }
}

export default Apresentacao;