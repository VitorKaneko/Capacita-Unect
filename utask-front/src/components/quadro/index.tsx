import './style.css';
import { ModalCard } from '../../pages/modalCard';

interface QuadroProps {
  className: string;
  titulo: string;
}

export function Quadro( { className, titulo }: QuadroProps) {

    return(
        <div className={`quadroReadyContainer ${className}`}>
            <div className='tituloQuadros'>
                <p>{titulo}</p>
                <span className="material-icons" style={{border: "solid 0.15rem #3867D6", borderRadius:"100%", color: "#3867D6",cursor:"pointer" }}>add</span>   
            </div>
            <div className='containerCards'>
                <ModalCard className="modalCard" titulo="Nova Task" descricao="Descrição da nova task" />
            </div>
        </div>
    );
}