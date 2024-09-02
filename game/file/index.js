var block = document.getElementById("block");
var hold = document.getElementById("hold");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;

// Randomize the position of the hole in the block
hold.addEventListener('animationiteration', () => {
    var random = -((Math.random() * 300) + 150);
    hold.style.top = random + "px"; 
    counter++; // Increment the counter each time the block loops
});

setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px"; // Gravity effect
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holdTop = parseInt(window.getComputedStyle(hold).getPropertyValue("top"));

    var cTop = -(601 - characterTop);

    // Game over conditions: character falls off the screen or hits the block
    if (characterTop > 600|| ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holdTop) || (cTop > holdTop + 148)))) {   
        alert("Game over. Your score: " + counter);
        character.style.top = "200px"; // Reset character position
        counter = 0; // Reset the score
    }
}, 10);

// Function to make the character jump
function jump() {
    if (jumping == 0) { 
        jumping = 1;
        let jumpCount = 0;
        var jumpInterval = setInterval(function() {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if (characterTop > 7 && jumpCount < 15) {
                character.style.top = (characterTop - 5) + "px"; // Move the character up
            }
            if (jumpCount > 20) {
                clearInterval(jumpInterval);
                jumping = 0;
                jumpCount = 0;
            }
            jumpCount++;
        }, 10);
    }
}

// Event listener for the spacebar key press
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});
