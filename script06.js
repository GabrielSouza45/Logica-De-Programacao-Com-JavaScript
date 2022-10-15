function dividir(){
    let numero1 = parseInt(document.getElementById("number1").value);
    let numero2 = parseInt(document.getElementById("number2").value);

    let divisao = numero1 / numero2;

    document.getElementById("resultado").value = divisao;
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