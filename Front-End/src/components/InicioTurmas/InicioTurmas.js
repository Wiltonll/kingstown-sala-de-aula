import * as React from 'react';
import styles from './InicioTurmas.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const InicioTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const userRole = localStorage.getItem('role');
  const userId = localStorage.getItem(userRole === 'user' ? 'aluno_id' : 'professor_id');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTurmas = async () => {
      let url = 'http://localhost:3000/turma';
      if (userRole === 'user') {
        url = `http://localhost:3000/turma/aluno/${userId}`;
      }
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setTurmas(data);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error);
      };
    };

    fetchTurmas();
  }, [userRole, userId]);

  const handleCardClick = (turma_id) => {
    // Navega para a tela do mural da turma
    navigate(`mural/${turma_id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {turmas.map((turma) => (
          <div onClick={() => handleCardClick(turma.id)} key={turma.id} className={styles.card} style={{ background: turma.bg }}>
            <div className={styles.avatar}>
              {turma.nome.charAt(0)}
            </div>
            <div className={styles.content}>
              <h2 className={styles.nome}>{turma.nome}</h2>
              <p className={styles.descricao}>{turma.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InicioTurmas;
