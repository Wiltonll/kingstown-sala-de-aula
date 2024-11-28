import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o ID da turma
import styles from './MuralTurma.module.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const MuralTurma = () => {
  const { turma_id } = useParams(); // Pegando o ID da turma
  const [murais, setMurais] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mostrarModal, setMostrarModal] = useState(false);
  const [arquivo, setArquivo] = useState(null); // Mudança aqui para armazenar arquivo
  const [mostrarModalAluno, setMostrarModalAluno] = useState(false);
  const [emailAluno, setEmailAluno] = useState('');
  const userRole = localStorage.getItem('role'); // 'user' ou 'professor'
  const token = localStorage.getItem('token');

  // Função para buscar as postagens da turma
  const fetchMural = async () => {
    console.log(`Chamando mural com turma_id: ${turma_id}`);
    try {
      const response = await fetch(`http://localhost:3000/mural/${turma_id}`);
      const data = await response.json();
      console.log(data);
      setMurais(data.murais || []); // Garante que `murais` seja um array
    } catch (error) {
      console.error('Erro ao buscar mural:', error);
    }
  };
  useEffect(() => {
    fetchMural();
  }, [turma_id]);
  
  const formatarData = (dataCriacao) => {


    const dataAtual = new Date(dataCriacao);
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };
  
  // Função para adicionar nova postagem
  const handleAdicionarPostagem = async () => {
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('descricao', descricao);
    formData.append('turma_id', turma_id);
    if (arquivo) {
      formData.append('anexo', arquivo); // Adiciona o arquivo ao FormData
    }
    
    try {
      const response = await fetch('http://localhost:3000/mural', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      alert("Postagem Adicionada");

      if (response.ok) {
        await fetchMural();
        setTitulo('');
        setDescricao('');
        setArquivo(null); // Limpar arquivo após a postagem
        setMostrarModal(false); // Fechar modal após adicionar
        const novoMural = await response.json();
        setMurais((prev) => [novoMural, ...prev, ]);
      } 
      
    } catch (error) {
      alert("Erro ao adicionar postagem")
      console.error('Erro ao adicionar postagem:', error);
    }
  };

  const handleAdicionarAluno = async () => {
    try {
        const response = await fetch('http://localhost:3000/adicionar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ turma_id: turma_id, email: emailAluno }),
        });

        alert('Aluno adicionado com sucesso!');

        if (response.ok) {
            setEmailAluno('');
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao adicionar aluno');
    }
};

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Mural da Turma</h1>
      
      {/* Se o usuário for professor, ele pode adicionar postagens */}
      {/* Botão para abrir o modal */}
      {userRole === 'admin' && (
        <div>
            <button 
              onClick={() => setMostrarModal(true)} 
              className={styles.botaoAbrirModal}
            >
              Adicionar Nova Postagem
            </button>
            <button 
              onClick={() => setMostrarModalAluno(true)} 
              className={styles.botaoAbrirModal}
            >
              Adicionar aluno à turma
            </button>
        </div>
        
      )}
      
      {mostrarModalAluno && (
        <div className={styles.modalOverlay} onClick={() => setMostrarModalAluno(false)}>
          <div 
            className={styles.modal} 
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
          >
            <h4>Adicionar Aluno</h4>
            <input
              type="email"
              placeholder="E-mail do aluno"
              value={emailAluno}
              onChange={(e) => setEmailAluno(e.target.value)}
              className={styles.input}
            />
            <div className={styles.modalBotoes}>
              <button 
                onClick={handleAdicionarAluno} 
                className={styles.botaoAdicionar}
              >
                Adicionar
              </button>
              <button 
                onClick={() => setMostrarModalAluno(false)} 
                className={styles.botaoCancelar}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

       {/* Modal */}
       {mostrarModal && (
        <div className={styles.modalOverlay} onClick={() => setMostrarModal(false)}>
          <div 
            className={styles.modal} 
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro do modal
          >
            <h4>Nova Postagem</h4>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className={styles.input}
            />
            <input
              type='text'
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className={styles.input}
            />
            <input
              type="file"
              placeholder="URL (opcional)"
              onChange={(e) => setArquivo(e.target.files[0])}
              className={styles.arquivo}
            />
            <div className={styles.modalBotoes}>
              <button 
                onClick={handleAdicionarPostagem} 
                className={styles.botaoAdicionar}
              >
                Adicionar
              </button>
              <button 
                onClick={() => setMostrarModal(false)} 
                className={styles.botaoCancelar}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exibindo as postagens da turma */}
        <div className={styles.postagens}>
            {murais.length === 0 ? (
            <p className={styles.semPostagens}>Nenhuma postagem ainda.</p>
            ) : (
            murais.map((mural) => (
              <a href={mural.url} target="_blank" rel="noopener noreferrer">
                <div key={mural.id} className={styles.postagem}>
                  <div className={styles.postagemHeader}>
                    <span className={styles.autor}>{mural.titulo}</span>
                    <span className={styles.data}>
                      {formatarData(mural.dataCriacao)}
                    </span> 
                  </div>
                  <p className={styles.conteudo}>{mural.url}</p>
                  <span className={styles.data}>{(mural.descricao)}</span>
                </div>
              </a>
            ))
            )}
        </div>
    </div>
    
  );
};

export default MuralTurma;