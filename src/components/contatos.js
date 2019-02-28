import React, { Component } from 'react';
import iFacebook from './imagens/icons/fb_icon.png';
import iLinkedin from './imagens/icons/linkedin_icon.png';
import iWhatsapp from './imagens/icons/wp_icon.png';
import iGithubb from './imagens/icons/github.svg';
import SpeechBox from './speechBox';
/*Principal*/
const contatosCss = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflowY: 'auto'
};
/*Titulo */
const tituloClasse = ' text-light pl-3 pr-3 rounded text-left mt-0 mb-0 pt-0 pb-0 ';
const tituloCss = {
    marginTop: '80px',
    overflow: 'visible',
};
/*Barras*/
const barraClasse = "float-left mt-5 mb-1 barra-contato text-nowrap";
const barraCss = {
    clear: 'both',
    verticalAlign: 'middle',
    padding: '5px 10px 5px 0px',
    overflow: 'visible',
    zIndex:'3'

};
const barraContainerCss = {

}

const svgCss = {
    width: '45%',
    height: '15%',
    position: 'absolute',
    left: '0',
    margin: '0',
    padding: '0'
}

/*Logos*/
const logoCss = {
    height: '30px',
    overflow: 'hidden',
    position: 'absolute',
    left: '45px',
    marginTop: '15px'
}

const linkCss = {
    position: 'absolute',
    left: '80px',
    marginTop: '15px',
    fontSize: '14pt',
    zIndex:'4'
}


class contatos extends Component {
    render() {
        return (
            <div style={contatosCss} className={` ${this.props.gradiente}`}>

                <img src={require('./imagens/iconespagina/' + this.props.icone + '.svg')} className='icone' style={{ transform: 'translateX(30px) translateY(-15px)' }}></img>


                <div id='titulo' style={tituloCss}>
                    <h5 className={tituloClasse}>Contatos </h5>
                </div>

                <div style={{ width: '100%',overflowX:'hidden' }}>
                    <div className={barraClasse} style={barraCss} className='w-100'>
                        <div style={barraContainerCss} className='row'>
                            

                            <img src={iFacebook} style={logoCss}></img><a style={linkCss} className='ml-2' href='https://www.facebook.com/devalanreis'>facebook.com/devalanreis</a>
                        </div>
                    </div>

                    <div className={barraClasse} style={barraCss} className='w-100'>
                        <div style={barraContainerCss} className='row'>
                            <img src={iLinkedin} style={logoCss}></img><a style={linkCss} className='ml-2' href='https://www.linkedin.com/in/alanreisb'>linkedin.com/in/alanreisb</a>
                        </div>
                    </div>

                    <div className={barraClasse} style={barraCss} className='w-100'>
                        <div style={barraContainerCss} className='row'>
                            <img src={iGithubb} style={logoCss}></img>  <a style={linkCss} className='ml-2' href='https://www.github.com/alanreisb'>github.com/alanreisb</a>
                        </div>
                    </div>

                    <div className={barraClasse} style={barraCss} className='w-100'>
                        <div style={barraContainerCss} className='row w-100'>
                            <img src={iWhatsapp} style={logoCss}></img>  <a style={linkCss} href='tel:(12)98250-1585' className='ml-2'>(12)98250-1585</a>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default contatos;