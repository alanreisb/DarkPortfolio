import React, { Component } from 'react';
//Componentes
import MenuLateral from '../components/Todas/menu-lateral';
import Texto from '../components/Texto';
import Indicador from '../components/Habilidades/Indicador';



class Habilidades extends Component {
    render() {
        return (
            <div className='principal container-fluid'>
                <MenuLateral></MenuLateral>
                <Texto titulo='Habilidades'>
                    Como desenvolvedor busco me focar principalmente na composição de componentes e de páginas assíncronas. Através de tecnologias como Ajax, Jquery, React, CSS, Bootstrap.<br /><br />
                    Busco também me manter atualizado sobre algumas linguagens e sua funcionalidade no backend. Me dediquei alguns anos a compreensão e utilização da linguagem C# ao ASP.Net antes de me focar mais ao front-end. Hoje busco me manter próximo ao NodeJs afim de poder utilizá-lo conjuntamente ao react. Resultando em uma aplicação leve e eficiente.
                </Texto>

                <Indicador />

            </div>
        );
    }
}

export default Habilidades;