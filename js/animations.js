document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Animations ready !');

    var toggle = document.querySelector('.menu__labelH');

    toggle.addEventListener('click', (e) => {
        var element = document.querySelector('.menu__labelH');

        element.classList.toggle('transformMenu');
    });
});