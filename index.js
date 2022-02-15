const menu=document.querySelector(".menu");
const nav_btn=document.querySelector(".nav_btn");
const nav_btn2=document.querySelector(".nav_btn2");
const m=document.getElementById("men")
nav_btn.addEventListener('click',(e)=>{
    if (m.style.display="none") {
        m.style.display="inline-flex"
    }
    nav_btn.style.display="none"
    nav_btn2.style.display="inline-flex"
})
nav_btn2.addEventListener('click',(e)=>{
    if (m.style.display="inline-flex") {
        m.style.display="none"
    }
    nav_btn.style.display="inline-flex"
    nav_btn2.style.display="none"
})