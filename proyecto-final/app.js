


let contador = 0;


const valorElemento = document.querySelector("#valor");
const btnIncrementar = document.querySelector("#btn-incrementar");
const btnRestar = document.querySelector("#btn-restar");

function actualizarColor() {
    if (contador > 0) {
        valorElemento.style.color = "#16a34a"; 
    } else if (contador < 0) {
        valorElemento.style.color = "#dc2626"; 
    } else {
        valorElemento.style.color = "#0f172a";
    }
}

// 4. Evento para Incrementar
btnIncrementar.addEventListener("click", function() {
    contador++;
    valorElemento.textContent = contador;
    actualizarColor();
});


btnRestar.addEventListener("click", function() {
    contador--;
    valorElemento.textContent = contador;
    actualizarColor();
});