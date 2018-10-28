var mainDiv = document.getElementById('maindiv');

var artists = [
    {
        img: 'images/frida_thebrokencolumn_1944.jpg',
        title: 'The Broken Column',
        year: 1944,
        artistName: 'Frida Kahlo',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/basquiat_hollywoodafricans_1983.jpg',
        title: 'Hollywood Africans',
        year: 1983,
        artistName: 'Jean-Michel Basquiat',
        price: 9.995,
        inStock: false,
        expected: '15.11.18',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/AndyWarholCampbellsSoupCan.jpg',
        title: 'Campbell Soup Can: Tomato',
        year: 1968,
        artistName: 'Andy Warhol',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/banksyfollowdreams.jpg',
        title: 'Follow your dreams',
        year: 2010,
        artistName: 'Banksy',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/warhol_mao5_1970.jpg',
        title: 'Mao 5',
        year: 1970,
        artistName: 'Andy Warhol',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/FridaSelfPortraitwithThornNecklaceandHummingbird_1940.jpg',
        title: 'Self-Portrait with Thorn Necklace and Hummingbird',
        year: 1940,
        artistName: 'Frida Kahlo',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/fridaroots_1943.jpg',
        title: 'Roots',
        year: 1943,
        artistName: 'Frida Kahlo',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/Basquiat_dustheads_1982.jpg',
        title: 'Dustheads',
        year: 1982,
        artistName: 'Jean-Michel Basquiat',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/banksylove.jpg',
        title: 'Love is in the air',
        year: 2003,
        artistName: 'Banksy',
        price: 9.995,
        inStock: false,
        expected: '15.11.18',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/warhol_marilynmonroe7_1964.jpg',
        title: 'Marilyn Monroe 7',
        year: 1964,
        artistName: 'Andy Warhol',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/Banksymobilelovers.jpg',
        title: 'Mobile lovers',
        year: 2014,
        artistName: 'Banksy',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
    {
        img: 'images/basquiat_untitledboxer_1982.jpeg',
        title: 'Untitled (Boxer)',
        year: 1982,
        artistName: 'Jean-Michel Basquiat',
        price: 9.995,
        inStock: true,
        expected: '',
        sizes: ['S', 'M', 'L']
    },
];

var store =
{
    currency: 'kr.'
}

for (var i = 0; i < artists.length; i++) {

    var inStock;
    var expected;
    var price;
    var sizes = '';

    if (artists[i].inStock) {

        for (var s = 0; s < artists[i].sizes.length; s++) {

            sizes += artists[i].sizes[s] + ' ';

        }

        inStock = '';
        expected = '';
        price = artists[i].price + ' ' + store.currency

    } else {
        inStock = '(Væntanleg)';
        expected = 'Fáanleg frá ' + artists[i].expected;
        price = '<br>'
    }

    var artistsItem =
        `
        <div class="productdiv">
            <ul class="imgUL">
                <li><img src="${artists[i].img}"/></li>
                <li><h1 class="title">${artists[i].title} ${inStock}</h1></li>
                <li><h3>${artists[i].artistName}</h3></li>
                <li><h3>${artists[i].year}</h3></li>
                <li><h2>${price}</h2></li>
                <li><h3>${sizes}</h3></li>
                <li><h3>${expected}</h3></li>
            </ul>    
        </div>
        `
    mainDiv.innerHTML += artistsItem;
}
    
/*************  LEITIN VIRKAR EKKI :/ *************/

function myFunction() {
    var input, filter, ul, li, h1, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementsByClassName("imgUL");
        li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
            h1 = li[i].getElementsByTagName("h1")[0];

        if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }
}

input = myFunction()