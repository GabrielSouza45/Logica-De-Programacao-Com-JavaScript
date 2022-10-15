// Escreva um algoritmo para ler as dimensões de um quadrado (lado), calcular e escrever a área do quadrado. Dica a=ll² 


function calcular() {

    let lado = parseFloat(document.getElementById("number1").value);
    let area = Math.pow(lado, 2);

    document.getElementById("resultado").value = area;
}

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        const btn = document.querySelector(".btn");

        btn.click();

    }
});

function theme() {
    let css = document.getElementById("css");

    if (css.getAttribute("href") == "css/inputstyle.css") {

        css.setAttribute("href", "css/input02.css");
    } else {
        css.setAttribute("href", "css/inputstyle.css");
    }

}