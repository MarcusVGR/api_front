//  String
let texto = "Quem sabe um dia Quem sabe um seremos Quem sabe um viveremos Quem sabe um morreremos";
// Divide a String por palavras e ordena ela
let lista = texto.split(" ").sort();
// Recebe o push do for com as Strings e quantas vezes ela se repete
let palavras = [];
let repeticao = 1;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === lista[i + 1]) {
        repeticao++;
    } else {
        palavras.push({palavra : lista[i], repeticoes : repeticao});
        repeticao = 1;
    }
}
//ordena o array pela quantidade de repetições, do menor pro maior e inverte
palavras.sort((x,y) => { return x.repeticoes - y.repeticoes }).reverse()

console.log(palavras)

//dúvida: if (i < ordenacao.length - 1 && ordenacao[i] == ordenacao[i + 1]), linha 10