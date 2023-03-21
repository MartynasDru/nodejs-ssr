const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'home.html'));
    res.render('home', { pageContent: 'Dynamic page content' });
});

app.get('/info', (req, res) => {
    res.render('info');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});