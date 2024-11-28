const express = require('express');
const { postTurma, getTurma, putTurma, deleteTurma, addAluno, removeAluno, getAlunoTurma, postArquivo, getArquivo, putArquivo, deleteArquivo, postCampo, getCampos, putCampo, deleteCampo, adicionarItemMural, listarItensMural, excluirItemMural, atualizarItemMural } = require('../controllers/turmaController');
const verificarAdmin = require('../middlewares/verificarAdmin');
const upload = require('../middlewares/upload')

const router = express.Router();

//Turmas
router.post('/turma', verificarAdmin, postTurma);
router.get('/turma', getTurma);
router.put('/turma/:id', verificarAdmin, putTurma);
router.delete('/turma/:id', verificarAdmin, deleteTurma);
//Alunos
router.post('/adicionar', verificarAdmin, addAluno);
router.delete('/remover', verificarAdmin, removeAluno);
router.get('/turma/aluno/:alunoId', getAlunoTurma)
//Arquivos
router.post('/arquivo', upload.single('anexo'), verificarAdmin, postArquivo);
router.get('/arquivo/:turma_id', verificarAdmin, getArquivo);
router.put('/arquivo/:arquivo_id', verificarAdmin, putArquivo);
router.delete('/arquivo/:arquivo_id', verificarAdmin, deleteArquivo);
//Campos
router.post('/campo', verificarAdmin, postCampo);
router.get('/campo/:turma_id', verificarAdmin, getCampos);
router.put('/campo/:campo_id', verificarAdmin, putCampo);
router.delete('/campo/:campo_id', verificarAdmin, deleteCampo)
//Mural
router.post('/mural', upload.single('anexo'), verificarAdmin, adicionarItemMural);
router.get('/mural/:turma_id', listarItensMural);
router.put('/mural/:mural_id', verificarAdmin, atualizarItemMural);
router.delete('/mural/:mural_id', verificarAdmin, excluirItemMural)

module.exports = router;