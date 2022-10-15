function calcular() {
    let numero1 = parseInt(document.getElementById("number1").value);

    let antecessor = numero1-1;

    document.getElementById("resultado").value = antecessor;
}

document.addEventListener("keypress", function(e){

    if (e.key === "Enter") {
        const btn = document.querySelector(".btn");

        btn.click();

    } 
});

function theme() {
    let css = document.getElementById("css");

    if (css.getAttribute("href") == "css/1input.css") {

        css.setAttribute("href", "css/1input02.css");
    } else {
        css.setAttribute("href", "css/1input.css");
    }

}