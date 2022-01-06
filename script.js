var modo = false;

// cambia entre modo oscuro y blanco
function cambiarModo() {

    if (modo) {

        document.querySelector("body").style.background = "#19181A";

        //barra navegación
        document.querySelector(".barraNavegacion").style.background = "#19181A";
        document.querySelector(".inactivo").style.color = "white";

        //header
        document.querySelector(".header").style.background = "#19181A";
        document.querySelector(".header").style.color = "white";

        //main
        document.querySelector(".main").style.background = "#19181A";
        document.querySelector(".main").style.color = "white";

        //footer
        document.querySelector(".footer").style.background = "#19181A";
        document.querySelector(".footer").style.color = "white";

        modo = false;

    } else {

        document.querySelector("body").style.background = "#fff";

        //barra navegación
        document.querySelector(".barraNavegacion").style.background = "#fff";
        document.querySelector("#botton").style.color = "black";
        document.querySelector("#botton1").style.color = "black";
        document.querySelector("#botton2").style.color = "black";

        //header
        document.querySelector(".header").style.background = "#fff";
        document.querySelector(".header").style.color = "black";

        //main
        document.querySelector(".main").style.background = "#fff";
        document.querySelector(".main").style.color = "black";

        //footer
        document.querySelector(".footer").style.background = "#fff";
        document.querySelector(".footer").style.color = "black";

        modo = true;

    }
}