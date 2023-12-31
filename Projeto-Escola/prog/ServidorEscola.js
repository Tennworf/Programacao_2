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

const estudanteRef = ref(bancodados, 'Estudantes')
const disciplinaRef = ref(bancodados, 'Disciplinas')


/*Função Estudantes*/

export async function addEstudantes(matricula, nome, email) {
  push(ref(bancodados, 'Estudantes/'), {
    matricula: matricula, nome: nome, email: email
  })

}

export async function getEstudates() {
  return new Promise((resolve, reject) => {
    get(child(ref(bancodados), 'Estudantes/')).then((snapshot) => {
      if (snapshot.exists()) {
        const database = Object.values(snapshot.val());
        console.log(database)
        resolve(database);
      } else {
        console.log("No data available");
        reject("No data available");
      }
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}

/*Função Disciplinas*/

export async function addDisciplinas(nomedisc, professor, valor, percentual) {
  push(ref(bancodados, 'Disciplinas/'), {
    nomedisc: nomedisc, professor: professor, valor: valor, percentual: percentual
  })

}

export function getDisciplinas() {
  return new Promise((resolve, reject) => {
    get(child(ref(bancodados), 'Disciplinas/')).then((snapshot) => {
      if (snapshot.exists()) {
        const database = Object.values(snapshot.val());
        resolve(database);
      } else {
        console.log("No data available");
        reject("No data available");
      }
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
}

// /*Função Login/Cadastro*/


 export function getLoginCadastro() {
  return new Promise((resolve, reject) => {
    get(child(ref(bancodados), 'Login/')).then((snapshot) => {
      if (snapshot.exists()) {
        const database = Object.values(snapshot.val());
        resolve(database);
      } else {
        console.log("No data available");
        reject("No data available");
      }
    }).catch((error) => {
      console.error(error);
      reject(error);
    });
  });
 }









/*  Função Pegar registro Estudantes  */

export function getIdEstudantes(mat) {
  return new Promise((resolve, reject) => {
    get(estudanteRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const usuario = childSnapshot.val();
            if (usuario.matricula === mat) {
              const usuarioID = childSnapshot.key;
              const usuarioRef = ref(bancodados, `Estudantes/${usuarioID}`);
              console.log("ID do estudante com a Matricula", mat, "é:", usuarioID);
              resolve(usuarioRef)
            }
          })
        } else {
          console.log("No data available");
          reject("No data available");
        }
      }).catch((error) => {
        console.error(error);
        reject(error);
      });
  })
}

/*  Função Alterar   */

export async function Update(matricula, novosDados) {
  const id = await getIdEstudantes(matricula)
  await set(id, novosDados)
}



/*  Função Alterar    */


export async function Remove(matricula) {
  const id = await getIdEstudantes(matricula)
  await remove(id)
}















/*  Função Pegar registro Disciplina   */

export function getIdDisciplinas(mat) {
  return new Promise((resolve, reject) => {
    get(disciplinaRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            const usuario = childSnapshot.val();
            if (usuario.nomedisc === mat) {
              const usuarioID = childSnapshot.key;
              const usuarioRef = ref(bancodados, `Disciplinas/${usuarioID}`);
              console.log("ID do nome com a Disciplina", mat, "é:", usuarioID);
              resolve(usuarioRef)
            }
          })
        } else {
          console.log("No data available");
          reject("No data available");
        }
      }).catch((error) => {
        console.error(error);
        reject(error);
      });
  })
}

/*  Função Alterar   */

export async function Update1(disciplina, novosDados) {
  const nome = await getIdDisciplinas(disciplina)
  await set(nome, novosDados)
  }



/*  Função Alterar   */


export async function Remove1(disciplina) {
  const nome = await getIdDisciplinas(disciplina)
  await remove(nome)
  }