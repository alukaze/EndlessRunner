// Name: Alan Lu
// Date: 14 February 2024
// Name of Game: One Bird with Infinite Stones
// Hours Spent: 
// Creative Tilt: I am particularly proud of being able to implement the flying/going up mechanic in this game. 
// This was something that wasn't covered in class and I managed to get it done on my own through trial and error. 
// When I made this game I was going for a kind of retro style and I hope I managed to convey that visually. 
// The art that I am most proud of is the bird animation as I haven't done something like that before,
// and I am quite happy with how it turned out. 

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 640,
    pixelArt: true,
    scene: [Load, Title, Play, Credits],
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    }

}

let keyFLY, keySTART, keyCREDITS, keyTITLE, keyEXIT
let score = 0
let backgroundMusic = false

let game = new Phaser.Game(config)