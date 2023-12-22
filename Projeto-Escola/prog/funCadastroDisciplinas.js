import { addDisciplinas, getDisciplinas, Update1, Remove1 } from "./ServidorEscola.js";

let nomedisc = document.getElementById('nomedisc')
let professor = document.getElementById('professor')
let valor = document.getElementById('valor')
let percentual = document.getElementById('percentual')
let button4 = document.getElementById('button4')
let button5 = document.getElementById('button5')
let button6 = document.getElementById('button6')
let tabelaDisciplinas = document.getElementById('tabelaDisciplinas')

button4.addEventListener('click', function () {
    if (nomedisc.value != '' && professor.value != '' && valor.value != '' && percentual.value != '') {
        addDisciplinas(nomedisc.value, professor.value, valor.value, percentual.value).then(buscaDisciplinas)
    } else {
        alert('Preencha os campos a baixo')
    }

})

button5.addEventListener('click', async function () {
    console.log('botao')
    if (nomedisc.value != '' && professor.value != '' && valor.value != '' && percentual.value != '') {
        Update1(nomedisc.value, { nomedisc: nomedisc.value, professor: professor.value, valor: valor.value, percentual: percentual.value }).then(buscaDisciplinas)
    }
})

button6.addEventListener('click', function () {
    console.log('botao')
    if (nomedisc.value != '' && professor.value != '' && valor.value != '' && percentual.value != '') {
        Remove1(nomedisc.value).then(buscaDisciplinas)
    }
})

buscaDisciplinas()

async function buscaDisciplinas() {
    tabelaDisciplinas.innerHTML = '';
    try {
        const database = await getDisciplinas();
        for (const i in database) {
            const disciplina = database[i];
            const listaTr = document.createElement('tr')
            const listaNomeDisc = document.createElement('th')
            listaNomeDisc.textContent = disciplina.nomedisc
            const listaProfessor = document.createElement('th')
            listaProfessor.textContent = disciplina.professor
            const listaValor = document.createElement('th')
            listaValor.textContent = disciplina.valor
            const listaPercentual = document.createElement('th')
            listaPercentual.textContent = disciplina.percentual

            listaTr.addEventListener('click', function () {
                nomedisc.value = disciplina.nomedisc;
                professor.value = disciplina.professor;
                valor.value = disciplina.valor;
                percentual.value = disciplina.percentual;
            });


            listaTr.appendChild(listaNomeDisc);
            listaTr.appendChild(listaProfessor);
            listaTr.appendChild(listaValor);
            listaTr.appendChild(listaPercentual);
            tabelaDisciplinas.appendChild(listaTr);

        }
        console.log(database)
    } catch (error) {
        console.error('Error fetching students', error);
    }
}

function reloadPage() {
    // Reload the page
    location.reload();
}