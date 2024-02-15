class Title extends Phaser.Scene {
    constructor() {
        super("titleScene")
    }

    preload() {
        //load images
        this.load.image('title', './assets/title.png')
    }

    create() {
        //set title screen
        this.add.image(game.config.width/2, game.config.height/2, 'title')

        //music
        this.music = this.sound.add('backgroundMusic', { volume: 0.7, loop: true });
        if (backgroundMusic == false) {
            this.music.play();
            backgroundMusic = true;
        }

        //define keys
        keySTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        keyCREDITS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F)

        let title = {
            fontFamily: 'Open Sans',
            fontSize: '25px',
            align: 'center',
            color: '#000000' 
        }

        let title1 = this.add.text(game.config.width/2, game.config.height/2 + 100, 'Press SPACE to Start', title).setOrigin(0.5)
        let title2 = this.add.text(game.config.width/2, game.config.height/2 + 140, 'Press F for Credits', title).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySTART)) {
            this.sound.play('buttonSound', {volume: 0.8})
            this.music.stop()
            backgroundMusic = false
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyCREDITS)) {
            this.sound.play('buttonSound', {volume: 0.8})
            this.music.stop()
            backgroundMusic = false
            this.scene.start('creditsScene')
        }
    }

}