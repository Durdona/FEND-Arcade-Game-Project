# FEND-Arcade-Game-Project
## Overview: Game Functionality

<p>Your implementation must at minimum follow the basic functionality, but you can add additional optional functionality to your game, if you wish.</p>

### Basic Functionality
<p>In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.</p>

* The player can move left, right, up and down
* The enemies move at varying speeds on the paved block portion of the game board
* Once a the player collides with an enemy, the game is reset and the player moves back to the starting square
* Once the player reaches the water (i.e., the top of the game board), the game is won

### Additional Functionality (Optional)
<p>In addition to the basic functionality, you can add more cool functionality to your game. For example, here are some additional features that you can add:</p>

* Player selection: allow the user to select the image for the player character before starting the game. You can use the different character images provided in the images folder (we’ll get to that below)
* Score: you can implement a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced)
* Collectibles: you can add gems to the game, allowing the player to collect them to make the game more interesting
* Anything else you like!

### First, Get the Starter Code
<p>You won’t have to build the game from scratch. We have provided the art assets and game engine for you. You can download or clone them from our repository.</p>

<p>The repository contains <code>css, images,</code> and <code>js</code> folders, as well as an <code>index.html</code> and a <code>README.md</code> file.</p>
<ul>
	<li>The<code>css</code> folder contains a <code>style.css</code> file which you do not need to edit</li>
	<li>The <code>images</code> folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder.</li>
	<li> The <code>js</code> folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files.</li>
	<li> Opening <code>index.html</code> should load the game</li>
	<li> The <code>README.md</code> file should contain instructions on how to load and play the game (you will need to add those instructions).</li>container
</ul>
<p>Once you have downloaded the files, you will have to edit app.js to build the game.</p>

### Object-Oriented JavaScript
<p>Great! You have the starter code. But before moving on, make sure you are comfortable with the content from Object-Oriented JavaScript. Ask yourself:</p>
<ul>
	<li>What is an object?</li>
	<li>How is an object different from a primitive in JavaScript (e.g., can a primitive have methods?)</li>
	<li>What are some ways to create or instantiate a new object?</li>
	<li>How do you modify properties, or add/remove properties from an object?</li>
	<li> What is a constructor function (or class)?</li>
	<li> What is <code>this</code>? What does it refer to and how is it used in different contexts (i.e., in a constructor function, a method, etc.)?</li>
	<li> How do you add a property or method to a constructor's prototype?</li>
	<li> What is <b>prototypal inheritance</b> and how is it implemented?</li>
</ul>

