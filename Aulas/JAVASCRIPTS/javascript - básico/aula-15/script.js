var nota1 = 8.0;
var nota2 = 7.0
media = (nota1 + nota2)/2;
var conceito = ""

if(media < 6.5)
    conceito = "ruim"
else if(media < 8 && media >= 6.5)
    conceito = "regular"
else
    conceito = "bom"

console.log(media)
console.log(conceito)

switch(conceito){
    case "bom":
        console.log('Parabens')
        break
    case "regular":
        console.log('Continue')
        break
    case "ruim":
        console.log('Estude mais')
        break
    default:
        console.log('Houve algum erro')
        break
}