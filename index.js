const sqlite3 = require('sqlite3');

class obj {
    row
    language
    problem
    solution
    type
    date
}

const db = new sqlite3.Database('./test.db')

let query = "SELECT * FROM BUGS"

db.all(query, [], (err, row) => {
    if (err) throw err

    row.forEach((row) => {
        console.log(row.name + row.family);
    })
})