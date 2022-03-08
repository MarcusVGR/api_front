let phase = "z z hoje hoje hoje dois x x ";
let space = " ";

let atual = [];
let contador = 0;
let ordem = [];
let contadorArray = [];

let divisor = phase.split(space);
contadorArray.sort();
contadorArray.reverse();

//compara com o elemento do array se é diferente do atual.
// Se for diferente e o contador for maior que 0, ele utiliza o metodo push para povoar o objeto e guardar atual e nome nas sua
// respectivas chaves 

for (let i = 0; i < divisor.length; i++) {
  if (divisor[i] != atual) { 
    if (contador > 0) {
      ordem.push(
        {
          nome: atual,
          qt: contador, // adiciona os elementos + contador em um objeto
        })
      
    }
    atual = divisor[i];
    contadorArray.push(contador); // só para jogar o contador dentro de um array
    contador = 1;
  } else {
    contador++;
  }
}

//ordena os elementos de forma crescente e depois de forma descrecente 
console.log(ordem.sort((a,b) => { return a.qt - b.qt }).reverse());