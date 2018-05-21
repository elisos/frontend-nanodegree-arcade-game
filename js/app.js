// Enemies our player must avoid
class Enemy {
    constructor (y, speed) {
        this.sprite = 'http://icons.iconarchive.com/icons/bevel-and-emboss/car/96/car-purple-icon.png';
        this.x = 450;
        this.y = y;
        this.speed = speed;
//        this.pos= pos;
        
//        this.direction = direction;
    }
//    , speed = (Math.random()* dt), direction
    
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
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
    constructor (sprite, x = 200, y = 455, pos) {
        this.sprite = 'http://icons.iconarchive.com/icons/martin-berube/flat-animal/96/chicken-icon.png';
        this.x = x;
        this.y = y;
        this.pos = pos;
    }
    
    update () {
        
    }
    
    render () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    handleInput (key) {
        //link key inputs collected by the event listener to player movements, limited to the gameboard.
            if ((key === 'up') && (player.y > 40)) {
                player.y -= 83;
            } else if ((key === 'down') && (player.y < 400)) {
                    player.y += 83;
            } else if ((key === 'left') && (player.x > 0)) {
                    player.x -= 100;
            } else if ((key === 'right') && (player.x < 400)) {
                    player.x +=100;
            }
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const car1 = new Enemy(300, 90);
const car2 = new Enemy(220, 130);
const car3 = new Enemy(135, 200);
const allEnemies = [car1, car2, car3];


// Place the player object in a variable called player
let player = new Player();


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
