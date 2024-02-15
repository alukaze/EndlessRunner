class Rock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame,)
        this.parentScene = scene
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this).setCircle(15)
        this.setOffset(8, 12)
        this.scene.physics.add.existing(this)
        this.setImmovable()
        this.speed = 5
        this.passed = true;
        

    }
    update() {
        //manage speed
        this.x -= this.speed
        //clear after reaches end of screen
        if (this.x < -game.config.width) {
            this.destroy()

        }
        //increase score
        if (this.parentScene.gameOver == false && this.x < this.parentScene.birdy.x && this.passed) {
            score += 1;
            this.parentScene.sound.play('scoreSound', {volume: 0.4})
            this.passed = false
        
    }
    }
}
