import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';
import FormMessage from '../components/form-message';

import fbIcon from '../components/imagens/icones contato/facebook.png';
import wpIcon from '../components/imagens/icones contato/whatsapp.png';
import lkIcon from '../components/imagens/icones contato/linkedin.png';



const tituloCss = {
    fontFamily: 'arial',

}

const textoCss = {
    backgroundColor: 'black',
    color: 'white',
    left: '7%',
    top: '0',
    position: 'relative',
    width: '80%',
    fontFamily: 'arial !important',
    height: '95%',
    borderRadius: '30px'


};
const contatosCss = {
    width:'50%',
    marginTop:'2.5%'

}
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


                <MenuLateral></MenuLateral>
                <div style={textoCss} className='p-4 text-center'>

                    <div className=' line flex-row d-flex p-4 justify-content-between'>


                        <div className='rounded pl-0 pr-4 pt-0 pb-0 text-left' style={contatosCss}>
                            <div className='w-50 pl-0 text-left text-light font-weight-bold mt-0 ' style={tituloCss}><h1 className=''> Contatos </h1> </div>

                            <p className='text-justify mt-3' style={{ fontFamily: 'arial', lineHeight: '2', fontWeight: 'bold' }}>Cidade: Piquete-SP<br />
                                CEP: 12.620-000<br />
                                Tel: (12) 3156-4898<br />
                                Cel / WhatsApp: (12) 98250-1585<br /></p>

                            <ul className='flex-row d-flex text-light m-0 mt-3 mb-4 ml-0 p-0'>
                                <li className={contatosLiClasse}><a href='https://www.facebook.com/devalanreis' target='_blank'><img src={fbIcon} style={iconContatoCss}></img></a></li>
                                <li className={contatosLiClasse}><a href='https://www.linkedin.com/in/alanreisb' target='_blank'><img src={lkIcon} style={iconContatoCss}></img></a></li>
                                <li className={contatosLiClasse}><a href='tel:(12)98250-1585'><img src={wpIcon} style={iconContatoCss} title='(12)98250-1585'></img></a></li>
                            </ul>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117888.9197057426!2d-45.25190273647298!3d-22.57802836110393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccba25567987bd%3A0x92b702e677e1cb47!2sPiquete+-+SP%2C+12620-000!5e0!3m2!1spt-BR!2sbr!4v1559961653681!5m2!1spt-BR!2sbr" width="80%" height="300" frameborder="0"  allowfullscreen></iframe>

                            

                        </div>

                        <FormMessage></FormMessage>

                    </div>
                </div>
            </div>
        );
    }
}

export default Contato;