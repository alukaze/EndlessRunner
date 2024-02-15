class Rock extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame,)
        this.parentScene = scene
        this.parentScene.add.existing(this)
        this.parentScene.physics.add.existing(this)
        this.scene.physics.add.existing(this)
        this.setImmovable()
        this.speed = 5
        

    }
    update() {

        this.x -= this.speed

        if (this.x < -game.config.width) {
            this.destroy()

        }

        if (this.parentScene.birdyHit == false && this.newRock && this.x < 200) {
            // (recursively) call parent scene method from this context
            this.parentScene.spawnRocks();
            
        }


        
        
    }
}
