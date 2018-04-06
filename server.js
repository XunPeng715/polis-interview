const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3100));

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

app.get('/login', function(req, res) {
    let username = req.query.username;
    let password = req.query.password;

    let user = db.get('user')
        .find({ username: username, password: password })
        .value()
    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).send({error: "User not found"});
    }
});

app.post('/addArticle', function(req, res) {
    let saved = db.get('articles')
        .push(req.body)
        .write()
    if(saved) {
        res.status(200).send({success: "Saved successfully"});
    } else {
        res.status(400).send({error: "Cannot save"});
    }
});

app.get('/savedArticles', function(req, res) {
    let articles = db.get('articles')
        .value()
    if(articles) {
        res.status(200).json(articles);
    } else {
        res.status(404).send({error: "Articles not found"});
    }
});

app.post('/addSources', function(req, res) {
    let sources = db.get('sources')
        .assign(req.body)
        .write()
    if(sources) {
        res.status(200).send({success: "Added successfully"});
    } else {
        res.status(400).send({error: "Cannot add"});
    }
});

app.get('/getMySources', function(req, res) {
    let sources = db.get('sources')
        .value()
    if(sources) {
        res.status(200).json(sources);
    } else {
        res.status(404).send({error: "Sources not found"});
    }
});

db.defaults({ user: [
    {
        username: 'xun',
        password: 'xun'
    }],
    articles: [],
    sources: [] })
    .write() 