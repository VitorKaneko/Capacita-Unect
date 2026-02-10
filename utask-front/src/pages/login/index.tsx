import { Header } from '../../components/header';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import { LinhaHorizontal } from '../../components/linhahorizontal';
import loginImage from '../../assets/loginImage.svg';
import './style.css';
import { Link } from 'react-router';
import { useState, type FormEvent } from 'react';

export function Login() {

  const [senha, setSenha] = useState('');
  const [errorSenha, setErroSenha] = useState<string | null>(null);

  function verificaSenha(event: FormEvent) {
    event.preventDefault();
    setErroSenha(null);
    
    if(senha != '123456'){
      setErroSenha('Senha incorreta, tente novamente.');
      return;
    }

  }

  return (
    <>
      <Header />  
      <div className="loginScreen">
        <div className="loginImage">
          <img id="loginImage" src={loginImage} alt="Ilustração de Login" />
        </div>
        <div className="loginForm">

          <h1 id="tituloLogin">uTask 3.0</h1>

          <form onSubmit={verificaSenha}>
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
              error = {errorSenha}
            />
            <p id='recuperacaoLogin'>Esqueceu a senha?</p>

            <Botao
              type='submit'
              text='Entrar'
              className='botao-entrar' 
            />
          </form>
          <LinhaHorizontal/>
          

          <div className="cadastroLink">
            <span>Não tem cadastro? </span>
            <Link to="/cadastro" id="criarConta">
              Crie uma conta
            </Link>
          </div>

        </div>
        

      </div>


      
    </>
  )
}
