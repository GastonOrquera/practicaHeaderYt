let hamburger = document.querySelector('.hamburguer');

let nav = document.querySelector('nav');

let navLinks = document.querySelectorAll('nav a');

let ul = document.querySelector('ul');

let li = document.querySelectorAll('li');

let ancla = document.querySelectorAll('.ancla');



hamburger.addEventListener('click', function () {

    nav.classList.toggle('active');
    ul.classList.toggle('active');

    li.forEach(function (lis) {
        lis.classList.toggle('active');
    });

    ancla.forEach(function (anclas) {
        anclas.classList.toggle('active');
    });
    navLinks.forEach(function (links) {
        links.addEventListener('click', function () {
            nav.classList.remove('active');

            li.forEach(function (lis) {
                lis.classList.remove('active');
            });
            ancla.forEach(function (anclas) {
                anclas.classList.remove('active');
            });

        });
    });




});