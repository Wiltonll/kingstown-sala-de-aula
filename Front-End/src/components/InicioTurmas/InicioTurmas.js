import * as React from 'react';
import styles from './InicioTurmas.module.css';
import { useState, useEffect } from 'react';

const InicioTurmas = () => {
  const [turmas, setTurmas] = useState([]);
  const userRole = localStorage.getItem('role');
  const userId = localStorage.getItem(userRole === 'user' ? 'aluno_id' : 'professor_id');

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

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {turmas.map((turma) => (
          <div key={turma.id} className={styles.card} style={{ background: turma.bg }}>
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
