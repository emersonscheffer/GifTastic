// // javascript

// function closing(){
//     $(this).remove('.closingBtn');
//     console.log("close from consoolsoslos");
// }


function addButton(btnName) {
    var newBtn = $('<p>');
    newBtn.append('<span class="wordBtn">' + btnName + '</span>');
    newBtn.append('<span onclick="closing()" class="closeBtn closingBtn">X</span>');
    $("#buttonsPlace").append(newBtn);
}



$('#submitBtn').on("click", function (event) {
    event.preventDefault();

    var animalName = $('#animal').val().trim();
    if (!(animalName === "")) {
        addButton(animalName);
    }


    console.log(animalName);

    var form = document.getElementById("animalForm");
    form.reset();

});
