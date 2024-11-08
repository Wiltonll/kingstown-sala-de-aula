const Turma = require('../models/turmaModel');
const User = require('../models/userModel')
const TurmaAluno = require('../models/turmaAluno')
require('dotenv').config();

const isProfessor = async (userId) => {
    const user = await User.findByPk(userId);
    return user && user.tipo === 'admin';
};

async function postTurma(req, res) {
    const { nome, descricao, professor_id } = req.body;

    try {
        // Verificar se os campos obrigatórios foram fornecidos
        if (!nome || !professor_id) {
            return res.status(400).json({ error: 'Nome e professor_id são obrigatórios' });
        }

        // Verificar se o professor_id é válido e corresponde a um professor
        const professor = await User.findOne({ where: { id: professor_id, role: 'admin' } });
        if (!professor) {
            return res.status(404).json({ error: 'Professor não encontrado' });
        }

        // Criar a turma
        const turma = await Turma.create({ nome, descricao, professor_id });
        res.status(201).json(turma);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar uma nova turma' })
        console.log(error) 
    }
}
async function getTurma(req, res) {
    try {
        //Geting all Users
        const turmas = await Turma.findAll()
        res.status(200).json(turmas)
    } catch (error) {
        res.status(400).json({ error: 'Erro ao listar as turmas' })
        console.log(error)
    }
}

async function putTurma(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    try {
        // Verificar se a turma existe
        const turma = await Turma.findOne({ where: { id } });
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }
        
        // Atualizar dados da turma e retornar o registro atualizado
        await turma.update({ nome, descricao });
        res.status(200).json(turma);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar a turma' });
        console.log(error);
    }
};

async function deleteTurma(req, res) {
    const { id } = req.params;

    try {
        // Verificar se a turma existe
        const turma = await Turma.findOne({ where: { id } });
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        // Excluir a turma
        await Turma.destroy({ where: { id } })
        res.status(200).json({ msg: 'Turma excluida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir a turma' });
    }
};

async function addAluno(req, res) {
    const { turma_id, email } = req.body; // Os dados devem vir do corpo da requisição

    try {
        // Verificar se a turma existe
        const turma = await Turma.findOne({ where: { id: turma_id } });
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        // Verificar se o aluno existe
        const aluno = await User.findOne({ where: { email} });
        if (!aluno) {
            return res.status(404).json({ error: 'Aluno não encontrado' });
        }

        const alunoExistenteNaTurma = await TurmaAluno.findOne({
            where: { turma_id: turma.id, aluno_id: aluno.id },
        });
        if (alunoExistenteNaTurma) {
            return res.status(400).json({ error: 'Aluno já está na turma' });
        }

        // Adicionar o aluno à turma
        await TurmaAluno.create({
            turma_id: turma.id,
            aluno_id: aluno.id
        });

        res.status(200).json({ message: `Aluno com email ${email} adicionado à turma ${turma.nome} com sucesso.` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar aluno à turma' });
    }
}

module.exports = { postTurma, getTurma, putTurma, deleteTurma, addAluno };