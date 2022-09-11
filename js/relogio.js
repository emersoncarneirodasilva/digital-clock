let hra
let min
let sec

let day = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
let month = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")


let clock = function() {
   let date = new Date()
   hra = date.getHours().toString().length < 2 ? "0" + date.getHours() : date.getHours()
   min = date.getMinutes().toString().length < 2 ? "0" + date.getMinutes() : date.getMinutes()
   sec = date.getSeconds().toString().length < 2 ? "0" + date.getSeconds() : date.getSeconds()

   let time = `${hra}:${min}:${sec}`
   let fullDate = `${day[date.getDay()]}, ${date.getDate()} de ${month[date.getMonth()]} de ${date.getFullYear()}`

   document.getElementById("time").innerHTML = time
   document.getElementById("date").innerHTML = fullDate
}

clock()                                                              // chamar o clock() aqui faz o relógio ñ suma qndo é atualizado

setInterval(function(){clock()}, 1000)
