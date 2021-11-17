
var page = document.getElementById('page').clientHeight;
var mask = document.querySelector('.mask');

var navigation = document.getElementById('navigation');
var burger = document.getElementById('burgerButton');

burger.addEventListener('click', function (event) {
    event.preventDefault();

    navigation.classList.toggle('show');
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        navigation.classList.remove('show');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


window.onscroll = function showHeader () {
    let header = document.querySelector('.header');

    if (window.pageYOffset > (page)) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove()
    }, 800);
});

// const time = 4000;
// const step = 29;

// function outNum(num, elem) {
//     let l = document.querySelector('#' + elem);
//     n = 0;
//     let t = Math.round(time/(num/step));
//     let interval = setInterval(() => {
//         n = n + step;
//         if (n >= num) {
//             clearInterval(interval);
//             n = num;
//         }
//         l.innerHTML = n;
//     }, t);
// }

// outNum(3000, 'out-num-2');
// outNum(1057, 'out-num-1');


