const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:3000/`)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servido rodando na porta ${PORT}`);
});