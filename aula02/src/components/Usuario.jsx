import React from 'react'
import Filho from './Filho';

const Usuario = () => {
    const usuarios = [
        {nome: "Marcos", idade: 29},
        {nome: "Fernanda", idade: 27},
        {nome: "Mariana", idade: 26}
    ];
    return (
        <div>
            <Filho usuarios={usuarios} />
        </div>
    )
};

export default Usuario;