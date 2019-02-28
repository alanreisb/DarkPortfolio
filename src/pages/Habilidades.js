import React, { Component } from 'react';
import Tabela from '../components/tabela';
import Botoes from '../components/botoes';
import Wave from '../components/wave';

class Habilidades extends Component {
    render() {
        return (
            <div className='secao'>
                <Tabela titulo='Conhecimentos' gradiente='bgHabilidades' texto='asd' icone='habilidades'>
                    <div style={{columnCount:'2',columnWidth:'45%',columnGap:'auto',width:'100%',overflowX:'hidden',overflowY:'auto'}}>
                    <ul class='col-sm pl-0 p-0'><u>Front-End</u>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>Gulp</li>
                        <li>Jquery</li>
                    </ul>

                    <ul class='col-sm pl-0 p-0'><u>Back-End</u>
                        <li class='mt-2'>NodeJs</li>
                        <li>Asp.NET</li>

                    </ul>

</div>
                </Tabela>
                <Wave></Wave>
                <Botoes linkAnterior='/objetivo' linkProximo='/contato'
                imagem1='seta' imagem2='seta' fundo='bgHabilidades'></Botoes>
            </div>
        );
    }
}

export default Habilidades;