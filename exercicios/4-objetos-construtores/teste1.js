function caderno (folhas, capa, cor){
    this.folhas = folhas
    this.capa = capa
    this.cor = cor
    this.frase = function(){
        return console.log ("Hello, world!")
    }
}

var c = new caderno (100, "dura", "preta")

console.log (c)
console.log (c.frase())