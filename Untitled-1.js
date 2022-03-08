const nomes = ['Pessoa1' , 'Pessoa2', 'Pessoa3', 'Pessoa4']
const notas = [7, 4.5, 8, 7.5]

// como isso aqui é um array? 
// arrays não precisam de [] para serem reconhecidos como arrays?
const reprovados = nomes.filter((aluno, indice) => notas[indice] <5)
                                //como o JS considera o aluno e indice são como Pessoa2 e 4.5?

console.log(`Reprovados: ${reprovados}`)