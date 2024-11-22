import * as React from 'react';
import styles from './InicioTurmas.module.css';
import { useState, useEffect } from 'react';
import CriarSalas from '../ProfessorDashboard/CriarSalas';

const InicioTurmas = () => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    // { id: 1, nome: 'Turma A', descricao: 'Descrição Turma', bg: 'linear-gradient(135deg, #FFD111, #FFF900)' }
    // Função para buscar as turmas
    const fetchTurmas = async () => {
      try {
        const response = await fetch('http://localhost:3000/turma');
        const data = await response.json();
        
        if (response.ok) {
          setTurmas(data); // Atualiza o estado com as turmas
        } else {
          console.error('Erro ao buscar turmas:', data.error);
        }
      } catch (error) {
        console.error('Erro de conexão:', error);
      }
    };

    fetchTurmas(); // Chama a função ao montar o componente
  }, []);

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
