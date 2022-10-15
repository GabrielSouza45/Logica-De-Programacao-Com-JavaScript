// Regras para criar variáveis: 

// 1 Iniciar com letras, minúsculas e maiúsculas
// 2 iniciar com letras mas pode conter números depois
// 3 


let soma = 0;

function calcular() {

    let numero1 = parseInt(document.getElementById("number1").value);
    let numero2 = parseInt(document.getElementById("number2").value);

    soma = numero1 + numero2;
    document.getElementById("resultado").value = soma;

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