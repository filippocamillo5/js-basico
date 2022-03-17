function criarAluno (nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2)/2
        }

    }
}

var turma = [
    criarAluno("José", 10, 4),
    criarAluno("Maria", 5, 4),
    criarAluno("Fernanda", 9, 9)
]

var aluno = turma[2]

console.log (aluno.media())

