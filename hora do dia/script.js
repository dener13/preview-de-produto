

function carregar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imgs/day.jpg'
    } 
    else if(hora > 12 && hora < 18){
        //boa tarde
        img.src = 'imgs/tarde.jpg'
    }
    else{
        //boa noite
        img.src = 'imgs/night.jpg'
    }
}


