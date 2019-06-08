import React, { Component } from 'react';

const TituloCss = {
    color: 'white',
    fontSize: '1em',
    fontFamily: 'verdana',
    fontWeight: '560'


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
            <div className='text-left mt-0 mb-2 w-100  m-0 p-0' style={{backgroundColor:'black',borderColor:'black', height:'60%!important'}}>
                
                <div class="row"  >
                    <div class="col-md-10" >
                        <div class={`progress ${this.props.cor}`} style={{height:'70%'}}>
                            <h3 class="progress-title">{this.props.titulo}</h3>
                            <div class="progress-bar">
                                <div class="progress-value" style={{width: `${this.props.porcentagem}%` }}>{this.props.porcentagem}%</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>

        );
    }
}

export default canvasHabilidades;