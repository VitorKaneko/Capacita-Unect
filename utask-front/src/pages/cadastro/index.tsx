import { Header } from '../../components/header';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import { LinhaHorizontal } from '../../components/linhahorizontal';
import { Modal } from '../modal';
import cadastroImage from '../../assets/cadastroImage.svg';
import './style.css';
import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

export function Cadastro() {
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [erroSenha, setErroSenha] = useState<string | null>(null);
  const navigate = useNavigate()
  
  function comparaSenha(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErroSenha(null);
    if (senha !== confirmarSenha){
      setErroSenha('Senhas não combinam, tente novamente.');
      return;
    }else{
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        navigate('/login');
      }, 2000);
    }

  }
  return (
    <>
      <Header showContent={false} />  
      <div className="cadastroTela">
        <div className="cadastroForm">

          <h1 id="tituloCadastro">uTask 3.0</h1>
          <LinhaHorizontal/>

          <form onSubmit={comparaSenha}>
            <p>Nome de usuário</p>
            <Input
              type="text"
              placeholder="Digite seu nome de usuário"
              className='input-usuario'
            />
            
            <p>E-mail</p>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              className='input-email'
            />

            <p>Senha</p>
            <Input
              type="password"
              placeholder="Digite sua senha"
              
              className="input-senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              error={erroSenha}
            />

            <p>Confirmar senha</p>
            <Input
              type="password"
              placeholder="Digite sua senha novamente"
              className="input-confirmar-senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              error={erroSenha}
            />

            <Botao
              type='submit'
              text='Criar Cadastro'
              className='botao-criar-cadastro' 
            />
          </form>

          <Modal 
            isOpen={isModalOpen}
            titulo="Conta criada com sucesso"
            mensagem="Um instante, iremos te redirecionar ao login!"
          />
        </div>

        <div className="cadastroImage">
          <img id="cadastroImage" src={cadastroImage} alt="Ilustração de Login" />
        </div>
      </div>
    </>
  )
}
