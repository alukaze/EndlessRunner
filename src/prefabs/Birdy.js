class Birdy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.setGravityY(1000)
    this.body.setSize(this.width, this.height*0.8)
    this.setCollideWorldBounds(true)
    this.setImmovable()
    this.fly = false
    }

    update() {

    }
}


