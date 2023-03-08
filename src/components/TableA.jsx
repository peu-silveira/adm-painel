import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const TableA = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>nome_do_produto</td>
            <td>categoria_do_produto</td>
            <td>preço_do_produto</td>
            <td><Link to="/detalhes"><Button variant="outline-dark">ver detalhes</Button></Link>{' '}<Button variant="outline-danger">excluir</Button></td>
          </tr>
          <tr>
            <td>nome_do_produto</td>
            <td>categoria_do_produto</td>
            <td>preço_do_produto</td>
            <td><Link to="/detalhes"><Button variant="outline-dark">ver detalhes</Button></Link>{' '}<Button variant="outline-danger">excluir</Button></td>
          </tr>
          <tr>
            <td>nome_do_produto</td>
            <td>categoria_do_produto</td>
            <td>preço_do_produto</td>
            <td><Link to="/detalhes"><Button variant="outline-dark">ver detalhes</Button></Link>{' '}<Button variant="outline-danger">excluir</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }

  export default TableA