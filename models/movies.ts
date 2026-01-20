import { Database } from "bun:sqlite"

export function getAllMovies(db: Database) {
    const query = db.query("SELECT * FROM movies")
    return query.all()
}
// -obtener peliculas por id
export function getMovieById(db: Database, id: number) {
    const query = db.query("SELECT * FROM movies WHERE id = ?")
    return query.get(id)
}
// -obtener peliculas por titulo

export function getMovieByTitle(db: Database, title: string){
    const query = db.query("SELECT * FROM movies WHERE title LIKE ?")
    return query.all(`%${title}%`)
}