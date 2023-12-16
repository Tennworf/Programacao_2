import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHp1OZDSnKzU4Fvloxz0X5buSIHNNMsH4",
    authDomain: "banco-escola.firebaseapp.com",
    databaseURL: "https://banco-escola-default-rtdb.firebaseio.com/",
    projectId: "banco-escola",
    storageBucket: "banco-escola.appspot.com",
    messagingSenderId: "1056140673913",
    appId: "1:1056140673913:web:a687f4f56663625f28e5a8"
};
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, child, get, set, update, remove, push } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js"
const bancodados = getDatabase()

let matricula = document.getElementById('matricula')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let button = document.getElementById('button')

function addEstudantes(matricula, nome, email) {
    push(ref(bancodados, 'Estudantes/'), {
        matricula: matricula, nome: nome, email: email
    })

}

button.addEventListener('click', function () {
    console.log('ola')
    addEstudantes(matricula.value, nome.value, email.value,)
})

