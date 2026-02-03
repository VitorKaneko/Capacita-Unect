import './style.css'; 

interface BotaoProps {
  type?: 'button' | 'submit';  
  text: string; 
  className?:string;
}

export function Botao({ type, text, className }: BotaoProps) {
  return (
    <button type={type} className={`botaoStyle ${className || ''}`}>{text}</button>
  );
}