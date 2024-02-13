class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }
    preload() {
        // load background and images
        this.load.image('stars', './assets/background1.png')
        this.load.image('mountains', './assets/mountains.png')
        this.load.image('water', './assets/water.png')
    }

    create() {

    }

    update() {
        this.scene.start('playScene')
    }
}