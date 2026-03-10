import './style.css';
import { ModalCard } from '../../pages/modalCard';
import { Card } from '../../components/card';
import { useState, useEffect } from 'react';

interface QuadroProps {
  className: string;
  titulo: string;
  exibirBotao?: boolean;
}

// Tipagem do que vem do nosso Fastify/PostgreSQL
interface Task {
  id: string;
  title: string;
  description: string;
}

export function Quadro({ className, titulo, exibirBotao }: QuadroProps) {
    const [isCreating, setIsCreating] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    async function carregarTasks() {
        try {
            const response = await fetch('http://localhost:3333/tasks');
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Erro ao buscar tarefas:", error);
        }
    }

    useEffect(() => {
        carregarTasks();
    }, []);

    return (
        <div className={`quadroReadyContainer ${className}`}>
            <div className='tituloQuadros'>
                <p>{titulo}</p>
                {exibirBotao && (
                    <span onClick={() => setIsCreating(true)} className="material-icons" style={{ border: "solid 0.15rem #3867D6", borderRadius: "100%", color: "#3867D6", cursor: "pointer" }}>add</span>
                )}
            </div>

            <div className='containerCards'>
                {isCreating && (
                    <ModalCard 
                        isOpen={isCreating} 
                    
                        onClose={() => {
                            setIsCreating(false);
                            carregarTasks(); 
                        }} 
                        titulo={titulo} 
                        descricao="Nova tarefa"
                    />
                )}

                
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Card 
                            key={task.id} 
                            id={task.id}    
                            titulo={task.title} 
                            descricao={task.description || "Sem descrição"} 
                            situacao={titulo} 
                            onDeleteSuccess={carregarTasks} 
                        />
                    ))
                ) : (
                    <p style={{ fontSize: '0.8rem', color: 'gray' }}>Nenhuma tarefa ainda.</p>
                )}
            </div>
        </div>
    );
}