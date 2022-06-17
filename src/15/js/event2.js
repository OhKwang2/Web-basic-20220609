const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

//camel 표기법 사용하면 안 먹힘
btn1.onclick = () => {
    box1.classList.toggle("box-resize");
    box1.classList.toggle("box-bg-change");
}

btn2.onclick = () => {
    box2.classList.toggle("box-resize");
    box2.classList.toggle("box-bg-change");
}

box1.onmouseover = () => {
    box1.classList.toggle("box-bg-change");
}

box1.onmouseout = () => {
    box1.classList.toggle("box-bg-change");
}