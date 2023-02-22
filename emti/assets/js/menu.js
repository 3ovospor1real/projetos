(function(){
    const menuBtn = document.querySelector('#menu');
    const nav = document.querySelector('.menu-escondido');

    menuBtn.addEventListener('click', (e) => {
        if(nav.style.display === '') {
            nav.style.display = 'block'
        } else {
            nav.style.display = ''
        }
    })
}) ();
