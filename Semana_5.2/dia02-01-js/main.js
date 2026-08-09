// console.log('Hola JS!')
// TIPO DE DATOS PRIMITIVOS (Number, string, boolean, null, undefined....
// BigInt )
// TIPO DE DATOS NO PRIMITIVOS (Arrays, Objetos)

// ARRAYS - arreglos 
// contiene elemento de cualquier tipo 

const arregloVacio = []
const listadenumeros = [25, 36, 15.60, -50]
const listadevalores = [1, 2, 'Daniel', true, null, undefined]

console.log(arregloVacio)
console.log(listadenumeros)
console.log(listadevalores)

// Lectura de los elementos de un arreglo

console.log(listadevalores[2])

// Escritura en un arreglo =operador de asignación
listadevalores[2] = 'juan'
listadevalores[5] = 'jorge'

console.log(listadevalores)


Object.freeze(listadevalores)
listadevalores[4] = 'sera'
console.log(listadevalores)

//Insertar nuevos elementos (push)
const listadenombres = ['Daniel', 'jorge']
console.log(listadenombres)
listadenombres.push('victor')
console.log(listadenombres)

//Eliminar elementos de arreglo final (pop)
listadenombres.pop()
console.log(listadenombres)

//insertar un elemento una posición determinada
listadenombres.splice(0,0,'código')
listadenombres.splice(2,0,'pos 2')
console.log(listadenombres)

//Eliminar un elemento en una posición determinada
listadenombres.splice(2,1)
console.log(listadenombres)

//Obtener el tamaño del arreglo
console.log(listadenombres.length)
console.log('holiiiiii'.length)

//Obtener el ultimo elemenoto del arreglo
console.log(listadenombres[3-1])
console.log(listadenombres[listadenombres.length-1])
console.log(listadenombres.at(0)) //trae la posicion 0
console.log(listadenombres.at(-1)) // trae el ultimo de la posicion

//TODO: oTRAS FUNCIONES -slice (investigar) no recuerdoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo


//METODOS DE ARREGLO (includes, filter, map, sort, foreach, reduce)

//includes verifica si existe un elemento dentro del arreglo

const lenguajes=['javascrip', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(lenguajes.includes('java')) //true
console.log(lenguajes.includes('daniel')) //false

//filter ubica elementos usando una condicion y devuelve un nuevo arreglo con lo que encontró

const resultado = lenguajes.filter(function (varecorrer){
    //return varecorrer === 'python' //condicion directa
    //return varecorrer.includes('c') || varecorrer.includes('C') junta ambos como si fuera un operador
    //return varecorrer.toLowerCase().includes('c') ......hace lo mismo pero sin usar operador Y
})
console.log(resultado)

//MÉTODO MAP evalua el arreglo lo modifica pero tenemos que pasarle una función
//devuelve arreglo modificado .... pero devuelve un nuevo arreglo 

console.log(lenguajes)

const nombreConTituloEspecial = lenguajes.map(function(lenguaje){
    //aqui va la lógica VEALUA Y MODIFICA EL ARREGLO
    return '*'+lenguaje+'*'

})
console.log(nombreConTituloEspecial)


//MÉTODO SORT ordena elementos de un arreglo 
//va a mutar al arreglo original asi que cuidado
//USAR toSorted() en lugar de sort como recomendación

//const ordenandoLenguajes = lenguajes.sort()
const ordenandoLenguajes = lenguajes.toSorted()

console.log(ordenandoLenguajes)
console.log(lenguajes)

//METODO FOREACH nos ayuda a recorrer sin tener retorno de datos
 
for(let index = 0; index < 0 ; index++) {
    console.log(index)
}

const miArreglo=[]

lenguajes.forEach(function(lenguaje){

    console.log('#',lenguaje)
    miArreglo.push('El mejor: ' + lenguaje)
})
console.log(miArreglo)


//METODO REDUCE nos ayuda a acumular sumar los valores del arreglo 
const numeros =[3, 40, 100, 7, 50]

//con FOR
let sumatoria=0
for (let i=0; i<numeros.length; i++){

    sumatoria=sumatoria+numeros[i]
}

console.log(sumatoria)


const sumatoriaConReduce =numeros.reduce(function(acumulador,valorActual){
    return acumulador + valorActual
}, 0)

console.log(sumatoriaConReduce)

//OBJETOS .- Envoltura para datos // uarda información en pares : valor
//Sirve para agrupar datos relacionados en un solo lugar 

/*

{
    KEY: VALUE: (,)
    KEY2, VALUE2
}

*/

const miObjetoVacio = {}
console.log(miObjetoVacio)

const persona = {
    nombre: 'Daril',
    edad: 28,
    esProgramador: true,
    "mi color favorito": 'azul',
    coloresFavoritos: ['rosado','rojo']
}

const persona2 = {
    nombre: 'Jorge',
    edad: 15,
}

//Leer los campos de un objeto (notacion de punto y de corchete)

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona2.nombre)
console.log(persona2.signo)
console.log(persona.coloresFavoritos)
console.log(persona.coloresFavoritos[1])
console.log(persona["mi color favorito"])

//Eliminar propiedades 

delete persona2.edad
persona2.esProgramador=undefined
console.log(persona2)

// insertar nueva propiedad

persona.platilloFavorito = 'Ceviche de conchas negras'
