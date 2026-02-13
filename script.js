const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const valbx2 = document.querySelector(".val-bx2");
const valbx1 = document.querySelector(".val-bx1");
const valbx3 = document.querySelector(".val-bx3");

yesBtn.addEventListener("click", () =>{
    valbx2.classList.toggle("show");
    valbx1.classList.toggle("none");
});

noBtn.addEventListener("click", () =>{
    valbx3.classList.toggle("print");
    valbx1.classList.toggle("none");
});