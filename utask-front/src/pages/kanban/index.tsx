import './style.css'
import { Header } from '../../components/header';
import { DailyText } from '../../components/dailytext';
import { Footer }  from '../../components/footer';
import { Quadro } from '../../components/quadro'; 

export function Kanban() {
    
    return (
        <div className='kanbanPage'>
            <Header className='headerKanban' />
            <div className='kanbanMain'>
                <div className="dailyMessageContainer">
                    <div className="dailyIcon">
                        <span className="material-icons" style={{color: "var(--color-daily-icon)", backgroundColor: "var(--bg-icon)", fontSize: "3rem", borderRadius:"50%", border: "0.5rem solid var(--icon-border)", padding:"0.5rem"}}>tips_and_updates</span>
                    </div>
                    <div className="dailyText">
                        <h1 className="dailyTitle">Frase do dia</h1>
                        <DailyText/>
                    </div>
                </div>

                <div className="quadrosContainer"> 
                    <Quadro exibirBotao={true} className='quadroFazer' titulo='A fazer'/>
                    <Quadro className='quadroAndamento' titulo='Em andamento'/>
                    <Quadro className='quadroConcluido' titulo='Concluído'/>    
                </div>
            </div>
            <Footer />
        </div>
    );
}