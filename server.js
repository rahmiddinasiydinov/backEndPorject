const express = require('express');
const app = express();
const Routes = require('./src/router')
const port = 5001;
const path = require('path');
const bodParser = require('body-parser');
app.set('view engine', 'ejs');
app.use('/assets', express.static(path.resolve(__dirname, 'public')))
app.use(express.json());
app.use(bodParser.urlencoded({extended:true}))
app.use(Routes);



app.listen(port, console.log(port));