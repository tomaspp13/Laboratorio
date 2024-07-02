const nav_ = document.querySelector("#Nav");
const abrir_ = document.querySelector("#Abrir");
const cerrar_ = document.querySelector("#Cerrar");

abrir_.addEventListener("click", () => {
    nav_.classList.add("visible");
});

cerrar_.addEventListener("click", () => {
    nav_.classList.remove("visible");
});