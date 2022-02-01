let lista = document.getElementById('lista')
let num = parseInt(lista.dataset.num)
let conteudo = ""

for (i=0; i < num; i++){
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo