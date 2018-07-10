// -- convenience funcs -- //

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// -- logo funcs -- //

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