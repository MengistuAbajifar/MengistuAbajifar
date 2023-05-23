const optionBtn = document.querySelector(".option-btn");
const rotate = document.querySelectorAll(".line-1")
const menu = document.querySelector(".menu");
const bg = document.querySelector(".dark-bg");

bg.addEventListener("click", ()=>{
    optionBtn.classList.toggle("on");
    rotate[0].classList.toggle("on-line-1");
    rotate[1].classList.toggle("on-line-2");
    rotate[2].classList.toggle("on-line-3");
    menu.classList.toggle("menu-open");
    bg.classList.toggle("dark-bg-on");
})
optionBtn.addEventListener("click", ()=>{
    optionBtn.classList.toggle("on");
    rotate[0].classList.toggle("on-line-1");
    rotate[1].classList.toggle("on-line-2");
    rotate[2].classList.toggle("on-line-3");
    menu.classList.toggle("menu-open");
    bg.classList.toggle("dark-bg-on");
})
