import { addLoginCadastro, getLoginCadastro } from "./ServidorEscola.js";

let mail= document.getElementById('mail')
let senha = document.getElementById('senha')
let senha2 = document.getElementById('senha2')
let chackbox = document.getElementById('checkbox')
let button2 = document.getElementById('button2')

button2.addEventListener('click', function () {
    console.log('botao')
    if (mail.value != '' && senha.value != '' && senha2.value != '' && chackbox.value != '') {
        addLoginCadastro(mail.value, senha.value, chackbox.value, senha2.value)
    } else {
        alert('Preencha os campos a baixo')
    }
    buscaEstudante()
})