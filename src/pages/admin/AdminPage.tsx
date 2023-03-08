import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import '../admin/AdminPage.css';
import ButtonsA from '../../components/ButtonsA';
import { Button } from 'react-bootstrap';
import TableA from '../../components/TableA';
import { Link } from 'react-router-dom';



function AdminPage() {
    return (
        <>
        <Header></Header>
        <div className="h"><h3>Painel Administrativo</h3><p>Bem-vindo, Admin!</p></div>
        <div className="buttonsA"><ButtonsA></ButtonsA></div>
        <div className="buttonNovo"><Link to="/cadastro"><Button variant="secondary">adicionar novo produto</Button></Link></div>
        <div className="tableA"><TableA></TableA></div>
        </>
    )
}

export default AdminPage