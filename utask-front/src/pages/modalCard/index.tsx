import './style.css';

interface ModalCardProps {
    className?: string;
    titulo: string;
    descricao: string;
}

export function ModalCard( { className, titulo, descricao }: ModalCardProps) {
    return(
        <div className={`divContainer ${className}`}>
            <div className="divTituloCard">
                <h1>Nova Task</h1>
            <span className="material-icons" style={{color: "#3867D6", borderRadius:"100%", border: "0.15rem solid #3867D6", cursor:"pointer"}}>close</span>
            </div>      
            <p>Titulo *</p>
            <input type="text" value={titulo} />
            <p>Descrição</p>
            <textarea  value={descricao}></textarea>
        </div>

    );
}