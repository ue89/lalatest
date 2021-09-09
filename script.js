'use strict';

let setImage = [
    "./images/st1.jpg",
    "./images/st2.jpg",
    "./images/st3.jpg"
];

let counter = 0;

function slideimage() {
    if (counter > (setImage.length - 1)) {
        counter = 0;
    }
    document.getElementById("home").style.backgroundImage = "url(" + setImage[counter] + ")";
    counter++;
}

setInterval("slideimage()", 3000);


// 占い結果表示
let myTable = new Array(
    "fool1.html",
    "fool2.html",
    "magician1.html",
    "magician2.html",
    "high_priestess1.html",
    "high_priestess2.html"
);

function myRndLink() {
    let myRnd = Math.floor(Math.random() * myTable.length);
    location.href = myTable[myRnd];
}

bubbly({
    colorStart: '#fff4e6',
    colorStop: '#ffe9e4',
    blur: 1,
    compose: 'source-over',
    bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
});