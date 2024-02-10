// Code Practice: Making a Scene
// Name:
// Date: 

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    scene: [Menu, Play]

}

let game = new Phaser.Game(config)