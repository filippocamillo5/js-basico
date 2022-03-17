

var calcmedia = function (){
    return (this.nota[0] + this.nota[1])/2
}

var aluno = {nome: "igor", nota: [5, 8], media:calcmedia }

var aluno1 = {nome: "joão", nota: [4, 5], media: function (n1, n2){
    return (n1 + n2)/2
}
}

console.log (aluno["nome"])
console.log (aluno.media())

console.log (aluno1["nome"])
console.log (aluno1.media(aluno1.nota[0], aluno1.nota[1]))

