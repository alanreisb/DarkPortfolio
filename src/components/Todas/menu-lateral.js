import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import homeIcon from '../imagens/menu/home.png';
import profileIcon from '../imagens/menu/profile.png';
import skillIcon from '../imagens/menu/skills.png';
import contactIcon from '../imagens/menu/speech.png';
import facebookIcon from '../imagens/menu/facebook.png';
import whatsappIcon from '../imagens/menu/whatsapp.png';
import githubIcon from '../imagens/menu/github.png';
import linkedinIcon from '../imagens/menu/linkedin.png';
const paginasUlCss ={
    top:'50%',
    position:'absolute',
    width:'100%',
    marginTop:'-120px',
    textAlign:'left'
}

const contatosUlCss ={
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    display: 'block',
    padding: '0',
    listStyle: 'none',
    textAlign: 'center',
    margin: '0',
}
const liPaginasCss={
    width:'100%',
    height:'50px',
    marginBottom:'15px',
    textAlign:'left'
    
}

const liContatosCss={
    width:'45%',
    height:'25px',
    marginBottom:'5px',
    textAlign:'left',
    marginLeft:'auto',
    marginRight:'auto'
    
}

function Botao(props) {
return <button className='w-100 h-100 botao-lateral text-center'   style={{backgroundImage:`url(${props.background})`, backgroundSize:'38% 38%',backgroundRepeat:'no-repeat',backgroundPosition:'center 50%',backgroundColor:'transparent',color:'transparent',fontSize:'0.7em',zIndex:'3',margin:'0',padding:'0',cursor:'pointer',outline:'none',userSelect:'none'}}>{props.children}</button>;

}


class menuLateral extends Component {
    render() {
        return (
            <div>
                <div id='nav_bar' >
                    <ul id='menu-lateral-paginas' class=" flex-column" style={paginasUlCss}>
                        <li  style={liPaginasCss}>
                        <Link to='/'><Botao background={homeIcon} >Home </Botao></Link>
                        </li>
                        <li class="nav-item active" style={liPaginasCss}>
                        <Link to='/sobre'><Botao background={profileIcon}>Sobre</Botao></Link>
                        </li>
                        <li class="nav-item" style={liPaginasCss}>
                        <Link to='/habilidades' > <Botao background={skillIcon}>Habilidades</Botao></Link>
                        </li>
                        <li class="nav-item" style={liPaginasCss}>
                        <Link to='/contatos'><Botao background={contactIcon}>Contato</Botao></Link>
                        </li>
                    </ul>
                    <ul class="nav flex-column" style={contatosUlCss} >
                        <li class="nav-item " style={liContatosCss}>
                         <a href='https://www.linkedin.com/in/alanreisb' target='_blank'> <Botao background={linkedinIcon}></Botao></a>
                        </li>
                        <li class="nav-item active" style={liContatosCss}>
                        <a href='https://github.com/alanreisb' target='_blank'><Botao background={githubIcon}></Botao></a>
                        </li>
                        <li class="nav-item" style={liContatosCss}>
                        <a href='https://www.facebook.com/devalanreis' target='_blank'> <Botao background={facebookIcon}></Botao></a>
                        </li>
                        <li class="nav-item" style={liContatosCss}>
                        <a href='tel:(12)98250-1585'><Botao background={whatsappIcon}></Botao></a>
                        </li>
                    </ul>


                </div>
            </div>
        );
    }
}

export default menuLateral;