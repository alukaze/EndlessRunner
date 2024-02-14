class Load extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }
    preload() {
        // load background 
        this.load.image('stars', './assets/background1.png')
        this.load.image('mountains', './assets/mountains.png')
        this.load.image('water', './assets/water.png')

        //load bird sprite sheet
        this.load.spritesheet('birdy', './assets/birdy.png', {
            frameWidth: 60,
            frameHeight: 50,
        })

        //load rock
        this.load.image('rock', './assets/rock.png')
        

    }

    create() {
        //animations for bird
        this.anims.create({
            key: 'fly',
            framrate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('birdy', {start: 0, end: 5})
        })

        this.anims.create({
            key: 'idle',
            framrate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('birdy', {start: 5, end: 5})
        })

        this.scene.start('playScene')
    }

    update() {
    }
}