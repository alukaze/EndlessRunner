class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene');
    }
    preload() {
        //load images
        this.load.image('credits', './assets/Credits.png')
    }

    create() {
        //set title screen
        this.add.image(game.config.width/2, game.config.height/2, 'credits')

        //music
        this.music = this.sound.add('backgroundMusic', { volume: 0.7, loop: true });
        if (backgroundMusic == false) {
            this.music.play();
            backgroundMusic = true;
        }


        //define keys
        keySTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        let creds = {
            fontFamily: 'Open Sans',
            fontSize: '50px',
            align: 'center',
            color: '#000000' 
        }

        let title = {
            fontFamily: 'Open Sans',
            fontSize: '25px',
            align: 'center',
            color: '#000000' 
        }
        let cred = this.add.text(game.config.width/2, game.config.height/2 - 50, 'Programmer: Alan Lu\n Artist: Alan Lu\n Designer: Alan Lu\n Sound Effects: https://mixkit.co', creds).setOrigin(0.5)
        let title1 = this.add.text(game.config.width/2, game.config.height/2 + 100, 'Press SPACE to Return to Title', title).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySTART)) {
            this.sound.play('buttonSound', {volume: 0.8})
            this.music.stop()
            backgroundMusic = false
            this.scene.start('titleScene')
        }
    }

}
