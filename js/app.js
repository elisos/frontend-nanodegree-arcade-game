
// Enemies our player must avoid
class Enemy {
    constructor (sprite, y, speed) {
        this.sprite = sprite;
        this.x = 450;
        this.y = y;
        this.speed = speed;
    }
    
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update (dt) {
        //set the speed of movement and make the enemies loop around continuously
        this.x -= this.speed * dt;
        if (this.x <= -80) {
            this.x = 450;
        }
    }
    
// Draw the enemy on the screen, required method for game
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor (sprite, x = 200, y = 455) {
        this.sprite = 'http://icons.iconarchive.com/icons/martin-berube/flat-animal/96/chicken-icon.png';
        this.x = x;
        this.y = y;
    }
    
    update () {
        if (this.y === 40){
            callModal();
        }
    }
    
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput (key) {
        //link key inputs collected by the event listener to player movements, limited to the gameboard.
            if ((key === 'up') && (this.y > 40)) {
                this.y -= 83;
            } else if ((key === 'down') && (this.y < 400)) {
                    this.y += 83;
            } else if ((key === 'left') && (this.x > 0)) {
                    this.x -= 100;
            } else if ((key === 'right') && (this.x < 400)) {
                    this.x +=100;
            }
    }
    
    reset() {
    this.y = 455;
    this.x = 200;
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const car1 = new Enemy("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/96/42546-fire-engine-icon.png", 280, 320);
const car2 = new Enemy("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/96/42545-ambulance-icon.png",200, 370);
const car3 = new Enemy("http://icons.iconarchive.com/icons/google/noto-emoji-travel-places/96/42547-police-car-icon.png", 115, 420);
const allEnemies = [car1, car2, car3];


// Place the player object in a variable called player
let player = new Player();

//Constants for Modal
const startModal = document.getElementById('start-modal');
const startButton = document.getElementById('start');
const modal = document.getElementById('modal');
const modalChicken = document.getElementById('modal-chicken');
const playAgain = document.getElementById('play-again');

//from https://www.w3schools.com/howto/howto_css_modals.asp
startButton.onclick = function() {
    startModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == startModal) {
        startModal.style.display = "none";
    }
}

function callModal () {
    setTimeout (function () {
    modal.style.display = "block";
    modalChicken.classList.add("animated", "infinite", "bounce");
    }, 850);
}

playAgain.onclick = function() {
    modal.style.display = "none";
    player.reset();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        player.reset();
    }
}



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
