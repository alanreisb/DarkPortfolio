import React, { Component } from 'react';
/*imagens*/
import Music from './imagens/player/music.png';

class player extends Component {
    render() {
        return (
            <div>
                
                <div title='Click para ouvir a playlist.' style={{width:'35px',height:'70px',boxShadow:'-1px 0.8px #939393,0px -0.8px #939393', position:'fixed',top:'85%',right:'0',borderRadius:'20px 0 0 20px', paddingTop:'20px',paddingLeft:'10px'}}>
                    <img src={Music}  style={{height:'auto',width:'80%'}} />
                </div>
            </div>
        );
    }
}

export default player;