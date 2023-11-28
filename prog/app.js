const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para analisar JSON e dados de formulário codificados em URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Armazenamento na memória para os dados enviados (você pode querer usar um banco de dados em um aplicativo real)
const cadastros = [];

// Endpoint para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Cadastro_Disciplina.html'));
});

// Endpoint para lidar com envios de formulários
app.post('/cadastrar-disciplina', (req, res) => {
    const { nome, professor, valor, percentual } = req.body;

    // Valide se algum campo estiver vazio
    if (!nome || !professor || !valor || !percentual) {
        return res.status(400).send('Por favor, preencha todos os campos.');
    }

    // Armazene os dados no armazenamento na memória
    cadastros.push({ nome, professor, valor, percentual });

    // Envie uma resposta de sucesso
    res.status(200).send('Cadastro realizado com sucesso.');
});

// Endpoint para recuperar os dados armazenados
app.get('/cadastros', (req, res) => {
    res.json(cadastros);
});

// Inicie o servidor
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
