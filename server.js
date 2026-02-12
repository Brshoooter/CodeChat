const { config } = require("./src/config/env.js");
const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/api');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(config.port, () => {
    console.log(`Serverul este pornit la http://localhost:${config.port}`);
});