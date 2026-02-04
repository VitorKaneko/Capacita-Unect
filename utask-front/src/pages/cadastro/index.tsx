import { Header } from '../../components/header';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import { LinhaHorizontal } from '../../components/linhahorizontal';
import cadastroImage from '../../assets/cadastroImage.svg';
import './style.css';

export function Cadastro() {
  return (
    <>
      <Header />  
      <div className="cadastroTela">
        <div className="cadastroForm">

          <h1 id="tituloCadastro">uTask 3.0</h1>
          <LinhaHorizontal/>

          <form>
            <p>Nome de usuário</p>
            <Input
              type="string"
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
            />

            <p>Confirmar senha</p>
            <Input
              type="password"
              placeholder="Digite sua senha novamente"
              className="input-confirmar-senha"
            />

            <Botao
              type='submit'
              text='Criar Cadastro'
              className='botao-criar-cadastro' 
            />
          </form>
        </div>

        <div className="cadastroImage">
          <img id="cadastroImage" src={cadastroImage} alt="Ilustração de Login" />
        </div>
      </div>
    </>
  )
}
