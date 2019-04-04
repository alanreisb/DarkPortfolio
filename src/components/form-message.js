import React, { Component } from 'react';

const formClasse = 'col-6 h-100 float-right position-relative   rounded p-4 pl-5';

const formCss = {
    backgroundColor:'black',
     height:'100%',
     fontFamily:'arial !important', 
     marginRight:'10%',
     background:'rgba(50,50,50,.3)',
}

const tituloCss = {
    fontFamily: 'arial !important',
    color:'white',
    fontWeight:'600',
    
}

const inputClass = 'col-11 p-2 rounded';

const inputCss = {
}

const labelClass = 'mt-3 mb-0';

const labelCss = {
    fontFamily: 'arial !important',
    color:'white',
    fontWeight:'600',
    fontSize:'1.2em'
};
const botaoClasse = 'btn btn-dark float-right mt-2 btn-lg col-4';

const botaoCss = {
    marginRight:'8%',
    color:'white',
    fontWeight:'600',
    fontSize:'1.2em'
};

class FormMessage extends Component {
    render() {
        return (
            <div>
                <form className={formClasse} style={formCss}>
                    <h3 style={tituloCss}>Mensagem:</h3>

                    <label className={labelClass} style={labelCss}>Nome</label>
                    <input type='text'  className={inputClass} style={inputCss}></input>
                    
                    
                    
                    <label  className={labelClass} style={labelCss}>Email</label>
                    <input type='email' className={inputClass}></input>
                    
                    <label  className={labelClass} style={labelCss}>Mensagem</label>
                    <textarea className='col-11 p-2 rounded' rows='5' style={{resize:'none'}}></textarea>

                    <input type='submit'className={botaoClasse} style={botaoCss}></input>

                </form>
            </div>
        );
    }
}

export default FormMessage;