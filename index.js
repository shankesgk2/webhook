const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {res.send('Hello World!')});

app.listen(port, () => {console.log(`监听${port}, http://localhost:${port}`)});