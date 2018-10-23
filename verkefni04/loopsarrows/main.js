/******************** VERKEFNI 4 *********************/

var myDiv = document.querySelector("#main")

/******************** INPUT FIELDS *********************/

var inputButton = document.querySelector("#inputbtn");
var nameInput = document.querySelector("#nafn");
var infoInput = document.querySelector("#info");
var emailInput = document.querySelector("#email");
var fbInput = document.querySelector("#fb");
var instaInput = document.querySelector("#insta");
var imgInput = document.querySelector("#img");

inputButton.onclick = function () {
	names.push(nameInput.value);
	info.push(infoInput.value);
	email.push(emailInput.value);
	facebook.push(fbInput.value);
	instagram.push(instaInput.value);
	images.push(imgInput.value);
	myDiv.innerHTML = ""
	showarrays()
}

/******************** CARDS *********************/

var names = ["Heiða Sigrún"];
var info = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lectus eget enim volutpat commodo in et ligula."];
var email = ["heidasigrun@gmail.com"];
var facebook = ["https://www.facebook.com/HeidaSigrunPalsdottir"];
var instagram = ["https://www.instagram.com/heidasigrun/"];
var images = ["https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/40194740_10157882720283782_8040574284470419456_n.jpg?_nc_cat=100&_nc_ht=scontent-lht6-1.xx&oh=1b4b84c768cc8528217fba2e490326d2&oe=5C4E03B1"];

var showarrays = function() {
	for (var i = 0; i < names.length; i++) {
		myDiv.innerHTML += `
		<div class="card" style="background-image: url('card_white.png');">
			<h1>${names[i]}</h1>
			<div class="cardprofile">
				<img class="profileimg" src="${images[i]}">
				<div class="info">
					<h3>Sturluð Staðreynd</h3>
					<p>${info[i]}</p>
				</div>
			</div>
			<div class="cardbtncontainer">
				<a class="cardbtn" href="${facebook[i]}" target="_blank"><img class="icon" src="fb_icon.png"></a>
				<a class="cardbtn" href="${instagram[i]}" target="_blank"><img class="icon" src="insta_icon.png"></a>
				<a class="cardbtn" href="mailto:${email[i]}?Subject=HÆ!"><img class="icon" src="mail_icon.png"></a>
			</div>
		</div>
		`
	}
	console.log("cards added: ", names.length);
}

showarrays();
