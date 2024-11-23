const express = require('express');
const { postTurma, getTurma, putTurma, deleteTurma, addAluno, removeAluno, getAlunoTurma, postArquivo, getArquivo, putArquivo, deleteArquivo, postCampo, getCampos, putCampo, deleteCampo } = require('../controllers/turmaController');
const verificarAdmin = require('../middlewares/verificarAdmin');

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
router.post('/arquivo', verificarAdmin, postArquivo);
router.get('/arquivo/:turma_id', verificarAdmin, getArquivo);
router.put('/arquivo/:arquivo_id', verificarAdmin, putArquivo);
router.delete('/arquivo/:arquivo_id', verificarAdmin, deleteArquivo);
//Campos
router.post('/campo', verificarAdmin, postCampo);
router.get('/campo/:turma_id', verificarAdmin, getCampos);
router.put('/campo/:campo_id', verificarAdmin, putCampo);
router.delete('/campo/:campo_id', verificarAdmin, deleteCampo)

module.exports = router;