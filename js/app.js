
// Block width and height
const BLOCK_W = 101;
const BLOCK_H = 83;

// Level width and height
const LEVEL_W = 5;
const LEVEL_H = 6;

// Sprite offset
const OFFSET_Y = -32;

// Enemies our player must avoid
const Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.reset();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.checkCollisions();
	this.x += this.speed * dt;
	if(this.x > LEVEL_W)
		this.reset();
};

Enemy.prototype.reset = function() {
	this.x = -1;
	this.y = 1 + Math.floor(3 * Math.random());
	this.speed = 1 + Math.floor(3 * Math.random());
};

Enemy.prototype.checkCollisions = function() {
	const xCol = Math.abs(this.x - player.x) < 0.75;
	const yCol = Math.abs(this.y - player.y) < 0.75;
	if(xCol && yCol)
		player.reset();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x * BLOCK_W, this.y * BLOCK_H + OFFSET_Y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function() {
	this.sprite = 'images/char-boy.png';
	this.reset();
};

Player.prototype.update = function(dt) {
	if(this.y == 0)
		setTimeout(() => {this.reset()}, 250);
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x * BLOCK_W, this.y * BLOCK_H + OFFSET_Y);
};

Player.prototype.reset = function() {
	this.x = 2;
	this.y = 5;
};

Player.prototype.handleInput = function(key) {
	switch(key) {
	case 'up':
		if(this.y > 0)
			--this.y;
		break;
	case 'down':
		if(this.y < LEVEL_H - 1)
			++this.y;
		break;
	case 'left':
		if(this.x > 0)
			--this.x;
		break;
	case 'right':
		if(this.x < LEVEL_W - 1)
			++this.x;
		break;
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
for(let i = 0; i < 3; ++i)
	allEnemies.push(new Enemy());
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
