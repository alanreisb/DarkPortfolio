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
    backgroundColor: 'black',
    left: '10%',
    top: '40%',
    position: 'relative',
    transform: 'translateY(-50%)',
    height: '80%',
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

                <div style={textoCss}>
                    <h1 className='display-5 mb-4'>Entre em contato...</h1>
                    <p className='text-justify' style={{ fontFamily: 'arial', lineHeight: '2', fontWeight: 'bold', marginTop: '20%' }}>Cidade: Cruzeiro-SP<br />
                        CEP: 12.711-450<br />
                        Tel: (12) 98250-1585</p>
                    <ul className='flex-row d-flex text-light mt-1'>
                        <li className={contatosLiClasse}><img src={fbIcon} style={iconContatoCss}></img></li>
                        <li className={contatosLiClasse}><img src={lkIcon} style={iconContatoCss}></img></li>
                        <li className={contatosLiClasse}><img src={wpIcon} style={iconContatoCss}></img></li>
                    </ul>
                </div>

                <FormMessage></FormMessage>
            </div>
        );
    }
}

export default Contato;