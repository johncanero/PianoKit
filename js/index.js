// Let's Go Button
// Functions to play main button audio on click
function playSound() {
    const sound = document.getElementById("startButtonSound");
    sound.play();
    sound.addEventListener("ended", function() {
        location.href="piano.html";
    });
}