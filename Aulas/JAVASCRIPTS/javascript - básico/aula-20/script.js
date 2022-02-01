//Lista onde vou ter nome do aluno, separado pela nota 1 nota 2 e a media e no final falar se ta aprovado ou reprovado

var nome = ["Igor", "Jose", "Maria"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media(n1, n2){
    return (n1+n2)/2
}
function passou(media){
    if(media > 7){
        return "aprovado"
    }else {
        return "reprovado"
    }
}

for (var index in nome){
    console.log(
        nome[index] + " - " + 
        notasA[index] + " - " + notasB[index] + " - " + media(notasA[index], notasB[index]) + " - " +
        passou(media(notasA[index], notasB[index]))
        ) 
}