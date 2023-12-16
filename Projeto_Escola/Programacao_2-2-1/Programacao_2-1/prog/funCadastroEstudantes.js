import { addEstudantes, getEstudates, Update, Remove } from "./ServidorEscola.js";

let matricula = document.getElementById('matricula')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let tabelaAlunos = document.getElementById('tabelaAlunos')

button1.addEventListener('click', function () {
    console.log('botao')
    if (matricula.value != '' && nome.value != '' && email.value != '') {
        addEstudantes(matricula.value, nome.value, email.value,)
        buscaEstudante()
    } else {
        alert('Preencha os campos a baixo')
    }

})

button2.addEventListener('click', function () {
    console.log('botao')
    if (matricula.value != '' && nome.value != '' && email.value != '') {
        Update(matricula.value, { matricula: matricula.value, nome: nome.value, email: email.value })
        buscaEstudante()
    }
})

button3.addEventListener('click', function () {
    console.log('botao')
    if (matricula.value != '' && nome.value != '' && email.value != '') {
        Remove(matricula.value)
        buscaEstudante()
    }
})

buscaEstudante()

async function buscaEstudante() {
    tabelaAlunos.innerHTML = '';
    try {
        const database = await getEstudates();
        for (const i in database) {
            const estudante = database[i];
            const listaTr = document.createElement('tr');
            const listaMatricula = document.createElement('th');
            listaMatricula.textContent = estudante.matricula;
            const listaNome = document.createElement('th');
            listaNome.textContent = estudante.nome;
            const listaEmail = document.createElement('th');
            listaEmail.textContent = estudante.email;

            listaTr.addEventListener('click', function () {
                matricula.value = estudante.matricula;
                nome.value = estudante.nome;
                email.value = estudante.email;
            });

            listaTr.appendChild(listaMatricula);
            listaTr.appendChild(listaNome);
            listaTr.appendChild(listaEmail);
            tabelaAlunos.appendChild(listaTr);
        }
        console.log(database);
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

function reloadPage() {
    // Reload the page
    location.reload();
}
