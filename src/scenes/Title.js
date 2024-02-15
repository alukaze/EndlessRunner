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

        //define keys
        keySTART = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        let title = {
            fontFamily: 'Open Sans',
            fontSize: '25px',
            align: 'center',
            color: '#000000' 
        }

        let title1 = this.add.text(game.config.width/2, game.config.height/2 + 100, 'Press SPACE to Start', title).setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySTART)) {
            this.scene.start('playScene')
        }
    }

}