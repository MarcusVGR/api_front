let texto = "Minha terra tem palmeiras Onde canta o Sabiá, As aves, que aqui gorjeiam, Não gorjeiam como lá. Nosso céu tem mais estrelas, Nossas várzeas têm mais flores, Nossos bosques têm mais vida, Nossa vida mais amores.";

let textoTratado = texto.replace(/[,.]/g, '');

let lista = textoTratado.split(" ").sort();

console.log(lista)