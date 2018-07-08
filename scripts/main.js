// -- convenience funcs -- //

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// -- logo funcs -- //

function randomLogo(element) {
    var eyes = ["angry", "closed", "confused", "happy", "tired", "worried"];
    element.src = "logo/eyes/" + eyes[getRandomInt(0, eyes.length)] + ".png";
}

function restoreLogo(element) {
    element.src = "logo/eyes/default.png"
}