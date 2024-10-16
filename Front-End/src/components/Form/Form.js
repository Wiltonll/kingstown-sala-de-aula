// src/components/Form/index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import styles from './Form.module.css';
import Image from '../../img/logo_branco_png.png';

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Exibir um alerta com os dados (remova ou altere conforme necessário)
    alert("Enviando os dados: " + username + " - " + password);

    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, verificar se os dados estão corretos.

    // Se a autenticação for bem-sucedida, redirecionar para 'InicioTurmas'
    navigate('/inicio-turmas');

    // Apenas para depuração
    console.log("Teste", username, password);
    console.log("Envio");
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img src={Image} alt="Logo da empresa" />
        <form onSubmit={handleSubmit}>
          <div className={styles.inputfield}>
            <input 
              type="text" 
              placeholder="Login" 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
            <AccountCircleIcon className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input 
              type="password" 
              placeholder="Senha" 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <LockIcon className={styles.icon} />
          </div>
          <a href="#" className={styles.link}>Esqueci a senha</a>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
