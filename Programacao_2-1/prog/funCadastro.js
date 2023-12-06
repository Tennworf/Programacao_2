import { addEstudantes } from "./ServidorEscola.js";

let matricula = document.getElementById('matricula')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let botao = document.getElementById('botao')

botao.addEventListener ('click', function(){ console.log ('botao')
    addEstudantes(matricula.value, nome.value, email.value,  )
})