
//acessos de Ids ou classes
const on_off = document.querySelector('#on-off') 
const lamp = document.querySelector('#lamp') 
const reset = document.querySelector('#reset')
const title = document.querySelector('#title')
const principal = document.querySelector('#principal')


on_off.addEventListener('click', lampOnOff) //adiciona um evento de click e chama a função de ligar a lamp
lamp.addEventListener('dblclick', lampBreak) //adiciona um evento de duplo click e a funcao de quebrar a lampada
reset.addEventListener('click', resetLamp) //add um evento de click e chama a função de resetar a lampada


//a função de ligar só vai funcionar se a lampada nao estiver quebrada -> !isBroke (nao esta quebrada)
function lampOnOff(){
    if(!isBroke() && isTurnedOff()){
        lamp.src = './img/ligada.jpg'
        roomLightUp();
    }
    else if(!isBroke()){
        lamp.src = './img/desligada.jpg' 
        roomLightOff();     
    }
    
        
}

//a função de desligar só vai funcionar se a lampada nao estiver quebrada -> !isBroke (nao esta quebrada)


//funcao chamada quando da duplo clique pra quebrar
function lampBreak(){
    lamp.src = './img/quebrada.jpg'
}

//funcao que retorna a string quebrada
function isBroke(){
    return lamp.src.indexOf ('quebrada') > -1
}

function isTurnedOff(){
    return lamp.src.indexOf ('desligada') > -1
}

//funcão que reseta a lampada para a função desligado
function resetLamp(){
    lamp.src = './img/desligada.jpg'
}

function roomLightUp(){
    document.body.style.backgroundColor = 'white'
    title.style.color = 'black'
    principal.style.border = '1px solid black'
}

function roomLightOff(){
    document.body.style.backgroundColor = 'black'
    title.style.color = 'white'
    principal.style.border = '1px solid white'
}







