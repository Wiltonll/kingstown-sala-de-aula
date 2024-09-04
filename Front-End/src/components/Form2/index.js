import "./Form.module.css"
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import styles from './Form.module.css'

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
    <div className="container">
        <form onSubmit = {handleSubmit}>
             <h1>Faça seu login</h1>
             <div> 
                <input type="text" placeholder= "Matricula" onChange={(e) => setUsername(e.target.value)}/>
                <AccountCircleIcon className= "icon" />
             </div>
             <div> 
                <input type="password" placeholder= "Senha" onChange={(e) => setPassword(e.target.value)}/>
                <LockIcon className="icon" />
            </div>
            <a href="#"> Esqueci a senha</a>
             <button>Entrar</button>
        </form>
      
    </div>
  )
}

export default Form2;
