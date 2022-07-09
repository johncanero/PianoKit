// Stack Overflow
var pianoKeyButtons = document.querySelectorAll(".key");

pianoKeyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var key = this.getAttribute('data-key');

        // audio
        makeSound (key);
        // animation
        buttonAnimation (key);
    });
})


    // Detecting Keyboard Press
    document.addEventListener("keydown", function(event) {
        // alert("Key was pressed!");
        // console.log(event);

        // audio
        makeSound(event.key);

        buttonAnimation(event.key);

    });


    // Detecting Sound Audio
    function makeSound(key) {

           // audio
            //    switch (buttonInnerHTML)
            switch (key) {
                case "a":
                    var piano1 = new Audio('sounds/piano1.mp3');
                    piano1.play();
                break;
                
                case "s":
                    var piano2 = new Audio('sounds/piano2.mp3');
                    piano2.play();
                break;
    
    
                case "d":
                    var piano3 = new Audio('sounds/piano3.mp3');
                    piano3.play();
                break;
    
    
                case "f":
                    var piano4 = new Audio('sounds/piano4.mp3');
                    piano4.play();
                break;
    
    
    
                case "h":
                    var piano5 = new Audio('sounds/piano5.mp3');
                    piano5.play();
                break;
    
    
                case "j":
                    var piano6 = new Audio('sounds/piano6.mp3');
                    piano6.play();
                break;
    
    
                case "k":
                    var piano7 = new Audio('sounds/piano7.mp3');
                    piano7.play();
                break;
    
                case "l":
                    var piano8 = new Audio('sounds/piano8.mp3');
                    piano8.play();
                break;
    
    


            default: console.log(buttonInnerHTML);
        }
    }



    // Button Animation
    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey)
        activeButton.classList.add("pressed");

        // timeout function
        // setTimeout(function, milliseconds, param1, param2, ...)
        setTimeout(function() {
            activeButton.classList.remove('pressed');
        }, 100);
    }


// Let's Go Button
// Functions to play main button audio on click
function playSound() {
    const sound = document.getElementById("startButtonSound");
    sound.play();
    sound.addEventListener("ended", function() {
        location.href="index.html";
    });
}







