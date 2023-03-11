const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')

const app = express()
let db = new sqlite3.Database('./bugDict.db');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.sendFile("E:/GitHub/JavadBugDict.github.io/add.html")
})

app.post("/", function (req, res) {
    let language = req.body.language
    let problem = req.body.problem
    let solution = req.body.solution
    let type = req.body.type
    let date = req.body.date

    db.run(`INSERT INTO tests(language , problem , solution , type , date) VALUES("${language}","${problem}","${solution}","${type}","${date}")`)
    res.end("new row set")
});

app.listen(1010)