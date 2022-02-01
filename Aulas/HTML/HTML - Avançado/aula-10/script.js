let tela = document.getElementById('tela')

let ctxt = tela.getContext("2d")
/*ctxt.moveTo(0,0)
ctxt.lineTo(250, 250)
ctxt.lineTo(500, 0)
ctxt.stroke()*/

/*ctxt.fillStyle = 'blue'
ctxt.fillRect(10,10,100,200)*/
/*ctxt.strokeStyle = 'red'
ctxt.strokeRect(10,10,100,200)*/
ctxt.rect(10,10,100,200)
ctxt.fillStyle = 'blue'
ctxt.strokeStyle = 'red'
ctxt.fill()
ctxt.stroke()
ctxt.clearRect(20,20,30,30)
