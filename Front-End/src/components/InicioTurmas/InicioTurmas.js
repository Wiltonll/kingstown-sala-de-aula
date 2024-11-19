import * as React from 'react';
import styles from './InicioTurmas.module.css';

const InicioTurmas = () => {
  // Lista de turmas
  const turmas = [
    { id: 1, nome: 'Turma A', descricao: 'Descrição Turma', bg: 'linear-gradient(135deg, #FFD111, #FFF900)' },
    { id: 2, nome: 'Turma B', descricao: 'Descrição Turma', bg: 'linear-gradient(135deg, #FFD111, #FFF900)' },
    { id: 3, nome: 'Turma C', descricao: 'Descrição Turma', bg: 'linear-gradient(135deg, #FFD111, #FFF900)' },
    { id: 4, nome: 'Turma D', descricao: 'Descrição Turma', bg: 'linear-gradient(135deg, #FFD111, #FFF900)' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Turmas</h1>
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
