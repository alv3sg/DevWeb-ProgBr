//Carne - 400gr por pessoa, se for + de 6 horas, 650gr
//Cerveja - 1200ml por pessoa,se for + de 6 horas. 2000ml
//refrigeraqnte - 1000ml por pessoa, se for + de 6 horas, 1500ml
//crianças valem por 0.5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

let gr = 400
let mlCerveja = 1200
let mlRefri = 1000

function calcular(){
    console.log('Calculando...')
    if(inputDuracao.value >= 6) {
        gr = 650;
        mlCerveja = 2000;
        mlRefri = 1500;
    }
    let qtdTotalCarne = (inputAdultos.value * gr) + 
    ((inputCriancas.value / 2)* gr)

    let qtdTotalCerveja = (inputAdultos.value * mlCerveja)

    let qtdTotalRefri = (inputAdultos.value * mlRefri) + 
    ((inputCriancas.value / 2)* mlRefri)
    
    console.log(qtdTotalCarne, qtdTotalCerveja, qtdTotalRefri)

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri/2000)} Pet's de 2l de refrigerante</p>`
}


/*
if(inputDuracao >= 6){
    gr = 600
    mlCerveja = 2000
    mlRefri = 1500
}
let qtdTotalCarne = (inputAdultos.value * gr) + 
((inputCriancas.value / 2)* gr)
let qtdTotalCerveja = (inputAdultos.value * mlCerveja)
let qtdTotalRefri = (inputAdultos.value * mlRefri) + 
((inputCriancas.value / 2)* mlRefri)

console.log(qtdTotalCarne, qtdTotalCerveja, qtdTotalRefri)*/