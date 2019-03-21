import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import CanvasHabilidades from '../components/canvas-habilidades';

const ListaHabilidadesCss = {
    marginTop:'17%',
    paddingLeft:'10%',
    paddingRight:'10%',
}

const textoCss = {
    float: 'left',
    color: 'white',
    backgroundColor: 'black',
    left: '10%',
    top: '65%',
    position: 'relative',
    transform: 'translateY(-50%)',
    height: '80%',
    width: '35%',
    fontFamily: 'arial !important'

}

class Habilidades extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-absolute container-fluid' style={{ backgroundColor: 'black' }}>
                <MenuLateral></MenuLateral>


                <div style={textoCss}>
                    <h1 className='display-5 mb-4'>Habilidades</h1>
                    <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '1.5' }}><br />Como desenvolvedor busco me focar principalmente na composição de componentes e de páginas assíncronas. Através de tecnologias como Ajax, Jquery, React, CSS, Bootstrap.<br /><br />
                        Busco também me manter atualizado sobre algumas linguagens e sua funcionalidade no backend. Me dediquei alguns anos a compreensão e utilização da linguagem C# ao ASP.Net antes de me focar mais ao front-end. Hoje busco me manter próximo ao NodeJs afim de poder utilizá-lo conjuntamente ao react. Resultando em uma aplicação leve e eficiente.
                    </p>
                </div>
                <div className='w-50 h-100 float-right container-fluid position-relative p-5' >
                <ul style={ListaHabilidadesCss}>
                    <div className='d-flex flex-row justify-content-between mb-5'>
                    <li><CanvasHabilidades titulo='ReactJs' cor='#00ffff' porcentagem='30'></CanvasHabilidades></li>
                    <li><CanvasHabilidades titulo='NodeJs' cor='#06A10B'porcentagem='20'></CanvasHabilidades></li>
                    <li><CanvasHabilidades titulo='C#' cor='#b200ff'porcentagem='65'></CanvasHabilidades></li>
                    </div>
                    <div className='d-flex flex-row justify-content-between mt-5'>
                    <li ><CanvasHabilidades titulo='Html' cor='#ff7034'porcentagem='90'></CanvasHabilidades></li>
                    <li ><CanvasHabilidades titulo='CSS'cor='#27aee3' porcentagem='75'></CanvasHabilidades></li>
                    <li ><CanvasHabilidades titulo='JQuery'cor='#2e77bb' porcentagem='70'></CanvasHabilidades></li>
                    </div>
                    <div className='d-flex flex-row justify-content-between'>
                  
                    </div>
                </ul>
                
                </div>

            </div>
        );
    }
}

export default Habilidades;