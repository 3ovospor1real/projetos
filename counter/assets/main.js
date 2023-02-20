(function(){
    //Elemetnos
    const counter = document.querySelector('p#counter');
    const decrease = document.querySelector('button#decrease');
    const reset = document.querySelector('button#reset');
    const increase = document.querySelector('button#increase');

    let contador = 0;
    
    function mudarCor(){
        if(contador < 0) {
            counter.style.color = 'red';
        } else if (contador === 0) {
            counter.style.color = 'black';
        } else {
            counter.style.color = 'green';
        }
        
    }

    //Event Listeners
    decrease.addEventListener('click', () => {
        contador--;
        counter.innerHTML = contador;
        mudarCor();
    });
    reset.addEventListener('click', () => {
        contador = 0 
        counter.innerHTML = contador
        mudarCor();
    });
    increase.addEventListener('click', () => {
        contador++
        counter.innerHTML = contador
        mudarCor();
    });

})();