let body = document.querySelector('body'),
    li = document.querySelectorAll('li'),
    h1 = document.querySelectorAll('h1'),
    h3 = document.querySelectorAll('h3'),
    h4 = document.querySelectorAll('h4'),
    service = document.querySelector('.services'),
    goal = document.querySelector('.goal'),
    aboutUs = document.querySelector('.about_us'),
    lan = document.querySelector('.lan'),
    theme = document.querySelector('.theme');


theme.addEventListener('click', () => {

    body.classList.toggle('light_background');
    body.classList.toggle('mark');

    theme.innerHTML = "Dark Theme";

    if (body.classList.contains('mark')) { theme.innerHTML = "Light Theme"; }

    for (let i=0; i<li.length; i++) {
        li[i].classList.toggle('light_secondary')
    }

    for (let j = 0; j < h1.length; j++) {
        h1[j].classList.toggle('light_primary')
    }

    for (let k = 0; k < h3.length; k++) {
        h3[k].classList.toggle('light_secondary')
    }

    for (let l = 0; l < h4.length; l++) {
        h4[l].classList.toggle('light_primary')
    }
})
