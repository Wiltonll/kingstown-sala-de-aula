import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID da turma
import styles from './MuralTurma.module.css';

const MuralTurma = () => {
  const { turma_id } = useParams(); // Pegando o ID da turma
  const [murais, setMurais] = useState([]);
  const [novoMural, setNovoMural] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');
  const userRole = localStorage.getItem('role'); // 'user' ou 'professor'
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem(userRole === 'user' ? 'aluno_id' : 'professor_id');

  // Função para buscar as postagens da turma
  useEffect(() => {
    const fetchMural = async () => {
      console.log(`Chamando mural com turma_id: ${turma_id}`); // Verificar se o valor está correto
      try {
        const response = await fetch(`http://localhost:3000/mural/${turma_id}`);
        const data = await response.json();
        console.log(data); // Verificar a resposta do servidor
        setMurais(data.murais);
      } catch (error) {
        console.error('Erro ao buscar mural:', error);
      }
    };
  
    fetchMural();
  }, []);
  // Função para adicionar nova postagem
  /*
  const handleAdicionarPostagem = async () => {
    if (!novoMural.trim()) return; // Não envia postagem vazia

    try {
      const response = await fetch('http://localhost:3000/mural', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            url: url,
            turma_id: turma_id,
        }),
      });

      if (response.ok) {
        setNovoMural('');
        fetchPostagens(); // Atualiza as postagens
      } else {
        console.error('Erro ao adicionar postagem');
      }
    } catch (error) {
      console.error('Erro ao adicionar postagem:', error);
    }
  };
*/
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Mural da Turma</h1>
      
      {/* Se o usuário for professor, ele pode adicionar postagens */}
      {userRole === 'admin' && (
        <div className={styles.adicionarPostagem}>
          <textarea
            value={novoMural}
            onChange={(e) => setNovoMural(e.target.value)}
            placeholder="Escreva uma nova postagem..."
            rows="4"
            className={styles.textarea}
          />
          <button  className={styles.botaoAdicionar}>
            Adicionar Postagem
          </button>
        </div>
      )}

      {/* Exibindo as postagens da turma */}
        <div className={styles.postagens}>
            {murais.length === 0 ? (
            <p className={styles.semPostagens}>Nenhuma postagem ainda.</p>
            ) : (
            murais.map((mural) => (
                <div key={mural.id} className={styles.postagem}>
                <div className={styles.postagemHeader}>
                    <span className={styles.autor}>{mural.titulo}</span>
                    <span className={styles.data}>{(mural.descricao)}</span>
                </div>
                <p className={styles.conteudo}>{mural.url}</p>
                </div>
            ))
            )}
        </div>
    </div>
    
  );
};

export default MuralTurma;