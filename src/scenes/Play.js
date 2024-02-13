class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        this.stars = this.add.tileSprite(0, 0, 960, 640, 'stars').setOrigin(0, 0)
        this.mountains = this.add.tileSprite(0, 85, 960, 640, 'mountains').setOrigin(0, 0)
        this.water = this.add.tileSprite(0, game.config.height, 960, 70, 'water').setOrigin(0, 0.5)
    }

    update() {
        this.stars.tilePositionX -= 3
        this.mountains.tilePositionX -= 1
        this.water.tilePositionX -= 1  
        this.water.tilePositionY -= 1 

    }
}