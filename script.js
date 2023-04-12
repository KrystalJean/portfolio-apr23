const navLinks = document.querySelectorAll('.nav-link');
const underlines = document.querySelectorAll('.underline');
const flips = document.querySelectorAll('.flip');
const pages = document.querySelectorAll('.page');
// const columnTitles = document.querySelectorAll('.column-titles');
// let caps = [];

// const word = columnTitles[0].innerHTML
// const split = word.split('');
// for (let i = 0; i < split.length; i++) {
//     caps.push(split[i].toUpperCase());
// }
// const join = caps.join('')
// columnTitles[0].innerHTML = join
// console.log(join);

for (let i = 0; i < navLinks.length; i++) {

    function underlineToggle() {
        underlines.forEach(underline => {
            underline.classList.remove('gradient');
        })
        underlines[i].classList.add('gradient');
    }

    function chevronToggle() {
        flips.forEach(flip => {
            flip.classList.add('fa-chevron-up');
            flip.classList.remove('fa-chevron-down');
        })
        flips[i].classList.add('fa-chevron-down');
        flips[i].classList.remove('fa-chevron-up');
    }

    function textGradientToggle() {
        navLinks.forEach(navItem => {
            navItem.classList.remove('text-gradient');
        })
        navLinks[i].classList.add('text-gradient');
    }

    function activate() {

        underlines.forEach(underline => {
            underline.classList.remove('gradient-active');
        })
        underlines[i].classList.add('gradient-active');

        chevronToggle();

        navLinks.forEach(navItem => {
            navItem.classList.remove('text-gradient-active');
        })
        navLinks[i].classList.add('text-gradient-active');

        pages.forEach(page => {
            page.classList.remove('flex-start');
            page.classList.add('hide');
        })
        pages[i].classList.add('flex-start');

    }

    // EVENTS

    navLinks[i].onmouseover = function addGradient() {
        underlineToggle();
        textGradientToggle();
    }

    navLinks[i].onmouseleave = function removeGradient() {

        underlines.forEach(underline => {
            underline.classList.remove('gradient');
        })

        navLinks.forEach(navItem => {
            navItem.classList.remove('text-gradient');
        })
    }

    navLinks[i].addEventListener('click', activate);

};
