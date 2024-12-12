//Card Jquery
$(document).ready(function () {

    //MY VARIABLES AHAHAHHA
    const cardContent = $(".sanae-card-content p");
    const toggleButton = $(".toggle-btn");
    const myImage = $(".sanae-card img");


    toggleButton.click(function () {
        if (cardContent.hasClass("visible")) {

            //Clear blur, Collapse paragraph.
            cardContent.removeClass("visible");
            toggleButton.text("View");
            myImage.removeClass("blur"); 
        } else {

            //Expand paragraph, blur image.
            cardContent.addClass("visible");
            toggleButton.text("Toggle");
            myImage.addClass("blur"); 
        }
    });


});


//starry background
//grab div from html, and set its context. 
const canvas = document.getElementById('starryBackground');
const context = canvas.getContext('2d');

// Resize canvas to always fill the screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//when the window is introduced, determine canvas size and re-draw the image. 
window.onload = function () {
    resizeCanvas();
    aStarryBackground();
}

//when the window is resized, re-detmine canvas size and re-draw the image.
window.onresize = function () {
    resizeCanvas();
    aStarryBackground();
}

//starry background
function aStarryBackground (){
    //clears the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    //selects canvas color
    context.fillStyle = '#14142b';
    //fills in the canvas with the color
    context.fillRect(0, 0, canvas.width, canvas.height);

    //a loop that creats 100 stars! 
    for (let i = 0; i < 100; i++) {
        //position
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        //represents the radius (math.random generates a random number between one and two)
        const size = Math.random() * 2;

        //begins the paint brush to paint
        context.beginPath();

        //size = radius, 0 is radian beginning, and 2 pi is when the cirle ends.
        context.arc(x, y, size, 0, Math.PI * 2);
        context.fillStyle = '#ebe9e4';
        context.fill();
    }
}