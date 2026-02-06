import { Route, Routes } from 'react-router';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
      
    </>
  )
}

export default App
