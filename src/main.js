var nomes = ['Joao', 'Ana', 'Maria', 'Beto', 'Laura'];
var notas = [10, 8, 9, 5, 3];


const alunos = [(nomes), (notas)];
console.log(alunos)


const notasAprovadas = notas;
const elem = 6;
    function numMaioresQue(arr, elem) {

        return arr.filter((item) => {
        return item > elem
        })
    }
    
console.log(numMaioresQue(notasAprovadas, elem))

