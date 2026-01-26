import { Database } from "bun:sqlite"

export function getMovies(db: Database, filters: {title: string | undefined, genres: string | undefined}) {
    const { title, genres } = filters;
    let movies
    if(title && genres) movies = getMoviesByTitleAndGenre(db, title, genres)
    else if(title) movies = getMovieByTitle(db, title)
    else if(genres) movies = getMoviesByGenre(db, genres)
    else movies = getAllMovies(db)
    return movies
}
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
export function getMovieByTitle(db: Database, title: string) {
    const query = db.query("SELECT * FROM movies WHERE title LIKE ?")
    return query.all(`%${title}%`)
}
// - obtener peliculas por genero
export function getMoviesByGenre(db: Database, genres: string) {
    const query = db.query("SELECT * FROM movies WHERE genre LIKE ?")
    return query.all(`%${genres}%`)
}
// - obtener peliculas por titulo y genero
export function getMoviesByTitleAndGenre(db: Database, title: string, genres: string) {
    const query = db.query("SELECT * FROM movies WHERE title LIKE ? AND genre LIKE ?")
    return query.all(`%${title}%`, `%${genres}%`)
}

export function insertMovies(db: Database, title: string, genres: string){
    const query = db.query("INSERT INTO movies (title, genres) VALUES (?,?)")
    return query.run(title, genres)
}