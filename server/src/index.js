import express from 'express'; // importando express

import cors from 'cors'; // importando cors

import { mostrarAulas, criarAula } from './controllers/AulaController.js';// importando funções (métodos do controller)

const app = express(); // chamando função express
const porta = 5000;

app.unsubscribe(cors()); // habilitando cors

app.get('/', (req, res) => { // rota padrão para teste de API
    res.send('Teste de API funcionando')
});

app.post('/aulas', criarAula);
app.get('/aulas', mostrarAulas); // rotas de aulas

app.listen(porta, () => { // iniciando API e exibindo mensagem no console com a porta
    console.log(`API rodando na porta ${porta}`)
});