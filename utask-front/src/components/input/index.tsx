import './style.css'; 
import { useState } from 'react';
import openEye from '../../assets/openEye.svg';
import closedEye from '../../assets/closedEye.svg';

interface InputProps {
  type: string;        
  placeholder: string; 
  className: string;
}

export function Input({ type, placeholder, className }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-container">
      <div className='input-wrapper'> 
        <input 
          type={currentType} 
          placeholder={placeholder} 
          className= {`input-padrao ${className || ''}`}
        />

        {isPassword && (
          <button type='button' className='buttonEye' onClick={() => setShowPassword(!showPassword)}>
            <img src={showPassword ? closedEye : openEye} alt='Visibilidade da Senha'className='buttonEye'/>
          </button>
        )}
      </div>
    </div>
  );
}