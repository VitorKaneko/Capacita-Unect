import './style.css'; 



interface InputProps {
  type: string;        
  placeholder: string; 
  className: string;
}

export function Input({ type, placeholder, className }: InputProps) {
  return (
    <div className="input-container">
      <input 
        type={type} 
        placeholder={placeholder} 
        className= {`input-padrao ${className || ''}`}
      />
    </div>
  );
}