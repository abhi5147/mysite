const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    res.render('home.pug');
})

app.get('/photos', (req, res)=>{
    res.render('photos.pug');
})

app.get('/contact', (req, res)=>{
    res.render('contact.pug');
})

app.get('/about', (req, res)=>{
    res.render('about.pug');
})

app.listen(port,()=>{
    console.log(`THis application started succesfully on port ${port}`);
})