import './style.css'
import { Header } from '../../components/header';
import { DailyText } from '../../components/dailytext';

export function Kanban() {
    return (
        <>
            <Header />
            <div className="dailyMessageContainer">
                <DailyText />
            </div>
        </>
    );
}