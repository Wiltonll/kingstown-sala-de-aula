const express = require('express');
const { postUser, getUser, putUser, alterarSenha, alterarSenhaProfessor, deleteUser, login } = require('../controllers/userController');
const verificarAdmin = require('../middlewares/verificaradmin');

const router = express.Router();

router.post('/login', login)
router.get('/user', verificarAdmin, getUser);
router.post('/user', verificarAdmin, postUser);
router.put('/user/:id', verificarAdmin, putUser);
router.delete('/user/:id', verificarAdmin, deleteUser);
router.put('/troca-senha/:id', alterarSenha)
router.put('/troca-senha/:id', verificarAdmin, alterarSenhaProfessor)

module.exports = router;