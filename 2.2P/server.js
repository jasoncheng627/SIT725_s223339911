const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// helper function: does the actual maths
function calculate(a, b, operation) {
  switch (operation) {
    case 'add':      return a + b;
    case 'subtract': return a - b;
    case 'multiply': return a * b;
    case 'divide':   return b === 0 ? null : a / b;
    default:         return undefined;
  }
}

// Part 2: GET endpoint to add two numbers
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Please provide two numbers, e.g. /add?a=5&b=3' });
  }

  res.json({ a, b, operation: 'add', result: calculate(a, b, 'add') });
});

// GET endpoint for any operation
app.get('/calc/:operation', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const operation = req.params.operation;

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Please provide two numbers as a and b' });
  }

  const result = calculate(a, b, operation);
  if (result === undefined) {
    return res.status(400).json({ error: 'Use add, subtract, multiply or divide' });
  }
  if (result === null) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  res.json({ a, b, operation, result });
});

// POST endpoint
app.post('/calc', (req, res) => {
  const a = parseFloat(req.body.a);
  const b = parseFloat(req.body.b);
  const operation = req.body.operation;

  const result = calculate(a, b, operation);
  if (isNaN(a) || isNaN(b) || result === undefined || result === null) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  res.json({ a, b, operation, result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});