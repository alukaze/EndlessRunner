class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    create() {

        //music
        this.music = this.sound.add('backgroundMusic', { volume: 0.7, loop: true });
        if (backgroundMusic == false) {
            this.music.play();
            backgroundMusic = true;
        }


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
        keyFLY = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyTITLE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)
        keyEXIT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)

        //handling velocity for bird
        this.birdy.velocityY = 0
        this.birdy.accelerationY = 20
        this.birdy.maxVelocityY = -500

        this.physics.add.collider(this.birdy, this.water)

        //rock group
        this.rockGroup = this.add.group({
            runChildUpdate: true
        })
        //score display
        score = 0
        let scoreConfig = {
            fontFamily: 'Comic Sans',
            fontSize: '32px',
            color: '#FFFFFF',
            align: 'left',
            padding: 5,
        }
        this.scoreboard = this.add.text(70, 64/2 , score, scoreConfig).setOrigin(1,0).setDepth(100)

        //instructions
        let textConfig = {
            fontFamily: 'Comic Sans',
            fontSize: '50px',
            color: '#FFFFFF',
            align: 'center',
            padding: 5,
            fixedWidth: 0
        }
        this.instructions = this.add.text(game.config.width/2, game.config.height - 500, 'Dodge Rocks and Avoid Water!\n Press SPACE to Begin!', textConfig).setOrigin(0.5)
        this.afterGO = this.add.text(game.config.width/2, game.config.height - 500, 'Press F to Restart\n Press X to Return to Title', textConfig).setOrigin(0.5)
        this.afterGO.visible = false
    }   

    //spawning in rocks
    spawnRocks() {
        if (!this.gameOver){
        var minY = Phaser.Math.MinSub(this.birdy.y, 126, 0);
        var maxY = Phaser.Math.MaxAdd(this.birdy.y, 126, game.config.height - 21);
        var spawnY = Phaser.Math.Between(minY, maxY);
        let rock = new Rock(this, game.config.width, spawnY, 'rock');
        this.rockGroup.add(rock);
        }
    }

    update() {

        if (this.gameStart == false && Phaser.Input.Keyboard.JustDown(keyFLY)){
            this.instructions.visible = false
            this.birdy.x = 55
            this.birdy.setGravityY(1000)
            this.gameStart = true
            this.birdy.play('fly', true)
            this.rockSpawnTimer = this.time.addEvent({
                delay: 1000, 
                callback: this.spawnRocks,
                callbackScope: this,
                loop: true
            });
        }
        //score management
        this.scoreboard.text = score;

        //higher difficulty
        if (score > 10) {
            this.rockSpawnTimer.delay = 800;
        }

        if (score > 20) {
            this.rockSpawnTimer.delay = 600;
        }

        if (score > 30) {
            this.rockSpawnTimer.delay = 400;
        }

        //background
        this.stars.tilePositionX += 3
        this.mountains.tilePositionX -= 1
        this.water.tilePositionX -= 1  
        this.water.tilePositionY -= 1

        //handle flight
        if (!this.gameOver) {
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
        }

        //touch rock end condition
        if (!this.gameOver) {
            this.physics.world.overlap(this.birdy, this.rockGroup, this.hitRock, null, this);
        }

        //birdy touch water end condition
        if (this.birdy.y > 571) {
            this.birdy.setGravity(0)
            this.birdy.setVelocityY(0)
            this.gameOver = true
            this.birdy.play('idle', true)
        }

        if (this.gameOver) {
            this.afterGO.visible = true
            if (Phaser.Input.Keyboard.JustDown(keyTITLE)) {
                this.sound.play('buttonSound', {volume: 0.8})
                this.music.stop()
                backgroundMusic = false
                this.scene.restart()
            }
            if (Phaser.Input.Keyboard.JustDown(keyEXIT)) {
                this.sound.play('buttonSound', {volume: 0.8})
                this.music.stop()
                backgroundMusic = false
                this.scene.start('titleScene')
                
            }
        }
    }

    hitRock(birdy, rock) {
        this.gameOver = true;
        this.sound.play('collideSound', { volume: 0.8 });
    }
}