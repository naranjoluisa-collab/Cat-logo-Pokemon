/*// Funciones
//1. Función No tiene Parametros, No Retorna Valor
function saludar(){
    console.log("¡Hola! Bienvenido a JavaScript.");
}
// 2. Función Tiene Parametros, No Retorna Valor
function saludarconNombre(nombre){
    console.log("¡Hola, " + nombre + "! Bienvenido a JavaScript.");
}
// 3. Función No Tiene Parametros, Retorna Valor
function saludar(){
    return "¡Hola! Bienvenido a JavaScript.";
}   
// 4. Función Tiene Parametros, Retorna Valor
function saludarconNombre(nombre){
    return "¡Hola, " + nombre + "! Bienvenido a JavaScript.";
}   


// Ejecutar la función
saludar();
saludarconNombre("Juan");
let mensaje = saludar();
console.log(mensaje);
console.log(saludar());
console.log(saludarconNombre("Brahian"));
console.log(saludarconNombre("Luisa"));
console.log(saludarconNombre("Daniel"));

function sumar(a,b){
    return a + b;
}

let resultado = sumar(5, 3);
console.log("El resultado de la suma es: " + resultado);
console.log(sumar(10, 20));
console.log(sumar(-5, 15));*/
const prompt = require("prompt-sync")();

function menu(){
    while(true){
        console.log("Seleccione una opción:\n1.Registrar un aprendiz\n2.Buscar \n3.Editar \n4.Listar \n5.Salir");
        let opcion = prompt("Ingrese el número de la opción: ");
        switch(opcion){
            case "1":
                registrarAprendiz();
                console.log("Registrar un aprendiz");
                break;
            case "2":
                buscarAprendiz();
                console.log("Buscar");
                break;
            case "3":
                editarAprendiz();
                console.log("Editar");
                break;  
            case "4":
                listarAprendices();
                console.log("Listar");
                break;
            case "5":
                console.log("Salir");
                return; // Salir del menú  
            default:
                console.log("Opción no válida. ");
        }
    }
}

function registrarAprendiz(){
   
}

function buscarAprendiz(){

}

function editarAprendiz(){

}
function listarAprendices(){

}



// Ejecutar el menú
// menu();
function myFunction(){
console.log(myFunction(5,3).toString()); //Devuelve 15
console.log(typeof(myFunction));  //Devuelve "Function"
console.log(typeof(myFunction(5,6))); //Devuelve "myFunction"
}


