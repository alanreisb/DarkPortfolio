import React, { Component } from 'react';
//Imagem
import Envelope from '../imagens/icones contato/envelope.svg';
//Classes
const formClasse = 'col-5  float-right position-relative text-left fonte-secundaria ';
const formTituloClasse = 'w-100 d-flex flex-row'; 
const labelClass = 'mt-3 mb-0 ';
const botaoClasse = 'btn btn-dark float-right  btn-lg col-4';



class FormMessage extends Component {
    render() {
        return (
            <div className={`form-mensagem ${formClasse}`} >
                <form className='formulario'>
                    <div className={`${formTituloClasse} titulo-form`}> 
                    <img id='letter' src={Envelope} className='icone-form mr-4 animated fadeInLeft' ></img>
                    <h2 className='mr-3 mt-3'>Entre em contato</h2>
                  
                    
                    </div>
                    <h4  className='subtitulo fonte-secundaria text-left'>Deixe sua mensagem...</h4>

                    <label className={`etiqueta ${labelClass}`}>Nome</label>
                    <br />
                    <input type='text' className='col-5 p-2 rounded'></input>
                    <br />


                    <label className={`etiqueta ${labelClass}`}>Email</label>
                    <br />
                    <input type='email' className='col-9 p-2 rounded'></input>
                    <br />
                    <label className={`etiqueta ${labelClass}`}>Mensagem</label>
                    <textarea className='col-11 p-2 rounded' rows='4' style={{ resize: 'none' }}></textarea>

                    <input type='submit' className={`botao ${botaoClasse}`} ></input>

                </form>
            </div>
        );
    }
}

export default FormMessage;