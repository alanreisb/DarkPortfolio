import React, { Component } from 'react';



const tituloContainerCss = {


    top: '35%',
    position: 'absolute',
    textAlign: 'left',
    alignContent: 'center',
    overflow: 'visible',
    fontSize: '26pt',
    userSelect: 'none',




};

const textTypingCss = {

    color: 'white',
    textAlign: 'left',
    lineHeight: '1',
    fontWeight: '600',
    overflow: 'hidden', /* Ensures the content is not revealed until the animation */
    borderRight: '.15em solid transparent', /* The typwriter cursor */
    whiteSpace: 'nowrap', /* Keeps the content on a single line */
    margin: '0 auto', /* Gives that scrolling effect as the typing happens */
    letterSpacing: '.15em', /* Adjust as needed */
    width: '0',
    animationFillMode: 'forwards'

};


const tituloCss = {
    position:'absolute',
    top:'57%',
    color: 'white',
    textAlign: 'left',
    lineHeight: '1',
    fontWeight: '600',
    overflow: 'visible', /* Ensures the content is not revealed until the animation */
    whiteSpace: 'nowrap', /* Keeps the content on a single line */
    margin: '0 auto', /* Gives that scrolling effect as the typing happens */
    letterSpacing: '.10em', /* Adjust as needed */
    fontSize:'26pt',
    fontWeight:'700',



};



//Classe
class Titulo extends Component {
    render() {

        return (
            <div>
                <div id='titulo-container' style={tituloContainerCss} className='' >

                    <h1 style={textTypingCss} className='digitacao'>Alan Reis</h1>
                    <h1 style={textTypingCss} className='digitacao delays-1_5s'>  Desenvolvedor</h1>
                    <h1 style={textTypingCss} className='digitacao delays-3s'>Front-end</h1>
                </div>
                <div style={tituloCss} className='text-justify mt-5 animated fadeInUp slower delays-5s'>

                    <text className='text-justify ' >REACTJS - NODEJS - .NET</text></div>

            </div>
        );
    }
}
export default Titulo;