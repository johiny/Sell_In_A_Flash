const buscador = document.getElementById("Buscador");
console.log(buscador);
buscador.addEventListener('keyup', (e) =>{
    console.log(e.target.value);
});