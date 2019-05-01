import React, { Component } from 'react';
import Envelope from './imagens/icones contato/envelope.svg';
const formClasse = 'col-5  float-right position-relative text-left ';

const formCss = {

    height: '100%',
    fontFamily: 'arial !important',
    top: '0',

}

const tituloCss = {
    fontFamily: 'arial !important',
    color: 'white',
    fontWeight: '500',
    textAlign: 'left'


}



const labelClass = 'mt-3 mb-0 ';

const labelCss = {
    fontFamily: 'arial !important',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.2em'
};
const botaoClasse = 'btn btn-dark float-right  btn-lg col-4';

const botaoCss = {
    marginRight: '10%',
    marginTop: '8%',
    color: 'white',
    fontWeight: '600',
    fontSize: '1.2em'
};

class FormMessage extends Component {
    render() {
        return (
            <div className={formClasse} style={formCss}>
                <form >
                    <div className='w-100 d-flex flex-row'> 
                    <img id='letter' src={Envelope} className='mr-4 animated fadeInLeft' style={{width:'70px',height:'70px',transform:'translateY(-60%)'}}></img>
                    <h2 className='mr-3 mt-3'>Entre em contato</h2>
                  
                    
                    </div>
                    <h4 style={tituloCss}>Deixe sua mensagem...</h4>

                    <label className={labelClass} style={labelCss}>Nome</label>
                    <br />
                    <input type='text' className='col-5 p-2 rounded'></input>
                    <br />


                    <label className={labelClass} style={labelCss}>Email</label>
                    <br />
                    <input type='email' className='col-9 p-2 rounded'></input>
                    <br />
                    <label className={labelClass} style={labelCss}>Mensagem</label>
                    <textarea className='col-11 p-2 rounded' rows='9' style={{ resize: 'none' }}></textarea>

                    <input type='submit' className={botaoClasse} style={botaoCss}></input>

                </form>
            </div>
        );
    }
}

export default FormMessage;