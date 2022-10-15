// Escreva um algoritmo para ler as dimensões de um losango (diagonal maior, diagonal menor), calcular e escrever a área do losango. 
// Dica a=D.d/2

function calcular(){
    let D = parseFloat(document.getElementById("number1").value);
    let d = parseFloat(document.getElementById("number2").value);

    let area = D*d/2;

    document.getElementById("resultado").value = area;
}

function theme() {
    let css = document.getElementById("css");

    if (css.getAttribute("href") == "css/inputstyle.css") {

        css.setAttribute("href", "css/input02.css");
    } else {
        css.setAttribute("href", "css/inputstyle.css");
    }

}