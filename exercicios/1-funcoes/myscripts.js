var nomes = ["João", "Maria", "José"]
var notas1 = [5, 7, 9]
var notas2 = [7, 3, 8]

function media (n1, n2){
    (n1 + n2)/2
}

for (index in nomes){

    console.log (`${nomes[index]} - ${notas1[index]} - ${notas2[index]} - ${media(notas1[index], notas2[index])}`)
}