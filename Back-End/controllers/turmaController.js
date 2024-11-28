const Turma = require('../models/turmaModel');
const User = require('../models/userModel');
const Arquivo = require('../models/arquivoModel');
const TurmaAluno = require('../models/turmaAluno');
const TurmaCampos = require('../models/turmaCamposModel');
const Mural = require('../models/muralModel')
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

const listarAlunos = async (req, res) => {
    const { turma_id } = req.params;

    try {
        const alunos = await TurmaAluno.findAll({
            where: { turma_id },
            include: {
                model: User,
                attributes: ['nome'] // Ajuste os atributos conforme necessário
            }
        });

        if (alunos.length === 0) {
            return res.status(404).json({ message: 'Nenhum aluno encontrado para esta turma.' });
        }

        res.status(200).json(alunos); // Retorna apenas os alunos
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar alunos.' });
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

async function getAlunoTurma(req, res) {
    const { alunoId } = req.params;

  try {
    const turmas = await Turma.findAll({
      include: {
        model: TurmaAluno,
        where: { aluno_id: alunoId },
      },
    }); 

    res.status(200).json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turmas do aluno' });
    console.error(error);
  }
}

//Funções para Criar, Listar, Atualizar e Deletar Arquivos das turmas
async function postArquivo(req, res) {
    try {
        console.log('Body recebido:', req.body); // Inspeciona os campos enviados
        console.log('Arquivo recebido:', req.file); // Inspeciona o arquivo
    
        const { turma_id, nome, tipo } = req.body;
    
        // Verifica a existência de turma
        const turma = await Turma.findOne({ where: { id: turma_id } });
        if (!turma) {
          return res.status(404).json({ error: 'Turma não encontrada' });
        }
    
        // Validações
        if (!nome) {
          return res.status(400).json({ error: 'O nome do arquivo é obrigatório.' });
        }
    
        if (!tipo) {
          return res.status(400).json({ error: 'O tipo do arquivo é obrigatório.' });
        }
    
        if (!req.file) {
          return res.status(400).json({ error: 'Arquivo não enviado.' });
        }
    
        // Gera a URL do arquivo
        const url = `http://localhost:3000/uploads/${arquivo.filename}`;
    
        // Criação do registro no banco de dados
        const arquivo = await Arquivo.create({
          turma_id,
          nome,
          tipo,
          url,
          data_upload: new Date(),
        });
    
        res.status(201).json({ message: 'Arquivo adicionado com sucesso', arquivo });
    } catch (error) {
        console.error('Erro ao adicionar arquivo:', error);
        res.status(500).json({ error: 'Erro ao adicionar arquivo.' });
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

async function adicionarItemMural(req, res) {
    try {
        const { titulo, descricao, turma_id } = req.body;
        const arquivo = req.file;
        // Verifica se há um arquivo anexado

        if (!arquivo) {
            return res.status(400).json({ error: 'Arquivo é obrigatório.' });
          }
      
        // Gera a URL do arquivo
        const url = `http://localhost:3000/uploads/${arquivo.filename}`;

        const novoItem = await Mural.create({
            titulo,
            descricao,
            url,
            turma_id,
          });
        res.status(201).json(novoItem);
    } catch (error) {
        console.error('Erro ao criar postagem:', error);
        res.status(500).json({ error: 'Erro ao criar postagem.' });
    }
}; 

async function listarItensMural(req, res) {
    try {
        const { turma_id } = req.params;
        const turma = await Turma.findOne({
            where: { id: turma_id },
            include: { model: Mural, as: 'murais' },
        });

        if (!turma) {
            res.status(404).json({message: 'Turma não encontrada.'});
        }

        res.status(200).json({ message: 'Itens do mural da turma:', murais: turma.murais})
    } catch (error) {
        console.error('Erro ao listar itens do mural:', error);
        res.status(500).json({
            message: 'Erro ao listar itens do mural.',
            error: error.message,
        });
        
    }
};

async function atualizarItemMural(req, res) {
    const { mural_id } = req.params;
    const novosDados = req.body;

    try {
        const item = await Mural.findOne({ where:{mural_id} });

        if (!item) {
            return res.status(404).json({
                message: 'Item do mural não encontrado.',
            });
        }

        const itemAtualizado = await item.update(novosDados);

        return res.status(200).json({
            message: 'Item do mural atualizado com sucesso.',
            data: itemAtualizado,
        });
    } catch (error) {
        console.error('Erro ao atualizar item do mural:', error);
        return res.status(500).json({
            message: 'Erro ao atualizar item do mural.',
            error: error.message,
        });
    };
};

async function excluirItemMural(req, res){
    const { mural_id } = req.params;

    try {
        const item = await Mural.findOne({ where: {mural_id} });

        if (!item) {
            return res.status(404).json({
                message: 'Item do mural não encontrado.',
            });
        }

        await item.destroy();

        return res.status(200).json({
            message: 'Item do mural excluído com sucesso.',
        });
    } catch (error) {
        console.error('Erro ao excluir item do mural:', error);
        return res.status(500).json({
            message: 'Erro ao excluir item do mural.',
            error: error.message,
        });
    }
};

module.exports = { postTurma, getTurma, putTurma, deleteTurma, addAluno, removeAluno, 
getAlunoTurma, postArquivo, getArquivo, putArquivo, deleteArquivo, postCampo, getCampos, putCampo, deleteCampo, adicionarItemMural, listarItensMural, atualizarItemMural, excluirItemMural, listarAlunos };