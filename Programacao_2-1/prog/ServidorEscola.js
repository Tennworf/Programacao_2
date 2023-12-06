import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHp1OZDSnKzU4Fvloxz0X5buSIHNNMsH4",
    authDomain: "banco-escola.firebaseapp.com",
    projectId: "banco-escola",
    storageBucket: "banco-escola.appspot.com",
    messagingSenderId: "1056140673913",
    appId: "1:1056140673913:web:701adebc9caab39528e5a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, get, set, update, remove, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"
const bancodados = getDatabase()

//Funcctions 

export function addEstudantes(matricula, nome, email) {
    push(ref(bancodados, 'Estudantes/'), {
        matricula: matricula, nome: nome, email: email
    })
 
}
