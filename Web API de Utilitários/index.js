const express = require('express');

const app = express();
app.use(express.json());

function formatText(text, action) {
  if (typeof text !== 'string') return 'Invalid input';
  return action === 'lowercase' ? text.toLowerCase() :
         action === 'uppercase' ? text.toUpperCase() : 'Invalid action';
}

function calculateNumber(values, action) {
  const numbers = values.map(num => parseInt(num, 10)).filter(num => !isNaN(num));
  if (numbers.length === 0) return 'Invalid input';
  return action === 'minimum' ? Math.min(...numbers) :
         action === 'maximum' ? Math.max(...numbers) : 'Invalid action';
}

app.post('/util/text/:action', (req, res) => {
  const { action } = req.params;
  const { input } = req.body;
  res.send({ action, input, output: formatText(input, action) });
});

app.get('/util/number/:action', (req, res) => {
  const { action } = req.params;
  const input = req.query.input.split(',');
  res.send({ action, input, output: calculateNumber(input, action) });
});

app.listen(3000, () => console.log('App rodando em http://127.0.0.1:3000'));
