import { Header } from '../../components/header';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import { LinhaHorizontal } from '../../components/linhahorizontal';
import loginImage from '../../assets/loginImage.svg';
import './style.css';

export function Login() {
  return (
    <>
      <Header />  
      <div className="loginScreen">
        <div className="loginImage">
          <img id="loginImage" src={loginImage} alt="Ilustração de Login" />
        </div>
        <div className="loginForm">

          <h1 id="tituloLogin">uTask 3.0</h1>

          <form>
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
            />
            <p id='recuperacaoLogin'>Esqueceu a senha?</p>

            <Botao
              type='submit'
              text='Entrar'
              className='botao-entrar' 
            />
          </form>
          <LinhaHorizontal/>

          <p id="criarConta">Não tem cadastro? Crie uma conta</p>
        </div>
        

      </div>


      
    </>
  )
}
