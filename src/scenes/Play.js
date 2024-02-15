class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {

        //game start/end
        this.gameOver = false
        this.gameStart = false

        //creating background
        this.stars = this.add.tileSprite(0, 0, 960, 640, 'stars').setOrigin(0, 0)
        this.mountains = this.add.tileSprite(0, 85, 960, 640, 'mountains').setOrigin(0, 0)
        this.water = this.add.tileSprite(0, game.config.height, 960, 70, 'water').setOrigin(0, 0.5)

        //add bird to scene
        this.birdy = new Birdy(this, 480, 320, 'birdy', 0, 'down')
        this.birdyHit = false;
        this.birdy.play('idle', true)
        this.birdy.setGravityY(0)

        //keyboard input
        this.keys = this.input.keyboard.createCursorKeys()
        keyFLY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        //handling velocity for bird
        this.birdy.velocityY = 0
        this.birdy.accelerationY = 20
        this.birdy.maxVelocityY = -500

        this.physics.add.collider(this.birdy, this.water)

        //rock group
        this.rockGroup = this.add.group({
            runChildUpdate: true
        })
        
    }

    //spawning in rocks
    spawnRocks() {
        var minY = Phaser.Math.MinSub(this.birdy.y, 126, 0);
        var maxY = Phaser.Math.MaxAdd(this.birdy.y, 126, game.config.height - 21);
        var spawnY = Phaser.Math.Between(minY, maxY);
        let rock = new Rock(this, game.config.width, spawnY, 'rock');
        this.rockGroup.add(rock);
    }

    update() {

        if (this.gameStart == false && Phaser.Input.Keyboard.JustDown(keyFLY)){
            this.birdy.x = 55
            this.birdy.setGravityY(1000)
            this.gameStart = true
            this.birdy.play('fly', true)
        }


        this.stars.tilePositionX += 3
        this.mountains.tilePositionX -= 1
        this.water.tilePositionX -= 1  
        this.water.tilePositionY -= 1

        if (Phaser.Input.Keyboard.JustDown(keyFLY)) {
            //Reset velocity before jumping
            this.birdy.velocityY = 0
        }

        if (keyFLY.isDown && this.birdy.body.velocity.y > this.birdy.maxVelocityY){
            //Increase velocity gradually
            this.birdy.velocityY -= this.birdy.accelerationY
            //Set the velocity of the bird
            this.birdy.setVelocityY(this.birdy.velocityY)
        }
        // game end condition
        if (this.birdy.y > 571) {
            this.birdy.setGravity(0)
            this.birdy.setVelocityY(0)
            this.gameOver = true
            this.birdy.play('idle', true)
        }

        //spawn rocks
        //this.spawnRocks()
        
    }

}