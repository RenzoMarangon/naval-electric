
const animados = document.querySelectorAll(".animacion");
animados[0].classList.add("animacionIzquierda");
animados[0].style.opacity="1"
animados[1].classList.add("animacionDerecha");
animados[1].style.opacity="1";


const animarObjetos = ()=>{
    let scrollTop = document.documentElement.scrollTop;
    animados.forEach((e)=>{
        if(e.offsetTop - 700 < scrollTop){
            if(e.classList.contains("arriba")){
                e.style.opacity="1"
                e.classList.add("animacionArriba")
            }else if(e.classList.contains("derecha")){
                e.style.opacity="1"
                e.classList.add("animacionDerecha")
            }else if(e.classList.contains("izquierda")){
                e.style.opacity="1"
                e.classList.add("animacionIzquierda")
            }else if(e.classList.contains("derechaMayor")){
                e.style.opacity="1"
                e.classList.add("animacionDerechaMayor")
            }else if(e.classList.contains("izquierdaMayor")){
                e.style.opacity="1"
                e.classList.add("animacionIzquierdaMayor")
            }
        }
    }
)}


window.addEventListener("scroll",animarObjetos);