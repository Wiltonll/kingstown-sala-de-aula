import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import styles from './Form.module.css'
import Image from '../../img/logo_branco_png.png';

import { useState } from "react";

const Form2 = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        alert("Enviando os dados:" + username + " - " + password)

        console.log("Teste",username, password)
        console.log("Envio")
    }

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src={Image} alt=""/>
        <form onSubmit = {handleSubmit}>
             <h1>Faça seu login</h1>
             <div className={styles.inputfield}> 
                <input type="text" placeholder= "Login" onChange={(e) => setUsername(e.target.value)}/>
                <AccountCircleIcon className={styles.icon}/>
             </div>
             <div className={styles.inputfield}>  
                <input type="password" placeholder= "Senha" onChange={(e) => setPassword(e.target.value)} />
                <LockIcon className={styles.icon} />
            </div>
            <a href="#" className={styles.link}> Esqueci a senha</a>
            <button>Entrar</button>
        </form>    
      </div>       
    </div>
  )
}

export default Form2;
