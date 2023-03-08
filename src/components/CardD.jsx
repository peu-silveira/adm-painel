import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, ListGroup } from 'react-bootstrap';

const CardD = () => {
  return (
   
   <Card style={{ width: '25rem' }}>
      <Card.Header>nome do produto</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>preço produto</ListGroup.Item>
        <ListGroup.Item>foto_produto.png</ListGroup.Item>
        <ListGroup.Item>tipo do produto</ListGroup.Item>
        <ListGroup.Item>descrição do produto</ListGroup.Item>
        <ListGroup.Item><Button variant="outline-secondary">Salvar</Button>{' '}<Button variant="outline-danger">Excluir definitivamente</Button></ListGroup.Item>
      </ListGroup>
    </Card>

  )
}

export default CardD