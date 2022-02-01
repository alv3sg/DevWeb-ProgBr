let tela = document.getElementById('tela')

let ctxt = tela.getContext("2d")

let x = 250
let y = 250
let raio = 100

let inicio = 0
let fim = 1.5 * Math.PI

ctxt.beginPath()
ctxt.strokeStyle = 'red'
ctxt.arc(x, y, raio, inicio, fim)
ctxt.stroke()