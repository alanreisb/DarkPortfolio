import React, { Component } from 'react';
//Componentes
import MenuLateral from '../components/Todas/menu-lateral';
import Texto from '../components/Texto';
import Piramide from '../components/Sobre/Piramide';

class Sobre extends Component {
  render() {
    return (
      <div className='pagina-principal container-fluid'>
        <MenuLateral></MenuLateral>
        <Texto titulo='Sobre mim'>Sou um profissional apaixonado por desafios que nunca desiste de algo que começa. Trabalhava na área administrativa anteriormente. Porém, sempre quis me aproximar da área de tecnologia. Desenvolvia pequenas aplicações VBA para automação de processos nas empresas em que trabalhei até que finalmente resolvi mudar cursando Análise e Desenvolvimento de Sistemas.<br /><br />
          Busco aprender toda a técnica disponível em grande parte do meu tempo livre. Costumo ser perfeccionista com detalhes, ao mesmo tempo procuro ser dinâmico ao executar uma tarefa.<br /><br />
          Atualmente estou à procura de um estágio onde possa empregar todos os conhecimentos e habilidades adquiridas.</Texto>

        <Piramide></Piramide>

       
      </div>
    );
  }
}

export default Sobre;