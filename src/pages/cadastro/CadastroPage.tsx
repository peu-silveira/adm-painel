import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import '../cadastro/CadastroPage.css';
import FormC from '../../components/FormC';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function CadastroPage() {
    return (
        <>  <Header></Header>
           <Link id='voltar' to='/admin'><Button id="botao1" variant="outline-dark">Voltar</Button></Link>
            <div className="main">
                <h2>Cadastro de Produto</h2>
                <FormC></FormC>
            </div>
        </>
    );
}


export default CadastroPage;