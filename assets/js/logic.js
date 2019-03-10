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

        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // No surprises 0nly taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var imageHolder = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);

                imageHolder.append(p);
                imageHolder.append(animalImage);

                $("#animalImages").prepend(imageHolder);
            }
        }
    });

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