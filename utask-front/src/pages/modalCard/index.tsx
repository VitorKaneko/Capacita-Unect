import './style.css';
import {Botao} from '../../components/button';
import {Input} from '../../components/input';
import { useState, type FormEvent } from 'react';
interface ModalCardProps {
    isOpen?: boolean;
    className?: string;
    titulo: string;
    descricao: string;
}

export function ModalCard( { isOpen, className, titulo, descricao }: ModalCardProps) {
    if(!isOpen) return null;
    return(
        <div className={`divContainer ${className}`}>
            <div className='divCard'>
                <div className="divTituloCard">
                    <h1 className='Titulo'><u>Nova Task</u></h1>
                    <span className="material-icons" style={{color: "#3867D6", borderRadius:"100%", border: "0.15rem solid #3867D6", cursor:"pointer"}}>close</span>
                </div>      
                <p><b>Titulo *</b></p>
                <Input type='text' placeholder='Titulo da tesk' className='inpTitulo' />         
                <p><b>Descrição</b></p>
                <textarea placeholder={descricao} className='txtAreaDesc'></textarea>
                <Botao type='submit' text='Criar task' className='btnCriarTask'/>
            </div>
        </div>

    );
}