const express = require('express');
const server = express();
const fs = require('fs');
const multer = require('multer');
const mainRouter = require('./routes/main');
const upload = multer({ dest: 'upload/'});

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.use('/', mainRouter);

//загрузка одного изображения
server.post('/upload', upload.single('logo'), function(req, res, next){
   res.send({ret_code: '0'});
});

server.get('/form', function(req, res, next){
   const form = fs.readFyleSync('./main.ejs', {encoding: 'utf8'});
   res.send(form);
});

server.use((req, res, next) => {
   res.statusCode = 404;
   res.render('404');
})

server.listen(3000);