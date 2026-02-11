

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
        <img className="headerLogo" src={ isDarkMode ? "/unectBlueLogo.svg" : "/unectWhiteLogo.svg"} alt="Logo do uTask" />
        <h1 className="headerTitle">uTask 3.0</h1>
        
        <input type='checkbox' className="switchInput" id="themeSwitch" checked={isDarkMode} onChange={() => {console.log("Clicou! Mudando para:", !isDarkMode); setIsDarkMode(!isDarkMode)}}></input>
          <label htmlFor="themeSwitch" className="switchLabel">
            <span className="material-icons" style={{marginLeft: '3px' ,visibility: isDarkMode? 'hidden' : 'visible', zIndex: 1, color: '#FBB910'}}>light_mode</span>
            <span className="material-icons" style={ {marginRight:'3px',visibility: isDarkMode? 'visible' : 'hidden', zIndex: 1, display: 'block', color: 'black'}}>dark_mode</span>
          </label>
        
      </div>
      )}
    </header>
  );
}

