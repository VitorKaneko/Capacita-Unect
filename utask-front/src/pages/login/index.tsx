import { Header } from '../../components/header';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import loginImage from '../../assets/loginImage.svg';
import './style.css';

export function Login() {
  return (
    <>
      <Header />  

      <div className="loginImage">
        <img id="loginImage" src={loginImage} alt="Ilustração de Login" />
      </div>
      <div className="loginForm">
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

          <Botao
            type='submit'
            text='Entrar'
            className='botao-entrar' 
          />
        </form>
      </div>
      


      
    </>
  )
}
