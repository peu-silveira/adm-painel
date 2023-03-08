import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const ButtonsA = () => {
    return (
        <>
        <Button variant="outline-dark" size="lg">Produtos</Button>{' '}
        <Button variant="outline-dark" size="lg">Usuários</Button>{' '}
        <Button variant="outline-dark" size="lg">Pedidos</Button>{' '}
        </>
    )
}
 
export default ButtonsA