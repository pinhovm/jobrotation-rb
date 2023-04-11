/*1)
 A resposta será 91
    o algoritmo é: n * (n+1)/2
    portanto, 13 * (13+1)/2 => 13*14 /2 => 182/2
    Resultado = 91 
/* 

/////////////////////////////////////////////

2)Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function seqFibonacci(numero) {
    var num1 = 0
    var num2 = 1
    
    while (num2 <= numero) {
      if (num2 === numero) {
        return numero + " pertence à sequência de Fibonacci!"
      }
      var temp = num2
      num2 = num1 + num2
      num1 = temp
    }
    return numero + " não pertence à sequência de Fibonacci!"
  }
  
  var num = 8// Insira aqui o numero desejado
  var resultado = seqFibonacci(num)
  console.log(resultado)
  
/////////////////////////////////////////////

/* 3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___

####### sequencia de numeros impares, o espaco vazio sera 9

b) 2, 4, 8, 16, 32, 64, ____

###### sequencia de numeros 2^n, o espaco vazio será 128

c) 0, 1, 4, 9, 16, 25, 36, ____

##### sequencia dos numeros elevado ao quadrado, o proximo será 49

d) 4, 16, 36, 64, ____

##### sequencia dos numeros pares elevado ao quadrado, o proximo será 100

e) 1, 1, 2, 3, 5, 8, ____

##### sequencia de Fibonnaci, o proximo será 13


f) 2,10, 12, 16, 17, 18, 19, ____

#### lista de numeros que, escritos por extenso começa com a letra D, o proximo será 200

 */

/////////////////////////////////////////////

/* 
4) Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, 
a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. 
Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?

IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

      ####O enunciado da questão não é claro o suficiente, entao, pela lógica, podemos concluir que: 

      No momento exato em que os carros se cruzam na rodovia, ambos estarão a mesma distância de Ribeirão Preto, logicamente, a diferença é que o carro
      estará se aproximando de Ribeirão Preto, enquanto o caminhão se afasta.

 */


/////////////////////////////////////////////

/*
5) Escreva um programa que inverta os caracteres de um string. 
*/
function inverterString(string) {
    var str = string.split('');
    var tamanho = str.length;
    for (var i = 0; i < tamanho / 2; i++) {
        var temp = str[i];
        str[i] = str[tamanho - i - 1];
        str[tamanho - i - 1] = temp;
    }
    var strInvertida = str.join('');
    return strInvertida;
}


var stringOriginal = "TEXTO";

var strInvertida = inverterString(stringOriginal);

console.log("String invertida: " + strInvertida);