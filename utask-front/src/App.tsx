import { Route, Routes } from 'react-router';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';
import { Kanban } from './pages/kanban';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
      
    </>
  )
}

export default App
