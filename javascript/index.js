const menuHamburguesa = document.querySelector(".header-container__menu-responsive");
const linkContainer = document.querySelector(".header-container__link");
const header = document.querySelector("header");
const main = document.querySelector("main");


let mostrarocultar=false;
menuHamburguesa.addEventListener("click",()=>{
    if(!mostrarocultar){
        linkContainer.style.height=linkContainer.scrollHeight+"px";
        mostrarocultar=true;
    }else{
        linkContainer.style.overflow="hidden"
        linkContainer.style.height=0;
        mostrarocultar=false;
    }
   
    menuHamburguesa.classList.toggle("click-menu-hamburguesa");
    setTimeout(()=>{
        menuHamburguesa.classList.toggle("click-menu-hamburguesa");
    },200)
    
})

// main.addEventListener("click",()=>{
//     header.style.height=header.scrollHeight-linkContainer.scrollHeight+"px";
//     linkContainer.style.display="none";
    
// })
