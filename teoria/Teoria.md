# MVC

- Modelo -> Lógica, funciones, clves
- Vista -> Interfaz cliente
- Controlador -> Puente entre M y C

---

# CRUD

- Crete -> Insert
- Read -> Select
- Update -> Update
- Delete -> Delete

# API (application Programming Interface)

- Clases, funciones (Librerías)
- Endpoints (Servidor)

# Apuntes

Traer csv movies a esta carpeta.

borramos el movies.db

importar el movies.csv a una tabla temporal
```sql
.mode csv
```
Modificamos la tabla con

```sql
insert into movies (title, genres, etc) select * from temp
```
Vemos toda la info de la tabla movies.db y la pegas a dump.sql

y dejamos solo los insert