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
    twoDigit = loadImage('https://i.postimg.cc/NFbxwgk3/2-digit.png');
    threeDigit = loadImage('https://i.postimg.cc/Jz7k6D5p/3-digit.png');
    fourDigit = loadImage('https://i.postimg.cc/TwV9CjLY/4-digit.png');
    fiveDigit = loadImage('https://i.postimg.cc/jqhcfXYM/5-digit.png');
    sixDigit = loadImage('https://i.postimg.cc/28cxcS6v/6-digit.png');
    sevenDigit = loadImage('https://i.postimg.cc/qRTchtbf/7-digit.png');
    eightDigit = loadImage('https://i.postimg.cc/0Q0Yp8Fz/8-digit.png');
    nineDigit = loadImage('https://i.postimg.cc/QC6cyfXs/9-digit.png');
    //img = loadImage("https://i.imgur.com/4xbRm3f.jpgZ");
    //img = loadImage('https://cors-anywhere.herokuapp.com/https://imgur.com/a/QywWMUo.jpg');
}