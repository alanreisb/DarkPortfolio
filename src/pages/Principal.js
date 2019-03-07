import React, { Component } from 'react';
/*Componentes*/
import Logos from '../components/logos';
import Menu from '../components/menu';
import Titulo from '../components/titulo';
import Foto from '../components/foto';
import BarraContatos from '../components/barra-contatos';
import Vortex from '../components/imagens/Vortex.gif';

const radialContainerClasse = 'float-left position-relative pl-1 pr-1 pt-5';
const tituloHabilidadesClasse = 'pb-3';

class Principal extends Component {
    render() {
        return (
            <div className='w-100 h-100 shadow-lg'style={{overflow:'hidden'}} >
                <section className='w-100 container-fluid  ' style={{ height: '100vh',backgroundColor:'black', margin:'0!important' ,overflow:'hidden'}}>
                    <Menu></Menu>
                    <div id='conteudo' >
                 
                        <Titulo></Titulo>
                        <div style={{width:'20%',height:'40%',backgroundColor:'black',left:'70%',marginTop:'5%',position:'absolute',overflow:'visible'}}>
                        <img src={require('../components/imagens/BlackHole.png')} style={{objectFit:'contain'}} className='w-100 h-100'></img>
                      
                    </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Principal;