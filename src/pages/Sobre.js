import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import logoReact from '../components/imagens/logos/react.png'
import logoNodejs from '../components/imagens/logos/nodejs.png'
import logoJquery from '../components/imagens/logos/jquery.png'
import logoCsharp from '../components/imagens/logos/csharp.png'

const textoCss = {
  float: 'left',
  color: 'white',
  backgroundColor: 'black',
  left: '10%',
  top: '60%',
  position: 'relative',
  transform: 'translateY(-50%)',
  height: '80%',
  width: '35%',
  fontFamily: 'arial !important'

}

const piramideCss = {
  width: '50%',
  position: 'relative',
  height: '100%',
  verticalAlign: 'middle',
  padding: '0'
}


class Sobre extends Component {
  render() {
    return (
      <div className='principal container-fluid'>
        <MenuLateral></MenuLateral>


        <div style={textoCss}>
          <h1 className='display-5 mb-4'>Sobre mim</h1>
          <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '1.5' }}><br />Sou um profissional apaixonado por desafios que nunca desiste de algo que começa. Trabalhava na área administrativa anteriormente. Porém, sempre fui apaixonado por tecnologia e automação de tarefas. Desenvolvia pequenas aplicações para aumento de performance nas empresas em que trabalhei, até que finalmente resolvi me arriscar mudando para área e cursando Análise e Desenvolvimento de Sistemas.<br /><br />
            Busco aprender toda a técnica disponível em grande parte do meu tempo livre. Costumo ser perfeccionista com detalhes, sem nunca deixar de ser dinâmico ao executar alguma tarefa.<br /><br />
            Atualmente estou à procura de um estágio onde possa empregar todos os conhecimentos e habilidades adquiridas.
          </p>
        </div>
        <div style={piramideCss} className='float-right container-fluid'>
          <section id="pyramid">
            <div className='side left' style={{ backgroundImage: `url(${logoReact})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center -230%', backgroundSize: '60px', zIndex: '3', opacity: '1' }} ></div>
            <div className='side front' style={{ backgroundImage: `url(${logoNodejs})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center -230%', backgroundSize: '60px', zIndex: '3', opacity: '1' }}></div>
            <div className='side right' style={{ backgroundImage: `url(${logoCsharp})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center -230%', backgroundSize: '60px', zIndex: '3', opacity: '1' }}></div>
            <div className='side back' style={{ backgroundImage: `url(${logoJquery})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center -230%', backgroundSize: '60px', zIndex: '3', opacity: '1' }}></div>

          </section>
        </div>
      </div>
    );
  }
}

export default Sobre;