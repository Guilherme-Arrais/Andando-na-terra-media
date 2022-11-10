let jogador = document.getElementById("personagens")
let px
let dx
let py
let dy
let vel
let animaçao
function personagem(n){
    if(n==1){
        jogador.setAttribute("class", "p1")
    }else if(n==2){
        jogador.setAttribute("class", "p2")
    }else if(n==3){
        jogador.setAttribute("class", "p3")
    }
}
function iniciar(){
    px=1
    dx=
    py=1
    dy=0
    vel=7
    document.addEventListener("keydown", posiçao)


}
function posiçao(){
    let tecla = event.key;
    if(tecla=="ArrowLeft"){
        px=-1
    }
    else if(tecla=="ArrowUp"){
        py=-1
    }
    else if(tecla=="ArrowRight"){
    px=1
}
else if(tecla=="ArrowDown"){
    py=1
}}
function parou(){
    let tecla = event.key;
if(tecla=="ArrowLeft"){
    px=0    
}else if(tecla=="ArrowUp"){
  py=0
}else if(tecla=="ArrowRight"){
    px=0
}else if(tecla=="ArrowDown"){
    py=0
}
}
function movimento(){
    dx+= px*vel
    dy+= py*vel
    jogador.style.left=dx+"px"
    jogador.style.top=dy+"px"
}
window.addEventListener("load", iniciar)

