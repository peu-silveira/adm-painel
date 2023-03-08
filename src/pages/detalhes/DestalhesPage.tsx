import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import '../detalhes/DetalhesPage.css';
import Button from 'react-bootstrap/Button';
import Figure from '../../components/FigureP';
import CardD from '../../components/CardD';
import { Link } from 'react-router-dom';


function DetalhesPage() {
    return (
        <>  <Header></Header>
            <Link id="voltar" to='/admin'> <Button id="botao1" variant="outline-dark">Voltar</Button></Link>
            <div className="main">
                <div className="main1">
                    <h2>Detalhe do Produto</h2>
                    <p></p>
                    <CardD></CardD>

                </div>
                <div className="main2"><Figure></Figure></div>
            </div>


        </>
    )
}

export default DetalhesPage;