import React, { Component } from 'react';
/*imagens*/
import Music from '../imagens/player/music.png';

class player extends Component {
    render() {
        return (
            <div className='player'>
                <iframe width="426" height="240" src="https://www.youtube.com/embed/videoseries?list=PLnNJsI412dO8Q69cvpbl3yXJdjeSpFOtC" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
        );
    }
}

export default player;