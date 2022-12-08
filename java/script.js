let body = document.querySelector('body'),
    li = document.querySelectorAll('li'),
    h1 = document.querySelectorAll('h1'),
    h3 = document.querySelectorAll('h3'),
    h4 = document.querySelectorAll('h4'),
    logo = document.querySelector('logo'),
    service = document.querySelector('.services'),
    goal = document.querySelector('.goal'),
    aboutUs = document.querySelector('.about_us'),
    lan = document.querySelector('.lan'),
    theme = document.querySelector('.theme');


theme.addEventListener('click', () => {

    body.classList.toggle('light_background');
    body.classList.toggle('mark');

    for (let i = 0; i < li.length; i++) {
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

    

    if (body.classList.contains('mark')) { 

        theme.innerHTML = "Light Theme";
        document.getElementById('logo').src = "images/logo dark g.png"
        document.getElementById('logo2').src = "images/logo dark g.png"
} else {

        theme.innerHTML = "Dark Theme";
        document.getElementById('logo').src = "images/logo light g.png"
        document.getElementById('logo2').src = "images/logo light g.png"
}
})
