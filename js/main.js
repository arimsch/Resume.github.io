const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const nextSlide = document.getElementsByClassName('text-me');
const nextBtn = document.querySelector('#nextTxtBtn');
let ind = 0;

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }

}

AOS.init({
    once: true
});

nextBtn.onclick = () => {
    let arr = ["Отучилась 3 года на врача-биофизика.<br> Поняла, что не хочу быть в медицине и вернулась в программирование, которым занималась в школе",
        "Постоянно изучаю что-то новое.<br> Уже освоила скорочтение (это правда работает!) и десятипальцевый методом слепой печати (тут ещё стоит попрактиковаться)",
        "Верю, важна не цель, а удовольствие на пути к ней",
        "Этот сайт не идеален, но он сделан с удовольствием и желанием стать настоящим специалистом"
    ];
    ind++;
    nextSlide[0].innerHTML = arr[ind % (arr.length)];
    //nextSlide.innerHTML = arr[ind % (arr.length - 1)];
    console.log(ind);

}