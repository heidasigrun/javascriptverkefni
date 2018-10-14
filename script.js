/******************** JAVASCRIPT - VERKEFNI 2 ***********************/

/***************** DAGSETNING ***************/

var d = new Date();
document.getElementById("date") .innerHTML = d.toDateString();


/**************** KLUKKA ****************/

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


/************* MOUSEOVER = TEXTI BREYTIR UM LIT *************/
/************* ONCLICK = SEGIR GÓÐAN DAG Á DAGINN - GOTT KVÖLD Á KVÖLDIN *************/

document.getElementById("clickme").onmouseover = function () { mouseOver() };
document.getElementById("clickme").onmouseout = function () { mouseOut() };
document.getElementById("clickme").onclick = function () { onClick() };
function mouseOver() {
    document.getElementById("clickme").style.color = "white";
}
function mouseOut() {
    document.getElementById("clickme").style.color = "black";
}
function onClick() {
    var time = new Date().getHours();
    if (time < 19) {
        document.getElementById("daynight").innerHTML = "Góðan dag";
    } else {
        document.getElementById("daynight").innerHTML = "Gott kvöld";
    }
}


/************** HRINGUR ***************/

var boxLeftPosition = 0;
var goLeft = function (e) {
    console.log(e.key);
    if (e.key === "ArrowRight") {
        boxLeftPosition = boxLeftPosition + 30;
        box.style.marginLeft = boxLeftPosition + "px";
    }
    else if (e.key === "ArrowLeft") {
        boxLeftPosition = boxLeftPosition - 30;
        box.style.marginLeft = boxLeftPosition + "px";
    }
}

document.onkeydown = goLeft;
