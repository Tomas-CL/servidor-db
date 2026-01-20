import { Database } from "bun:sqlite"

const db = new Database("movies.db")

const schema = await Bun.file("./schema.sql").text()
db.exec(schema)


const select = db.query("SELECT * FROM movies")
console.log(select.all())