const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')
const fs = require('fs');


const app = express()
let db = new sqlite3.Database('./../db/BugDict.db');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.get('/', (req, res) => {
    res.sendFile("E:/GitHub/BugDict/repo/add.html")
})

app.post("/", function (req, res) {
    let lang = req.body.language
    let prob = req.body.problem
    let sol = req.body.solution
    let ty = req.body.type
    let dt = req.body.date

    // console.log(ty);
    // console.log(dt)
    db.run(`INSERT INTO bugs(language , problem , solution , type , date) VALUES("${lang}","${prob}","${sol}","${ty}","${dt}")`)

    let query = "SELECT * FROM Bugs"


    db.all(query, [], (err, row) => {
        const data = []
        //if (err) throw err

        row.forEach(row => {

            let items = {
                language: row.language,
                problem: row.problem,
                solution: row.solution,
                type: row.type,
                date: row.date
            }

            data.push(Object(items))

            console.log(data);
            fs.writeFile("BugDict.json", JSON.stringify(data), (err) => {
                //if (err) throw err
                // console.log("save");
            })
        })

    })

    res.end("new row set")
});

app.listen(8080)