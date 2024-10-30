const express = require('express');
const { postUser, getUser, putUser, deleteUser, login } = require('../controllers/userController');
const verificarAdmin = require('../middlewares/verificaradmin');

const router = express.Router();

router.post('/login', login)
router.get('/user', getUser);
router.post('/user', verificarAdmin, postUser);
router.put('/user/:id', putUser);
router.delete('/user/:id', deleteUser);

module.exports = router;