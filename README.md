# FEND-Arcade-Game-Project
## Overview: Game Functionality
 
![Screenshot](https://github.com/Durdona/FEND-Arcade-Game-Project/blob/master/screenshot.png)
 

Your implementation must at minimum follow the basic functionality, but you can add additional optional functionality to your game, if you wish.

### Basic Functionality
In this game you have a Player and Enemies (bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. 

* The player can move left, right, up and down
* The enemies move at varying speeds on the paved block portion of the game board
* Once a the player collides with an enemy, the game is reset and the player moves back to the starting square
* Once the player reaches the water (i.e., the top of the game board), the game is won

### Additional Functionality (Optional)
In addition to the basic functionality, you can add more cool functionality to your game. For example, here are some additional features that you can add:

* Player selection: allow the user to select the image for the player character before starting the game. You can use the different character images provided in the images folder (we’ll get to that below)
* Score: you can implement a score for the game. For example, the score can increase each time the player reaches the water, and it can be reset to 0 when collision occurs (or it can be reduced)
* Collectibles: you can add gems to the game, allowing the player to collect them to make the game more interesting
* Anything else you like!

### First, Get the Starter Code
You won’t have to build the game from scratch. We have provided the art assets and game engine for you. You can download or clone them from our repository.

The repository contains `css, images,` and  `js`  folders, as well as an `index.html`  and a `README.md`  file. 
 
* The ` css ` folder contains a `style.css` file which you do not need to edit 
* The `images` folder contains the png image files, which are used when displaying the game. The images for the player and enemy character are going to be loaded from this folder. 
* The `js` folder also contains the app engine needed to run the game and a resources.js file. You do not need to edit these files. 
* Opening `index.html` should load the game 
* The `README.md` file should contain instructions on how to load and play the game (you will need to add those instructions).
 
 Once you have downloaded the files, you will have to edit app.js to build the game. 

### Object-Oriented JavaScript
Great! You have the starter code. But before moving on, make sure you are comfortable with the content from Object-Oriented JavaScript. Ask yourself:

*  What is an object? 
   * How is an object different from a primitive in JavaScript (e.g., can a primitive have methods?) 
   * What are some ways to create or instantiate a new object? 
   * How do you modify properties, or add/remove properties from an object? 
*  What is a constructor function (or class)?
*  What is `this` ? What does it refer to and how is it used in different contexts (i.e., in a constructor function, a method, etc.)?  
*  How do you add a property or method to a constructor's prototype? 
*  What is **prototypal inheritance** and how is it implemented? 
 

