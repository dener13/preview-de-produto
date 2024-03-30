
//pega todas as teclas numericas e joga em um array com o spread
const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const teclaRes = document.querySelector(".res")
const display = document.querySelector(".display")
const teclaOnOff = document.querySelector("#t-on-off")
const teclaLimpar = document.querySelector('#t-limpar')
const teclaIgual = document.querySelector('#t-igual')
const divDisplay = document.querySelector('#div-display')

let sinal = false
let decimal = false



//cria um evento para cada tecla numerica
teclasNum.forEach((el) => {
  el.addEventListener("click", (evt) => { //numero é clicado
    sinal = false //reseta o sinal para false para poder ser digitado o sinal depois novamente

    

    if(evt.target.innerHTML == ','){
      if(!decimal) {
        decimal = true
        if(display.innerHTML == '0'){
          display.innerHTML = '0,'
        }
        else {
          display.innerHTML += evt.target.innerHTML
        }
        
      } 
    }
    //caso contrario.. p a virgula nao ser digitada novamente
    else {
      if (display.innerHTML == '0') { //se o display tiver o zero, apaga e poe um espaço vazio
        display.innerHTML = ''
      }
      display.innerHTML += evt.target.innerHTML //passa para o display o html dos btn
    }

    
  })
})


//cria um evento para cada tecla de operacao
teclasOp.forEach((el) => {
  el.addEventListener("click", (evt) => {

    
    if (!sinal) { //se não tiver sinal... sinal = false
      sinal = true //fica true porque um op foi digitado
      if (display.innerHTML == '0') { //se o display tiver o zero, apaga e poe um espaço vazio
        display.innerHTML = ''
      }
      if(evt.target.innerHTML == '*'){
        display.innerHTML += '*'
      } 
      //caso contrario concatena com o conteudo dele mesmo
      else {
        display.innerHTML += evt.target.innerHTML //passa para o display o html dos btn
      }
      
    }

  })
})


//limpa a tela e poe o zero no display
teclaLimpar.addEventListener("click", (evt) => {
  sinal = true
  decimal = false
  display.innerHTML = '0'
})


teclaIgual.addEventListener("click", (evt) => {
  sinal = true
  decimal = false
  const res = eval(display.innerHTML) //realiza os calculos que estiver no display
  display.innerHTML = res //passa para o display o resultado do eval
})




















