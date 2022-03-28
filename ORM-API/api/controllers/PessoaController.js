const database = require('../models')

class PessoasController {
    static async pegaTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umPessoa = await database.Pessoas.findOne({
                where: { id: Number(id) } })
            return res.status(200).json(umPessoa)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pessoas.update(novasInfos, {where: {id: Number(id) }})
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) }})
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id) }})
            return res.status(200).json({mensagem: `Usuário do idi ${id} apagado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { alunoId, matriculaId } = req.params
        try {
        const umMatricula = await database.Matriculas.findOne({
            where: { 
                id: Number(matriculaId),
                aluno_id: Number(alunoId)
            } })
        return res.status(200).json(umMatricula)

        } catch (error) {
        return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const { alunoId } = req.params
        const novaMatricula = {...req.body, aluno_Id: Number(alunoId)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { alunoId, matriculaId } = req.params
        const novasInfos = req.body
        try {
            await database.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    aluno_Id: Number(alunoId)
                }})
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: { 
                    id: Number(matriculaId) 
                }})
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {
        const { matriculaId } = req.params
        try {
            await database.Matriculas.destroy({where: {
                id: Number(matriculaId)
            }})
            return res.status(200).json({mensagem: `Usuário da matrícula ${id} foi apagado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = PessoasController