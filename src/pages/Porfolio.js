import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';

const textoCss = {
    float: 'left',
    color: 'white',
    backgroundColor: 'black',
    left: '10%',
    top: '55%',
    position: 'relative',
    transform: 'translateY(-50%)',
    height: '80%',
    width: '35%',
    fontFamily: 'arial !important'
  
  }
  
class Portfolio extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-absolute container-fluid' style={{ backgroundColor: 'black' }}>
            <MenuLateral></MenuLateral>
    
    
            <div style={textoCss}>
              <h1 className='display-5 mb-4'>Sobre mim</h1>
              <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '1.5' }}><br />Sou um profissional apaixonado por desafios que nunca desiste de algo que começa. Trabalhava na área administrativa anteriormente. Porém, sempre fui apaixonado por tecnologia e automação de tarefas. Desenvolvia pequenas aplicações para aumento de performance nas empresas em que trabalhei, até que finalmente resolvi mudar de área e cursar Análise e Desenvolvimento de Sistemas.<br /><br />
                Busco aprender toda a técnica disponível em grande parte do meu tempo livre. Costumo ser perfeccionista com detalhes, sem nunca deixar de ser dinâmico ao executar alguma tarefa.<br /><br />
                Atualmente estou à procura de um estágio onde possa empregar todos os conhecimentos e habilidades adquiridas.
              </p>
            </div>
            </div>
        );
    }
}

export default Portfolio;