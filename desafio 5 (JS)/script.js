function novoAluno (nome, idade){
    return {nome, idade}
}
let alunos = [
    novoAluno("Mario", 15),
    novoAluno("José", 20),
    novoAluno("Maria", 16)
]
function map2(alunos){
    let todos = []
    for (let aluno of alunos){
        todos.push(aluno.nome + " tem " + aluno.idade + " anos ")  
    }
    return todos         
}
console.log(map2(alunos))

function reduce2(alunos, total){
    for (let aluno of alunos){
        total += aluno.idade  
    }
    return total    
}
console.log(reduce2(alunos, 0))
