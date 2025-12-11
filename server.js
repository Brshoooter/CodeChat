const express = require('express');
const path = require('path'); // Modul nativ Node pentru a lucra cu căi de fișiere
const app = express();
const PORT = 3000;

// 1. Setăm folderul 'public' ca folder static
// Folosim path.join pentru a fi siguri că găsește folderul indiferent de unde rulăm comanda
app.use(express.static(path.join(__dirname, 'public')));

// 2. Rută de rezervă (Opțional, dar recomandat)
// Dacă cineva intră pe o pagină care nu există, îl trimitem înapoi la index.html
app.get(/.*/, (req, res) => {   // <--- Observă că nu mai sunt ghilimele, ci slash-uri /
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 3. Pornim serverul
app.listen(PORT, () => {
    console.log('Serverul tău rulează la http://localhost:3000');
});