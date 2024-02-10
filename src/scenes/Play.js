class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {
        this.stars = this.add.tileSprite(0, 0, 960, 640, 'stars').setOrigin(0, 0)
    }

    update() {
        this.stars.tilePositionX -= 2
    }
}