const Turma = require('../models/turmaModel');
const User = require('../models/userModel');
const Arquivo = require('../models/arquivoModel');
const TurmaAluno = require('../models/turmaAluno');
const TurmaCampos = require('../models/turmaCamposModel')
require('dotenv').config();

//Funções para Criar, listar, atualizar e deletar turmas
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
        const turma = await Turma.create({ nome, descricao, professor_id: Number(professor_id) });
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

//Funções para adicionar e remover alunos das turmas
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

async function removeAluno(req, res) {
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

        const turmaAluno = await TurmaAluno.findOne({ where: { turma_id: turma.id, aluno_id: aluno.id } });
        if (!turmaAluno) {
            return res.status(404).json({ error: 'Associação entre aluno e turma não encontrada' });
        }

        // Remover o aluno da turma
        await turmaAluno.destroy();

        res.status(200).json({ message: `Aluno removido da turma com sucesso` })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover aluno à turma' });
    }
}

//Funções para Criar, Listar, Atualizar e Deletar Arquivos das turmas
async function postArquivo(req, res) {
    const { turma_id, nome, tipo, url } = req.body;

    try {
        // Verifica se a turma existe
        const turma = await Turma.findOne({ where: { id: turma_id } });
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        // Cria o novo arquivo associado à turma
        const arquivo = await Arquivo.create({
            turma_id,
            nome,
            tipo,
            url,
            data_upload: new Date(), // Registra a data do upload
        });

        res.status(201).json({ message: 'Arquivo adicionado com sucesso', arquivo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao adicionar arquivo à turma' });
    }
}

async function getArquivo(req, res) {
    const { turma_id } = req.params;

    try {
        // Verificar se a turma existe
        const turma = await Turma.findOne({
            where: { id: turma_id },
            include: [{ model: Arquivo, as: 'arquivos' }]
        });

        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        res.status(200).json(turma.arquivos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar arquivos' });
    }
}

async function putArquivo(req, res) {
    const { arquivo_id } = req.params;
    const { nome, tipo, url } = req.body;

    try {
        // Verificar se o arquivo existe
        const arquivo = await Arquivo.findOne({where: {id: arquivo_id}});
        if (!arquivo) {
            return res.status(404).json({ error: 'Arquivo não encontrado' });
        }

        // Atualizar o arquivo com os novos dados
        arquivo.nome = nome || arquivo.nome;
        arquivo.tipo = tipo || arquivo.tipo;
        arquivo.url = url || arquivo.url;

        await arquivo.save();

        res.status(200).json({ message: 'Arquivo atualizado com sucesso', arquivo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar arquivo' });
    }
}

async function deleteArquivo(req, res) {
    const { arquivo_id } = req.params;

    try {
        // Verificar se o arquivo existe
        const arquivo = await Arquivo.findOne({where: {id: arquivo_id}});
        if (!arquivo) {
            return res.status(404).json({ error: 'Arquivo não encontrado' });
        }

        await arquivo.destroy();

        res.status(200).json({ message: 'Arquivo removido com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover arquivo' });
    }
}

//Campos personalizados
async function postCampo(req, res) {
    const { turma_id, nome, tipo, conteudo } = req.body;

    try {
        const turma = await Turma.findOne({ where: { id: turma_id } });
        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        await TurmaCampos.create({
            turma_id,
            nome,
            tipo,
            conteudo,
        });

        res.status(201).json({ message: `O campo foi criado com sucesso`});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar campo' });
    }
}

async function getCampos(req, res) {
    const { turma_id } = req.params;

    try {
        const turma = await Turma.findOne({
            where: { id: turma_id },
            include: [{ model: TurmaCampos, as: 'campos', 
            include: [{ model: Arquivo, as: 'arquivos' }] }],
        });

        if (!turma) {
            return res.status(404).json({ error: 'Turma não encontrada' });
        }

        res.status(200).json(turma.campos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar campos' });
    }
}

async function putCampo(req, res) {
    const { campo_id } = req.params;
    const { nome, tipo, conteudo } = req.body;

    try {
        // Verificar se o campo existe
        const campo = await TurmaCampos.findOne({ where: { id: campo_id } });
        if (!campo) {
            return res.status(404).json({ error: 'Campo não encontrado' });
        }

        // Atualizar o campo com os novos dados
        campo.nome = nome || campo.nome;
        campo.tipo = tipo || campo.tipo;
        campo.conteudo = conteudo || campo.conteudo;

        await campo.save();

        res.status(200).json({ message: 'Campo atualizado com sucesso', campo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar campo' });
    }
}

async function deleteCampo(req, res) {
    const { campo_id } = req.params;

    try {
        // Verificar se o campo existe
        const campo = await TurmaCampos.findOne({ where: { id: campo_id } });
        if (!campo) {
            return res.status(404).json({ error: 'Campo não encontrado' });
        }

        await campo.destroy();

        res.status(200).json({ message: 'Campo removido com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao remover campo' });
    }
}

module.exports = { postTurma, getTurma, putTurma, deleteTurma, addAluno, removeAluno, postArquivo, getArquivo, putArquivo, deleteArquivo, postCampo, getCampos, putCampo, deleteCampo };