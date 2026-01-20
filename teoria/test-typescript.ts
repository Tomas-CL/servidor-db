const str = "hola mundo"
const n = 123

console.log(str, typeof str)
console.log(n, typeof n)

const str1: string = "hola mundo"
const n1: number = 123
const b1: boolean = true

function suma(a: number, b: number){
    return a + b
}

console.log(suma(2, 3), typeof suma(2, 3))

function saludo( nombre: string, edad: number, favorita:string){
    return `Hola soy ${nombre}, tengo ${edad} y mi cosa favorita es ${favorita}`
}

type generoTipo = "Masculino" | "Femenino" | "Otro"

function generoTipo() {
    const nombre: string = "usuario" + Math.floor(Math.random() * 999)
    const genero: generoTipo = "Masculino"
    return (nombre, genero)

}
