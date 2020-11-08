var handOverDevice;
var handLeftDevice;
var handRightDevice;
var handBelowDevice;
var handAboveDevice;
var handCloseDevice;
var handFarDevice;
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    handOverDevice = loadImage('https://i.postimg.cc/tCxQ12cv/hand-over-device.jpg');
    handLeftDevice = loadImage('https://i.postimg.cc/D0W73Qdb/hand-to-left.jpg');
    handRightDevice = loadImage('https://i.postimg.cc/PfLLj1q4/hand-to-right.jpg');
    handBelowDevice= loadImage('https://i.postimg.cc/MTnGz8zT/hand-to-down.jpg');
    handAboveDevice= loadImage('https://i.postimg.cc/SQzK5qZ1/hand-to-up.jpg');
    handCloseDevice= loadImage('https://i.postimg.cc/fRMTJdM1/hand-to-close-annotated.png');
    handFarDevice = loadImage('https://i.postimg.cc/g0TYSB3P/hand-to-far-away-annotated.png');

    zeroDigit = loadImage('https://i.postimg.cc/Qx6W9Ncw/0-digit.png');
    oneDigit = loadImage('https://i.postimg.cc/sfmMqfHx/1-digit.png');
    //img = loadImage("https://i.imgur.com/4xbRm3f.jpgZ");
    //img = loadImage('https://cors-anywhere.herokuapp.com/https://imgur.com/a/QywWMUo.jpg');
}