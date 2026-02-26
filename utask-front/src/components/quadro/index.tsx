import './style.css';
import { ModalCard } from '../../pages/modalCard';
import { useState, type FormEvent } from 'react';

interface QuadroProps {
  className: string;
  titulo: string;
  exibirBotao?: boolean;
  onAddClick?: () => void;
}

export function Quadro( { className, titulo, exibirBotao, onAddClick }: QuadroProps) {


    return(
        <div className={`quadroReadyContainer ${className}`}>
            <div className='tituloQuadros'>
                <p>{titulo}</p>
                {exibirBotao && (
                    <span onClick={onAddClick} className="material-icons" style={{border: "solid 0.15rem #3867D6", borderRadius:"100%", color: "#3867D6",cursor:"pointer" }}>add</span>
                )}
                   
            </div>
            <div className='containerCards'>
               
            </div>
        </div>
    );
}