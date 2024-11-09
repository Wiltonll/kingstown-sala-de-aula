const express = require('express');
const { postTurma, getTurma, putTurma, deleteTurma, addAluno, removeAluno, postArquivo, getArquivo, putArquivo, deleteArquivo } = require('../controllers/turmaController');
const verificarAdmin = require('../middlewares/verificaradmin')

const router = express.Router();

router.post('/turma', verificarAdmin, postTurma)
router.get('/turma', verificarAdmin, getTurma)
router.put('/turma/:id', verificarAdmin, putTurma)
router.delete('/turma/:id', verificarAdmin, deleteTurma)
router.post('/adicionar', verificarAdmin, addAluno)
router.delete('/remover', verificarAdmin, removeAluno)


module.exports = router;