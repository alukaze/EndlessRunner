class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }
    preload() {
        // load background and images
        this.load.image('stars', './assets/background1.png')
    }

    create() {

    }

    update() {
        this.scene.start('playScene')
    }
}