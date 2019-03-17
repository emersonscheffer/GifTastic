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
        console.log(response);
        // Looping over every result item
        for (var i = 0; i < results.length; i++) {

            // No surprises 0nly taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var imageHolder = $('<div>');

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var animalImage = $('<img onclick="stillGif()">');

                
                //animalImage.attr("src", results[i].images.fixed_height.url);
                animalImage.attr("src", results[i].images.fixed_height_still.url);

                

                imageHolder.append(p);
                imageHolder.append(animalImage);

                $("#animalImages").prepend(imageHolder);
            }
        }
    });

}

function stillGif(){
    console.log("okay from ");

    // var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    // if (state === "still") {
        // $(this).attr("src", $(this).images.fixed_height.url);
    // } else {
        $(this).attr("src", animalImage.images.fixed_height_still.url);
    // }
}

// $(".caracas").on("click", function () {

//     console.log("okay");
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     } else {
//         $(this).attr("src", $(this).attr("data-still"));
//         $(this).attr("data-state", "still");
//     }
// });


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