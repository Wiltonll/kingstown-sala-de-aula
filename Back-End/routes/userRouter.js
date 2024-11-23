const express = require('express');
const { postUser, getUser, putUser, alterarSenha, deleteUser, login } = require('../controllers/userController');
const verificarAdmin = require('../middlewares/verificaradmin');

const router = express.Router();

router.post('/login', login)
router.get('/user', verificarAdmin, getUser);
router.post('/user', verificarAdmin, postUser);
router.put('/user/:id', verificarAdmin, putUser);
router.delete('/user/:id', verificarAdmin, deleteUser);
router.put('user/senha/:id')

module.exports = router;