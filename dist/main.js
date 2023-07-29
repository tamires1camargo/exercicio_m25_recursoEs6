"use strict";

var nomes = ['Joao', 'Ana', 'Maria', 'Beto', 'Laura'];
var notas = [10, 8, 9, 5, 3];

//
var alunos = [nomes, notas];
console.log(alunos);
var notasAprovadas = notas;
var elem = 6;
function numMaioresQue(arr, elem) {
  return arr.filter(function (item) {
    return item > elem;
  });
}
console.log(numMaioresQue(notasAprovadas, elem));