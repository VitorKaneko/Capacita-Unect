import './style.css';
import { useState, useEffect } from 'react';

const API_URL = 'https://api.adviceslip.com/advice';
const TRANSLATE_API = 'https://api.mymemory.translated.net/get?langpair=en|pt';

interface DailyTextData {
    slip: {
        id: number;
        advice: string;
    }
}

export async function getDailyText() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Erro ao buscar texto diário');
    }
    const textoConselho = await response.json();
    const textoConteudo = textoConselho.slip.advice;
    const traduzido = await fetch(`${TRANSLATE_API}&q=${encodeURIComponent(textoConteudo)}`);

        if(!traduzido.ok){
            throw new Error('Erro ao traduzir texto');
        }

        const textoTraduzido = await traduzido.json();
        
        return {
            slip: {
                id: textoConselho.slip.id,
                advice: textoTraduzido.responseData.translatedText
            }
        }

}


export function DailyText() {
    const [dailyText, setDailyText] = useState<DailyTextData | null>(null);
    
    useEffect(() => {
        async function carregarTexto(){
            const text = await getDailyText();
            setDailyText(text);
        }
        carregarTexto();
    }, []);

    return(
        <div className="dailyTextContainer">
            <div className='dailyIcon'></div>
            <div className='dailyTitulo'></div>
            <div className='dailyTexto'>{dailyText?.slip.advice || "Carregando texto do dia..."}</div>
            
            
        </div>
    );
    
}