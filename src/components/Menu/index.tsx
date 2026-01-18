import { useState, useEffect } from 'react';
import styles from './Styles.module.css';
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvailableThemes = 'dark' | 'light';
export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>,
    };

    function handleTeamChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,){
        event.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
            return nextTheme;
        });
    }

    useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme)
            localStorage.setItem('theme', theme);
        }, [theme]);

  return <nav className={styles.menu}>
    <a className={styles.menuLink} href='#' title='Ir para a Home'>
        <HouseIcon/>
    </a>
    <a className={styles.menuLink} href='#' title='Ver Histórico'>
        <HistoryIcon/>
    </a>
    <a className={styles.menuLink} href='#' title='Configurações'>
        <SettingsIcon/>
    </a>
    <a className={styles.menuLink} href='#' title='Mudar Tema' onClick={(event) => handleTeamChange(event)}>
        {nextThemeIcon[theme]}
    </a>
  </nav>;
}
