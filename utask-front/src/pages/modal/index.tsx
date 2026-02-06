import './style.css';
import check from '../../assets/check.svg';

interface ModalProps {
    isOpen: boolean;
    titulo: string;
    mensagem: string;
}

export function Modal({isOpen,titulo, mensagem}: ModalProps) {
    if (!isOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className='modal-cadastro'>
                <div className='tituloModal'> <img src={check} alt="Check Icon" className="check-icon" /><p id='titulo'>{titulo}</p></div>
                <div className='textoModal'><p>{mensagem}</p></div>
            </div>
        </div>
    );
}