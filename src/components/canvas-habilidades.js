import React, { Component } from 'react';

const TituloCss = {
    color: 'white',
    fontSize:'0.94em',
    fontFamily:'verdana',
    fontWeight:'560'
 

}
const ContainerCanvasCss = {
    overflow: 'visible'
}
const globeCss = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '12%',
    paddingTop: '4%',
    paddingBottom: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
    perspective: '1500px',
    boxShadow: '15px 10px 80px white,-15px -10px 80px white',
    overflow: 'visible'
}

const ulGlobeCss = {
    textAlign: 'center'
}

const liGlobeCss = {
    margin: '5%',
    color: 'white',
    fontSize: '12pt',
    fontFamily: 'verdana',
    fontWeight: '570',
    textShadow: '0px 1px 1px white,-1px -1px 1px ghostwhite',

}
class canvasHabilidades extends Component {
    render() {
        return (
            <div className='text-center mt-3 mb-3'>
                <h4 style={TituloCss}>{this.props.titulo}</h4>
                <div className={`c100 p${this.props.porcentagem} mt-3 ml-3 small`}>
                    <span>{this.props.porcentagem}%</span>
                    <div class="slice ">
                        <div class="bar  " style={{borderColor:`${this.props.cor}`}}></div>
                        <div class="fill " ></div>
                    </div>
                </div>
            </div>

        );
    }
}

export default canvasHabilidades;