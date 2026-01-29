import { RouterLink } from '../RouterLink';
import styles from './Styles.module.css';
import { TimerIcon } from 'lucide-react';

export function Logo() {
  return <div className={styles.logo}>
    <RouterLink className={styles.logoLink} href='#'>
        <TimerIcon/>
        <span>Chronos</span>
    </RouterLink>
  </div>;
}
