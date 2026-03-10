import './style.css'
import { useState } from 'react';

// 1. Adicionamos o 'id' e a função 'onDeleteSuccess' na interface
interface cardProps {
    id: string; // <-- NOVO
    titulo: string;
    descricao: string;
    situacao: string;
    onDeleteSuccess: () => void; // <-- NOVO (Avisa o pai para recarregar a tela)
}

export function Card({ id, titulo, descricao, situacao, onDeleteSuccess }: cardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

    function abrirBotao() { setIsOpen(!isOpen); }
    function toggleDescricao() { setIsDescriptionOpen(!isDescriptionOpen); }

    // 2. A função que faz a mágica de apagar
    async function handleDelete() {
        // Confirmação por segurança (boa prática de UX!)
        const confirmar = window.confirm("Tem certeza que deseja excluir esta tarefa?");
        if (!confirmar) return;

        try {
            const response = await fetch(`http://localhost:3333/tasks/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                onDeleteSuccess(); // Avisa o Quadro.tsx: "Ei, apaguei! Atualiza a tela!"
            } else {
                alert("Erro ao excluir a tarefa.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    }

    return(
        <div className='wrapperCard'>
            <div className='tituloCard'>
                <h3><b>{titulo}</b></h3>
                <span id='btnMais' onClick={abrirBotao} className='material-icons' style={{cursor: 'pointer'}}>more_vert</span>
            </div>
            
            {/* 3. Conectamos o botão com a função handleDelete */}
            {isOpen && (
                <button className='btnExcluir' onClick={handleDelete} style={{cursor: 'pointer'}}>
                    <span className='material-icons'>delete_outline</span>Excluir
                </button>
            )}

            {/* ... restante do código da descrição (pode manter exatamente como estava) ... */}
            <div className='descricaoCard' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
                <div id='btnDescricao' onClick={toggleDescricao} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#3867D6' }}>
                    <span id='txtDescricao' style={{ fontSize: '0.9rem', fontWeight: '500', marginRight: '4px' }}>
                        {isDescriptionOpen ? 'Esconder descrição' : 'Ler descrição'}
                    </span>
                    <span className='material-icons' style={{ fontSize: '1.2rem' }}>
                        {isDescriptionOpen ? 'expand_less' : 'expand_more'}
                    </span>
                </div>

                {isDescriptionOpen && (
                    <div className='conteudoDescricaoContainer' style={{ width: '100%', marginTop: '0.8rem' }}>
                        <p className='descricaotxt' style={{ margin: 0, fontSize: '0.9rem', color: '#333', textAlign: 'left', lineHeight: '1.4' }}>
                            {descricao}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}