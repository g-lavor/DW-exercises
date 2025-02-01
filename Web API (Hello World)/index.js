import express from 'express';

const app = express();
const HOST = '127.0.0.1';
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor
app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
