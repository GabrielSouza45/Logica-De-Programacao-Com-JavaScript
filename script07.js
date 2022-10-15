// Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo. Dica a=b.h 


function calcular(){

    let base = parseFloat(document.getElementById("number1").value);
    let altura = parseFloat(document.getElementById("number2").value);

    let area = base*altura;

    document.getElementById("resultado").value = area;

}

document.addEventListener("keypress", function(e){

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