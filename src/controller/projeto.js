const projeto = require('../model/projeto')

class ProjetoController {
    async criarProjeto(titulo, descricao, status, autorId) {
        if (!titulo || !descricao || !autorId || !status) {
            throw new Error('Titulo, descrição, status e autorId são obrigatórios.')
        }

        const novoProjeto = await projeto.create({
            titulo,
            descricao,
            status,
            autorId
        })

        return novoProjeto
    }

    async alterarProjeto(id, titulo, descricao, status, autorId) {
        if (!id || !titulo || !descricao || !autorId || !status) {
            throw new Error('Titulo, descrição, status e autorId são obrigatórios.')
        }

        const projetoEncontrado = await projeto.findByPk(id)

        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }
        projetoEncontrado.titulo = titulo;
        projetoEncontrado.descricao = descricao;
        projetoEncontrado.status = status;
        projetoEncontrado.autorId = autorId;

        projetoEncontrado.save()

        return projetoEncontrado
    }

    async deletarProjeto(id) {
        const projetoEncontrado = await projeto.findByPk(id)
        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }
        await projetoEncontrado.destroy()
    }

    async atualizarProjeto(id, novoStatus) {
        const projetoEncontrado = await projeto.findByPk(id)
        if (!projetoEncontrado) {
            throw new Error('Projeto não encontrado.')
        }
        projetoEncontrado.status = novoStatus;

        return projetoAlterado
    }

    async buscarPorId(id) {
        const projetoEncontrado = await projeto.findByPk(id)

        return projetoEncontrado
    }

    async listarProjetos(){
        const projetos = await projeto.findAll();
        return projetos
    }
}

module.exports = new ProjetoController()
