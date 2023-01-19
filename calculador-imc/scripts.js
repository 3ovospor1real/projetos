/* 
    IMC = peso/ altura(em metros) ^ 2

    Menor que 17  = Muito abaixo do peso
    17 a 18.5     = Abaixo do peso
    18.5 a 24.9   = Peso normal
    25 a 29.9     = Acima do Peso
    30 a 34.9     = Obesidade
    35 a 39.9     = Obesidade (severa)
    Acima de 40   = Obesidade (mórbita)
*/


function calcular () {
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const res = document.getElementById('res');
    const resBar = document.getElementById('res_bar')
    
    if (altura.value.length == 0 || peso.value.length == 0) {
        alert('[ERROR] Insira os dados e tente novamente!');
    } else {
        // calcula o IMC baseado nos dados inseridos
        let imc = peso.value / altura.value ** 2;
        
        // determina o diagnóstico
        if (imc < 17){
            //muito abaixo
            res.innerHTML = `Você está muito abaixo do peso ideal! <br> <span style='color: var(--mAbaixo);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/muito-abaixo.png)'
            resBar.style.backgroundColor = 'var(--mAbaixo)'

        } else if (imc >= 17 & imc < 18.5) {
            //abaixo
            res.innerHTML = `Você está abaixo do peso ideal!<br> <span style='color: var(--abaixo);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/abaixo.png)'
            resBar.style.backgroundColor = 'var(--abaixo)'

        } else if (imc  >= 18.5 & imc < 25) {
            //normal
            res.innerHTML = `Você está com o peso normal! <br> <span style='color: var(--normal);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/normal.png)'
            resBar.style.backgroundColor = 'var(--normal)'

        } else if (imc >= 25 & imc < 30) {
            //acima
            res.innerHTML = `Você está acima do peso! <br> <span style='color: var(--acima);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/acima-peso.png)'
            resBar.style.backgroundColor = 'var(--acima)'

        } else if (imc >= 30 & imc < 35) {
            //obeso
            res.innerHTML = `Você está obeso! <br> <span style='color: var(--obeso);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/obeso.png)'
            resBar.style.backgroundColor = 'var(--obeso)'

        } else if (imc >= 35 & imc < 40) {
            //obesidade severa
            res.innerHTML = `Você está com obesidade severa <br> <span style='color: var(--severa);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/severa.png)'
            resBar.style.backgroundColor = 'var(--severa)'

        } else {
            //obesidade mórbita
            res.innerHTML = `Você está com obesidade mórbita! <br> <span style='color: var(--morbita);'> IMC = ${imc.toFixed(2)} </span>`
            document.body.style.backgroundImage = 'url(images/morbita.png)'
            resBar.style.backgroundColor = 'var(--morbita)'

        }
    }
    
}
