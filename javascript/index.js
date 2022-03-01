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

const animados = document.querySelectorAll(".animacion");


animados[0].classList.add("animacionIzquierda");
animados[0].style.opacity="1";
animados[1].classList.add("animacionDerecha");
animados[1].style.opacity="1";
animados[2].classList.add("animacionArriba");
animados[2].style.opacity="1";

const animarObjetos = ()=>{
    let scrollTop = document.documentElement.scrollTop;
    animados.forEach((e)=>{

        
        if(e.offsetTop - 500 < scrollTop && e.id=="sobre-nosotros"){
            e.classList.add("animacionDerechaMayor")
            e.style.opacity="1";
        }else if(e.offsetTop - 500 < scrollTop && e.id=="contamos-con"){
            e.classList.add("animacionIzquierdaMayor")
            e.style.opacity="1";
        }else if(e.offsetTop - 500 < scrollTop){
            e.classList.add("animacionArriba")
            e.style.opacity="1";
        }

    })
}

window.addEventListener("scroll",animarObjetos);
