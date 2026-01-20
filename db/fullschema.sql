DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title TEXT NOT NULL,
    director TEXT,
    year INTEGER,
    rating REAL,
    genre TEXT

);

INSERT INTO movies (title, director, year, rating, genre) VALUES
('test', 'tets', 2026, NULL, 'test'),
('La odisea', 'Nolan', 2026, NULL, 'Aventura'),
('Jurassik park', 'Steven Spielberg', 1993, 8.2, 'Drama'),
('12 Monos', 'Terry Gilliam', 1993, 8.2, 'Viajes en el tiempo'),
('Jumanji', 'Joe Johnston', 1995, 7.1, 'Aventura'),
('Toy Story', 'John Lasseter', 1995, 7.7, 'Comedia');

UPDATE movies
SET title = 'pelicula', director = 'director', genre = 'genero'
WHERE id=1;

DELETE FROM movies
WHERE id=1;