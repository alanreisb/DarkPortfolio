import React, { Component } from 'react';
/*Componentes*/
import Menu from '../components/Principal/nav-principal';
import Titulo from '../components/Principal/titulo';
import Player from '../components/Principal/player';

class Principal extends Component {
    render() {
        return (
            <div className='pagina-principal'>

                <Menu></Menu>
                <Titulo></Titulo>
                <div className='cover'>
                    <img src={require('../components/imagens/BlackHole.gif')}  className='imagem'></img>
                </div>

                <Player></Player>


            </div>
        );
    }
}

export default Principal;