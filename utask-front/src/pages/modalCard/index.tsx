import './style.css';
import { Botao } from '../../components/button';
import { Input } from '../../components/input';
import { useState, type FormEvent } from 'react'; // Importamos o useState

interface ModalCardProps {
    isOpen?: boolean;
    onClose: () => void;
    className?: string;
    titulo: string;
    descricao: string;
}

export function ModalCard({ isOpen, onClose, className, titulo, descricao }: ModalCardProps) {
  
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    if (!isOpen) return null;

   
    async function handleCreateTask(event: FormEvent) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3333/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: taskTitle,
                    description: taskDescription,
                    userId: "2553e074-6396-40a0-9a12-4c885bf66709" 
                }),
            });

            if (response.ok) {
                
                setTaskTitle(''); 
                setTaskDescription(''); 
                onClose();
            }
        } catch (error) {
            console.error("Erro ao conectar com o backend:", error);
        }
    }

    return (
        <div className={`divContainer ${className}`}>
           
            <form className='divCard' onSubmit={handleCreateTask}>
                <div className="divTituloCard">
                    <h1 className='Titulo'><u>Nova Task</u></h1>
                    <span onClick={onClose} className="material-icons" style={{ color: "#3867D6", borderRadius: "100%", border: "0.15rem solid #3867D6", cursor: "pointer" }}>close</span>
                </div>

                <p><b>Titulo *</b></p>
                
                <Input 
                    type='text' 
                    placeholder={titulo} 
                    className='inpTitulo'
                    value={taskTitle}
                    onChange={(e: any) => setTaskTitle(e.target.value)} 
                />

                <p><b>Descrição</b></p>
                <textarea 
                    style={{ backgroundColor: 'var(--bg-cards)', color: 'var(--text-color)' }} 
                    placeholder={descricao} 
                    className='txtAreaDesc'
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>

                <Botao type='submit' text='Criar task' className='btnCriarTask' />
            </form>
        </div>
    );
}