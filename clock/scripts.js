
const body = document.getElementsByTagName('body')[0];


// obtem as informações de hora, dia, mês e ano
let now = new Date()
let array = {ano: now.getFullYear(), diaSemana: weekDay(), mes: month(),diaMes:now.getDate(), hora: now.getHours(), minuto: String(now.getMinutes())}

// altera a imagem de fundo da página
if( array.hora >= 6 && array.hora < 12) {
    // manha
    body.style.backgroundImage = 'url(image/manha.jpg)'
    body.style.backgroundPosition = 'center top'
} else if ( array.hora >= 12 && array.hora < 18) {
    //tarde
    body.style.backgroundImage = 'url(image/tarde.jpg)'
} else {
    //noite
    body.style.backgroundImage = 'url(image/noite.jpg)'
}

// dia da semana
const diaSemana = document.querySelector('h1#dia_semana');
diaSemana.innerHTML = array.diaSemana

// horas e minutos
const hora = document.querySelector('span#hora');
if(String(array.hora).length == 1) array.hora = '0' + array.hora
hora.innerHTML = array.hora
const minuto = document.querySelector('span#minuto');
if(array.minuto.length == 1) array.minuto = '0'+array.minuto
minuto.innerHTML = array.minuto

// dia do mês
const diaMes = document.querySelector('span#dia_mes');
diaMes.innerHTML = array.diaMes

// mês
const mes = document.querySelector('span#mes');
mes.innerHTML = array.mes

//ano
const ano = document.querySelector('span#ano');
ano.innerHTML = array.ano

//função para definir o dia da semana
function weekDay(){
    switch (now.getDay()) {
        case 0:
            return 'Domingo'
            break;
        case 1:
            return 'Segunda-feira'
            break
        case 2:
            return 'Terça-feira'
            break
        case 3:
            return 'Quarta-feira'
            break
        case 4:
            return 'Quinta-feira'
            break
        case 5:
            return 'Sexta-feira'
            break
        case 6:
            return 'Sábado'
            break
    }
}

function month() {
    switch (now.getMonth()) {
        case 0:
            return 'Janeiro'
            break;
        case 1:
            return 'Fevereiro'
            break;
        case 2:
            return 'Março'
            break;
        case 3:
            return 'Abril'
            break;
        case 4:
            return 'Maio'
            break;
        case 5:
            return 'Junho'
            break;
        case 6:
            return 'Julho'
            break;
        case 7:
            return 'Agosto'
            break;
        case 8:
            return 'Setembro'
            break;
        case 9:
            return 'Outubro'
            break;
        case 10:
            return 'Novembro'
            break;
        case 11:
            return 'Dezembro'
            break;
    }
}