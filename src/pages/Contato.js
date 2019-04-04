import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import FormMessage from '../components/form-message';

import fbIcon from '../components/imagens/icones contato/facebook.png';
import wpIcon from '../components/imagens/icones contato/whatsapp.png';
import lkIcon from '../components/imagens/icones contato/linkedin.png';



const tituloCss = {
    fontFamily: 'Azonix'
}

const textoCss = {
    float: 'left',
    color: 'white',
    background:'rgba(50,50,50,.3)',
    left: '10%',
    position: 'relative',
    width: '35%',
    fontFamily: 'arial !important'
    

};
const contatosLiClasse = 'p-2 ';

const iconContatoCss = {
    objectFit: 'cover',
    width: '35px',
    height: '35px'
}
class Contato extends Component {
    render() {
        return (
            <div className='principal container-fluid' >
                <div className='w-100 p-4 text-center text-light text-uppercase font-weight-bold mt-3' style={tituloCss}><h2> Contatos </h2> </div>

                <MenuLateral></MenuLateral>

                <div style={textoCss} className='rounded pl-4 pr-4 pt-4 pb-4'>
                    <h1 className='display-5 mb-2'>Entre em contato...</h1>
                    <p className='text-justify m-0' style={{ fontFamily: 'arial', lineHeight: '2', fontWeight: 'bold' }}>Cidade: Cruzeiro-SP<br />
                        CEP: 12.711-450<br />
                        Tel: (12) 98250-1585</p>
                    <ul className='flex-row d-flex text-light m-0 mb-2 p-0'>
                        <li className={contatosLiClasse}><img src={fbIcon} style={iconContatoCss}></img></li>
                        <li className={contatosLiClasse}><img src={lkIcon} style={iconContatoCss}></img></li>
                        <li className={contatosLiClasse}><img src={wpIcon} style={iconContatoCss}></img></li>
                    </ul>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58946.8210909044!2d-44.99800465803306!3d-22.5725079066739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9df67fe73253c7%3A0x17d1c1765e1b1017!2sCruzeiro%2C+SP!5e0!3m2!1spt-BR!2sbr!4v1554397277004!5m2!1spt-BR!2sbr"  classname='rounded' width="100%" height="250" frameborder="0"  allowfullscreen></iframe>

                </div>

                <FormMessage></FormMessage>
            </div>
        );
    }
}

export default Contato;