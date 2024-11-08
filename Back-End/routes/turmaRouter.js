const express = require('express');
const { postTurma, getTurma, putTurma, deleteTurma, addAluno } = require('../controllers/turmaController');
const verificarAdmin = require('../middlewares/verificaradmin')

const router = express.Router();

router.post('/turma', verificarAdmin, postTurma)
router.get('/turma', verificarAdmin, getTurma)
router.put('/turma/:id', verificarAdmin, putTurma)
router.delete('/turma/:id', verificarAdmin, deleteTurma)
router.post('/adicionar', verificarAdmin, addAluno)

module.exports = router;