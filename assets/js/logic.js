// // javascript

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


//array list of the animals
var listOfAnimals = [];

function addButton(btnName) {
    var newBtn = $('<p id="' + btnName + '">');
    newBtn.append('<span class="wordBtn" onclick="generateGifs(' + btnName + ')">' + btnName + '</span>');
    $("#buttonsPlace").append(newBtn);
}


var animalsArr = ['dog', 'cat', 'horse', 'giraffe', 'lion'];

for(var i in animalsArr) {
    addButton(animalsArr[i]);
}

//generate gifs
function generateGifs(animalGen) {

    var animal = animalGen.id;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response);
        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // No surprises 0nly taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var imageHolder = $('<div>');

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $('<img height="200px">');

                animalImage.attr("class", "gif");

                animalImage.attr("src", results[i].images.fixed_height_still.url);

                animalImage.attr("data-still", results[i].images.fixed_height_still.url);
                animalImage.attr("data-animate", results[i].images.original.url);
                animalImage.attr("data-state", "still");



                imageHolder.append(p);
                imageHolder.append(animalImage);

                $("#animalImages").prepend(imageHolder);
            }
        }
    });

}

$(document).on("click", ".gif", changingState);

function changingState() {
    

    var state = $(this).attr("data-state");
    
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
}

$('#submitBtn').on("click", function (event) {
    event.preventDefault();

    var animalName = $('#animal').val().trim();
    if (!(animalName === "")) {
        if (listOfAnimals.includes(animalName)) {
            ;
        } else {
            listOfAnimals.push(animalName);

            //call function to add
            addButton(animalName);
        }
    }

    var form = document.getElementById("animalForm");
    form.reset();

});