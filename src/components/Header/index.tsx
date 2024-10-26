import styles from './styles.module.scss'
import Link from 'next/link';
import { SignInButton } from '../SignInButton';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>  
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo Meu board" />
                </Link>
                <nav>
                    <Link legacyBehavior href="/">                    
                        <a>Home</a>
                    </Link>
                    <Link legacyBehavior href="/board">
                        <a>Meu Board</a>
                    </Link>
                </nav>
                
                <SignInButton/>
            </div>
        </header>
    )
}