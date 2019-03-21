import React, { Component } from 'react';
import MenuLateral from '../components/menu-lateral';

class Contato extends Component {
    render() {
        return (
            <div className='w-100 h-100 position-absolute container-fluid bg-dark'>
            <MenuLateral></MenuLateral>
        </div>
        );
    }
}

export default Contato;