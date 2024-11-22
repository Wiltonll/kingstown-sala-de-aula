const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

async function postUser(req, res) {
    try {
        const { nome, email, senha, confirmarsenha, role } = req.body;

        //Validations
        if (!nome) {
            return res.status(422).json({ msg: "O nome é obrigatório" });
        }
        if (!email) {
            return res.status(422).json({ msg: "O email é obrigatório" });
        }
        if (!senha) {
            return res.status(422).json({ msg: "A senha é obrigatória" });
        }
        if (confirmarsenha != senha) {
            return res.status(422).json({ msg: "As senhas não conferem" })
        }

        //Check if User exists
        const emailExists = await User.findOne({ where: {email} });

        if (emailExists) {
            return res.status(422).json({ msg: `O email: ${email} já está em uso` })
        }

        //Create Encrypted Password
        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        // Define o cargo, se não for especificado, usa o padrão 'user'
        const newUserRole = role === "admin" ? "admin" : "user";

        const newUser = await User.create({
            nome,
            email,
            senha: senhaHash,
            role: newUserRole
        });
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar usuario' })
        console.log(error)   
    }
};

async function getUser(req, res) {
    try {
        //Geting all Users
        const users = await User.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: 'Erro ao listar usuarios' })
        console.log(error)
    }
};

async function putUser(req, res){
    try {
        //Update user for id
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        const user = await User.findOne({ where: { id } });

        if(!user) {
            return res.status(400).json({ msg: 'Usuário não encontrado'});
        }

        const salt = await bcrypt.genSalt(12)
        const senhaHash = await bcrypt.hash(senha, salt)

        //Updated user
        const atualizado = await User.update({
            nome, 
            email, 
            senha: senhaHash
        },{
            where: { id }
        }); 

        return res.status(200).json({ msg: 'Usuário atualizado' });

    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar Usuário' });
    }
};

async function deleteUser(req, res) {
    try {
        //Delete user
        const { id } = req.params;
        
        const user = await User.destroy({ where: { id } });

        if(!user) {
            return res.status(400).json({ msg: 'Usuário não encontrado'});
        }

        return res.status(200).json({ msg: "Usuário apagado do BD com sucesso" });
    } catch (error) {
        res.status(400).json({ error: 'Erro ao apagar Usuário do BD' });
    }
};

async function login(req, res) {
    const { email, senha } = req.body;
    
    if (!email) {
        return res.status(400).json({ msg: 'Preencha o e-mail' })
    }

    if (!senha) {
        return res.status(400).json({ msg: 'Preencha a senha' })
    }

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ msg: 'E-mail ou senha incorretos' })
        }

        // Compara a senha fornecida com a senha armazenada
        const senhaValida = await bcrypt.compare(senha, user.senha);

        if (!senhaValida) {
            return res.status(400).json({ msg: 'Usuário ou senha incorretos' })
        }   

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ msg: 'Login realizado com sucesso', token, userId: user.id })
    } catch (error) {
        res.status(500).json({ msg: 'Erro no server' });
        console.log(error);
    }
}


module.exports = { getUser, postUser, putUser, deleteUser, login };