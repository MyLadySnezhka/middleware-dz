const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.post('/tren', (req, res) => {
    console.log('Тренировка построена!');
    res.json({ status: 'ok' });
});

router.get('/123', (req, res) => {
    res.json({ a: 123 });
});

router.use((req, res, next) => {
    console.log('URL:', req.url);
    //res.send('моя прелесть!'); 
    next();  
});

module.exports = router;