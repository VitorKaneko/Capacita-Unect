import './style.css'; 
import { useState, type InputHTMLAttributes } from 'react';
import openEye from '../../assets/openEye.svg';
import closedEye from '../../assets/closedEye.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;        
  placeholder: string; 
  className: string;
  error?: string | null;
}

export function Input({ type, placeholder, className, error, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-container">
      <div className='input-wrapper'> 
        <input 
          className= {`input-padrao ${error? 'input-erro' : ''} ${className || ''}`}
          type={currentType} 
          placeholder={placeholder} 
          {...props}
        />
        {isPassword && (
          <button type='button' className='buttonEye' onClick={() => setShowPassword(!showPassword)}>
            <img src={showPassword ? openEye : closedEye} alt='Visibilidade da Senha'className='buttonEye'/>
          </button>
        )}
      </div>
      {error && (
        <span className='erroMessage'>{error}</span>
      )}
    </div>
  );
}