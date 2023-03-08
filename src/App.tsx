
import CadastroPage from './pages/cadastro/CadastroPage';
import DetalhesPage from './pages/detalhes/DestalhesPage';
import AdminPage from './pages/admin/AdminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<AdminPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/detalhes' element={<DetalhesPage />} />

       </Routes>
      </BrowserRouter> 
     

  )
}

export default App;
