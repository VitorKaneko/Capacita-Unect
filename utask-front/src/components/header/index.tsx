import './style.css'; 
import { useState, useEffect } from 'react';

interface HeaderProps {
  className?: string;
  showContent?: boolean;
}

export function Header({showContent = true, className }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <header className={`headerStyle ${className || ''}`}>

      {showContent && (
      <div className='headerContent'>
        <img className="headerLogo" src="/unectWhiteLogo.svg" alt="Logo do uTask" />
        <h1 className="headerTitle">uTask 3.0</h1>
        
        <input type='checkbox' className="switchInput" id="themeSwitch" checked={isDarkMode} onChange={() => {console.log("Clicou! Mudando para:", !isDarkMode); setIsDarkMode(!isDarkMode)}}></input>
          <label htmlFor="themeSwitch" className="switchLabel">
            <img src='lightmode.svg' alt="Modo claro"/>
            <img src="darkmode.svg" alt="Modo escuro" />
          </label>
        
      </div>
      )}
    </header>
  );
}

