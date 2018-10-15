/************** VERKEFNI 3 *************/
/************** TAKKI SEM BREYTIR BAKGRUNNSLIT *************/

var test ="ÞETTA VIRKAR!"

console.log(test);


var button = document.querySelector("#button");
var allchar = "0123456789ABCDEF";

function changeColor() {
    var randcol = "";
    for(var i=0; i<6; i++) {
        randcol += allchar[Math.floor(Math.random()*16)];
    }
    document.body.style.backgroundColor = "#"+randcol;
}

button.onclick = changeColor;