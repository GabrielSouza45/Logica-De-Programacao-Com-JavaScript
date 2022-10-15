// Escreva um algoritmo para ler as dimensões de um trapézio 
// (base maior, base menor e altura), calcular e escrever a área do trapézio. a=(B+b).h/2 

function calcular() {
    let B = parseFloat(document.getElementById("B").value);
    let b = parseFloat(document.getElementById("b").value);
    let h = parseFloat(document.getElementById("h").value);

    let area = (B + b) * h / 2;

    document.querySelector("#resultado").value = area;


}


document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        const btn = document.querySelector(".btn");

        btn.click();
    }
})

function theme() {
    let css = document.getElementById("css");

    if (css.getAttribute("href") == "css/inputstyle.css") {

        css.setAttribute("href", "css/input02.css");
    } else {
        css.setAttribute("href", "css/inputstyle.css");
    }

}