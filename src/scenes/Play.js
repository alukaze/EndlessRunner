class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        //creating background
        this.stars = this.add.tileSprite(0, 0, 960, 640, 'stars').setOrigin(0, 0)
        this.mountains = this.add.tileSprite(0, 85, 960, 640, 'mountains').setOrigin(0, 0)
        this.water = this.add.tileSprite(0, game.config.height, 960, 70, 'water').setOrigin(0, 0.5)

        //add bird to scene
        this.birdy = new Birdy(this, 480, 320, 'birdy', 0, 'down')
        this.birdy.play('idle', true)

        //keyboard input
        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }

    update() {
        this.stars.tilePositionX -= 3
        this.mountains.tilePositionX -= 1
        this.water.tilePositionX -= 1  
        this.water.tilePositionY -= 1


    }
}