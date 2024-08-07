const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu_close');

hamburger.addEventListener('click' , () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click' , () => {
    menu.classList.remove('active');
});

/* const counters = document.querySelectorAll('rating'),
    lines = document.querySelectorAll('.skill_scale-Y');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML; скрипт на зависимость процентов - НЕ РАБОТАЕТ
}); */