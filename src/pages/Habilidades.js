import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import CanvasHabilidades from '../components/canvas-habilidades';

const ListaHabilidadesCss = {
    marginTop: '10%',
    paddingLeft: '15%',
    paddingRight: '1%',
    backgroundColor:'black',
    color:'white'
}

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

class Habilidades extends Component {
    render() {
        return (
            <div className='principal container-fluid'>
                <MenuLateral></MenuLateral>


                <div style={textoCss}>
                    <h1 className='mb-4'>Habilidades</h1>
                    <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '1.5' }}><br />Como desenvolvedor busco me focar principalmente na composição de componentes e de páginas assíncronas. Através de tecnologias como Ajax, Jquery, React, CSS, Bootstrap.<br /><br />
                        Busco também me manter atualizado sobre algumas linguagens e sua funcionalidade no backend. Me dediquei alguns anos a compreensão e utilização da linguagem C# ao ASP.Net antes de me focar mais ao front-end. Hoje busco me manter próximo ao NodeJs afim de poder utilizá-lo conjuntamente ao react. Resultando em uma aplicação leve e eficiente.
                    </p>
                </div>
                <div className='w-50 h-100 float-right container-fluid position-relative p-0' >
                    <ul style={ListaHabilidadesCss}>
                        <div className='mb-4'><h3>Plataformas</h3>
                            <li style={{backgroundColor:'black'}}><CanvasHabilidades titulo='ReactJs' cor='green' porcentagem='30'></CanvasHabilidades></li>
                            <li><CanvasHabilidades titulo='NodeJs' cor='green' porcentagem='20'></CanvasHabilidades></li>
                        </div>
                        <div className='mb-4' ><h3>Linguagens</h3>
                            <li><CanvasHabilidades titulo='C#' cor='yellow' porcentagem='65'></CanvasHabilidades></li>
                        </div>
                        <div className='mb-4'><h3>Básicas</h3>
                            <li ><CanvasHabilidades titulo='Html' cor='blue' porcentagem='90'></CanvasHabilidades></li>
                            <li ><CanvasHabilidades titulo='CSS' cor='blue' porcentagem='75'></CanvasHabilidades></li>
                            <li ><CanvasHabilidades titulo='JQuery' cor='blue' porcentagem='70'></CanvasHabilidades></li>
                        </div>
                    </ul>

                </div>

            </div>
        );
    }
}

export default Habilidades;