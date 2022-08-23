const express = require('express');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/', (req, res) => {
    res.render('main');
});

server.post('/tren', (req, res) => {
    console.log('Тренировка построена!');
    res.json({ status: 'ok' });
});

server.listen(3000);