/************** TIX SÍÐA *************/

var test = "ÞETTA VIRKAR!"

var mainDiv = document.querySelector("#main")

mainDiv.innerHTML = `
    Title <input id="title" type="text" />
    About <input id="about" type="text" />
    <button class="button">add item</button>
    <ul class="list"></ul>
`
var button = document.querySelector(".button");
var list = document.querySelector(".list");
var title = document.querySelector("#title");
var picture = document.querySelector("#about");
var info = function () {
    console.log("test er:", test);
    list.innerHTML += getEvent(title.value, about.value);
    title.value = "";
    about.value = "";
}
button.onclick = info;

var getEvent = function (title, info) {
    var infoEvent = 
    `
    <li class="listi">
			<div class="heading">
				<h1>${title}</h1>
			</div>
            <div class="more">
                <p>${info}</p>
			</div>
        </li>
        `
    return infoEvent;
}