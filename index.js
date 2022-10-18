const express = require('express');
const exphbs = require('express-handlebars')
const app = express();

const player = require('./src/routes/playerRouter')
const map = require('./src/routes/mapRouter')
const admin = require('./src/routes/adminRouter')




app.use('/player', player);
app.use('/map', map);
app.use('/admin', admin);

app.use(express.static('public'));

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
//1 отображать html
//2 подружить с бд
//3 СОЗДАТЬ КЛАССЫ
//4 создать таблицы по классам
//5 создать норм админку
