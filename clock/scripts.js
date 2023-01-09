
const body = document.getElementsByTagName('body')[0];

// obtem as informações de hora, dia, mês e ano
let now = new Date()
let array = {diaSemana: weekDay(), mes: now.getMonth(), hora: now.getHours()}

array.hora = 18

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