"use client";

import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './styles.module.scss'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi';


export function SignInButton(){
    const {data: session} = useSession();    

    console.log(session);    

    return (session?.user?.email) ? (        
        <button
        type='button'
        className={styles.signInButton}
        onClick={() => signOut()}
        >
            <img src={session.user.image} alt="Foto usuario" />
            Olá, {session.user.name}
            <FiX color='#737380' className={styles.closeIcon} />
        </button> 
    ) : (   
        <button
        type='button'
        className={styles.signInButton}
        onClick={() => signIn()}
        >
            <FaGithub color='#ffb800'/>
            Entrar com GitHub
        </button>
    )
}