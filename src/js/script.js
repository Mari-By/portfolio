const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');
    menuLinks = document.querySelectorAll('.menu_list .menu_link a');

hamburger.addEventListener('click' , () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click' , () => {
    menu.classList.remove('active');
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

/* const counters = document.querySelectorAll('rating'),
    lines = document.querySelectorAll('.skill_scale-Y');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; скрипт на зависимость процентов - НЕ РАБОТАЕТ
}); */