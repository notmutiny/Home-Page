$(document).ready(function() {
    
    // update external css theme on page load
    var theme = window.localStorage.getItem('theme');
    if (theme) {
        $('#theme').attr('href', theme);
        if (theme == 'styles/light.css') // change fontawesome moon icon to sun
            $('#theme-icon').removeClass('fas fa-moon').addClass('fas fa-sun');
    }
});


// -- convenience functions -- //

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


// -- logo functions -- //

var logoCache = "";

function randomLogo(element) { // change superintendents expression onmouseover
    var logoFaces = ["angry", "closed", "confused", "happy", "tired", "worried"];

    if (logoCache) // stop logo from showing a face twice
        logoFaces.splice(logoFaces.indexOf(logoCache), 1);

    logoCache = logoFaces[getRandomInt(0, logoFaces.length)];
    element.src = "logo/eyes/" + logoCache + ".png";
}

function restoreLogo(element) {
    element.src = "logo/eyes/default.png"
}


// -- footer functions -- //

function toggleTheme() {
    if ($('#theme').attr('href') == 'styles/dark.css') {
        $('#theme').attr('href', 'styles/light.css');
        $('#theme-icon').removeClass('fas fa-moon').addClass('fas fa-sun');
        window.localStorage.setItem('theme', 'styles/light.css');
    } else {
        $('#theme').attr('href', 'styles/dark.css');
        $('#theme-icon').removeClass('fas fa-sun').addClass('fas fa-moon');
        window.localStorage.setItem('theme', 'styles/dark.css');
    }
}