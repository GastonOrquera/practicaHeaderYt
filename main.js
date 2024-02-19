let hamburger = document.querySelector('.hamburguer');

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');

let ul = document.querySelector('ul');

let li = document.querySelectorAll('li');

let liHov = document.querySelectorAll('.lihov');

let ancla = document.querySelectorAll('.ancla');

let anclas = document.querySelectorAll('.noneJs');

let arrowRight = document.querySelector('.bi-chevron-right');

let hr = document.querySelector('.hr');


hamburger.addEventListener('click', function () {

    nav.classList.toggle('active');
    ul.classList.toggle('active');

    hr.classList.toggle('mostrarHr');

    arrowRight.classList.toggle('active');

    liHov.forEach(function (liHovs) {
        liHovs.classList.toggle('active');
    });

    li.forEach(function (lis) {
        lis.classList.toggle('active');
    });

    ancla.forEach(function (anclas) {
        anclas.classList.toggle('active');
    });

    anclas.forEach(function (anclass) {
        anclass.classList.toggle('active');
    });

    navLinks.forEach(function (links) {
        links.addEventListener('click', function () {
            nav.classList.remove('active');
            hr.classList.remove('mostrarHr');
            li.forEach(function (lis) {
                lis.classList.remove('active');
            });
            ancla.forEach(function (anclas) {
                anclas.classList.remove('active');
            });

            anclas.forEach(function (anclass) {
                anclass.classList.remove('active');
            });
        });
    });

});




