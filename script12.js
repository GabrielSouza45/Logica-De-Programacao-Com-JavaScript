// Escreva um algoritmo para ler as dimensões de um círculo (raio), 
// calcular e escrever a área do círculo. a=pi*r² 

function calcular() {
    let raio = parseFloat(document.querySelector("#number1").value);

    let area = Math.PI * Math.pow(raio, 2);

    document.querySelector("#resultado").value = area.toFixed(2);
}

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const btn = document.querySelector(".btn");

        btn.click();
    }
})

function theme() {
    let css = document.getElementById("css");

    if (css.getAttribute("href") == "css/1input.css") {

        css.setAttribute("href", "css/1input02.css");
    } else {
        css.setAttribute("href", "css/1input.css");
    }

}