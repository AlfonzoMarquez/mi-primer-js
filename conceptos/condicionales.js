


const edadUsuario = 19;

if (edadUsuario >= 18) {
    console.log("¡Puedes registrarte en el torneo de mayores!");
} else if (edadUsuario >= 13) {
    console.log("¡Bienvenido a la categoría Juvenil!");
} else {
    console.log("Lo siento, necesitas ser mayor de 13 años.");
}


function calcularPuntajeTotal(puntosNivel1, puntosNivel2) {
    let total = puntosNivel1 + puntosNivel2;
    return "Puntaje Final: " + total;
}


let resultadoPuntaje = calcularPuntajeTotal(450, 320);
console.log(resultadoPuntaje); 