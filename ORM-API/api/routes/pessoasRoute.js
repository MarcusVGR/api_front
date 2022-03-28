const { Router } = require('express')
const PessoasController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoasController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa)
router.post('/pessoas', PessoasController.criaPessoa)
router.put('/pessoas/:id', PessoasController.atualizaPessoa)
router.delete('/pessoas/:id', PessoasController.apagaPessoa)

router.get('/pessoas/:alunoId/matricula/:matriculaId',
    PessoasController.pegaUmaMatricula)
router.post('/pessoas/:alunoId/matricula',
    PessoasController.criaMatricula)
router.put('/pessoas/:alunoId/matricula/:matriculaId',
    PessoasController.atualizaMatricula)
router.delete('/pessoas/:alunoId/matricula/:matriculaId',
     PessoasController.apagaMatricula)

module.exports = router