import { addDisciplinas, getDisciplinas } from "./ServidorEscola.js";

let nomedisc = document.getElementById('nomedisc')
let professor = document.getElementById('professor')
let valor = document.getElementById('valor')
let percentual = document.getElementById('percentual')
let button = document.getElementById('button')
let tabelaDisciplinas = document.getElementById('tabelaDisciplinas')

button.addEventListener('click', function () {
    if (nomedisc.value != '' && professor.value != '' && valor.value != '' && percentual.value != '') {
        addDisciplinas(nomedisc.value, professor.value, valor.value, percentual.value)
    } else {
       alert('Preencha os campos a baixo')

    }
    buscaDisciplinas()
})

buscaDisciplinas()

async function buscaDisciplinas() {
    getDisciplinas().then((database) => {

        tabelaDisciplinas.innerHTML = ''
        for (const i in database) {
            const disciplina = database[i]
            const listaTr = document.createElement('tr')
            const listaNomeDisc = document.createElement('th')
            listaNomeDisc.textContent = disciplina.nomedisc
            const listaProfessor = document.createElement('th')
            listaProfessor.textContent = disciplina.professor
            const listaValor = document.createElement('th')
            listaValor.textContent = disciplina.valor
            const listaPercentual = document.createElement('th')
            listaPercentual .textContent = disciplina.percentual 

            listaTr.appendChild(listaNomeDisc)
            listaTr.appendChild(listaProfessor)
            listaTr.appendChild(listaValor)
            listaTr.appendChild(listaPercentual)
            tabelaDisciplinas.appendChild(listaTr)

        }
        console.log(database)
    })
}