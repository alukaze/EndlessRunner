// Code Practice: Making a Scene
// Name:
// Date: 

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    pixleArt: true,
    scene: [Load, Play],
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }

}

let game = new Phaser.Game(config)