const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const TEST = ['Petras', 'Antanas', 'Juozas'];

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'home.html'));
    res.render('home', { pageContent: 'Dynamic page content' });
});

app.get('/info', (req, res) => {
    connection.execute('SELECT * FROM products WHERE price > 1', (err, products) => {
        if (err) {
            res.json({
                message: 'Error'
            })
        } else {
            res.render('info', {
                list: products
            });
        }
    });
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});