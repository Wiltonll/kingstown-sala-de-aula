import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import styles from './Form.module.css';
import Image from '../../img/logo_branco_png.png';
import { useAuth } from '../../auth/AuthContext';
import { loginService } from './loginService';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await loginService(email, senha);

      if (data.token) {
        const userData = jwtDecode(data.token);
        setUser(userData);

        if (userData.role === 'admin') {
          navigate('/home-admin/inicio-turmas');
        } else if (userData.role === 'user') {
          navigate('/home-user/inicio-turmas');
        } 
      } else {
        setError(data.msg);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao se conectar com o servidor');
    }

    // Apenas para depuração
    console.log("Teste", email, senha);
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
              value={email} 
              placeholder="Login" 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
            <AccountCircleIcon className={styles.icon} />
          </div>
          <div className={styles.inputfield}>
            <input 
              type="password" 
              value={senha}
              placeholder="Senha" 
              onChange={(e) => setSenha(e.target.value)} 
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

export default Login;
