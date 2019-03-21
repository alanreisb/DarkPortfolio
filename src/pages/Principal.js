import React, { Component } from 'react';
/*Componentes*/
import Menu from '../components/menu';
import Titulo from '../components/titulo';


const containerImagemCss = {
    width:'20%',
    height:'50%',
    backgroundColor:'black',
    left:'70%',
    marginTop:'5%',
    position:'absolute',
    overflow:'visible'
}

class Principal extends Component {
    render() {
        return (
            <div className='w-100 h-100 shadow-lg'style={{overflow:'hidden'}} >
                <section className='w-100 container-fluid  ' style={{ height: '100vh',backgroundColor:'black', margin:'0!important' ,overflow:'hidden'}}>
                    <Menu></Menu>
                    <div id='conteudo' >
                 
                        <Titulo></Titulo>
                        <div style={containerImagemCss}>
                        <img src={require('../components/imagens/BlackHole.png')} style={{objectFit:'contain'}} className='w-100 h-100'></img>
                      
                    </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

export default Principal;