// // javascript

// localStorage.setItem('name', 'Emerson');
// $('.name').html(localStorage.getItem('name'));


//array list of the animals
var listOfAnimals = [];
//list of favorites
var favoritesArr = [];
// var storedAnimals;

// function favoritesFn() {
//     favorites.push('horse');

//     localStorage.setItem('favoriteAnimals', JSON.stringify(favorites));

//     storedAnimals = JSON.parse(localStorage.getItem('favoriteAnimals'));

//     populateFavorites();
// }


// function populateFavorites(){
//     for (var i in storedAnimals) {
//        // addButtonFavorite(storedAnimals[i]);
//     }
// }
// populateFavorites();

// var names = ['john', 'lucy', 'mark'];

// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));

// console.log(storedNames[0]);



//background changing
function setColor(color) {

    localStorage.setItem('bg', color);

    $('body').css('backgroundColor', color);

}

$('body').css('backgroundColor', localStorage.getItem('bg'));

function redBtn() {
    setColor('red');
}

function blueBtn() {
    setColor('blue');
}

function yellowBtn() {
    setColor('yellow');
}

function pinkBtn() {
    setColor('pink');
}

function greenBtn() {
    setColor('green');
}


function favoritesFn(favName) {
    if (favoritesArr.includes(favName.id)) {
        ;
    } else {
        favoritesArr.push(favName.id);
    }
}


function addButton(btnName) {
    var newBtn = $('<p id="' + btnName + '">');
    newBtn.append('<span class="wordBtn" onclick="generateGifs()">' + btnName + '</span>');
    newBtn.append('<span alt="Add to Favorites" onclick="favoritesFn(' + btnName + ')" class="closeBtn closingBtn">√</span>');
    $("#buttonsPlace").append(newBtn);
}

//generate gifs
function generateGifs() {
    console.log("Cloe");
}


$('#submitBtn').on("click", function (event) {
    event.preventDefault();

    var animalName = $('#animal').val().trim();
    if (!(animalName === "")) {
        if(listOfAnimals.includes(animalName)){
            ;
        } else {
            listOfAnimals.push(animalName);
            console.log(listOfAnimals);
            //call function to add
            addButton(animalName);
        }
    }

    var form = document.getElementById("animalForm");
    form.reset();

});