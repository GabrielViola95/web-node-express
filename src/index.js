const express = require('express');
const app = express();
const path = require('path');


// configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');

// middlewares

//routes
app.use(require('./routes'));

// static files

app.use(express.static(path.join(__dirname, 'public')))

// escuchas

app.listen(app.get('port'), () =>{
    console.log('Server en el Puerto', app.get('port'))
})