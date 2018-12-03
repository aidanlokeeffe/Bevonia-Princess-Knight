var craditBlock, timer;
demo.credits = function () {};
demo.credits.prototype = {
    preload: function () {
        game.load.image("credits", "assets/sprites/credits.png", 586, 757);
    },
    create: function () {
        // Set background color
        game.stage.backgroundColor = "000";
        
        creditBlock = game.add.sprite(240, 499, "credits");
        game.physics.enable(creditBlock)
        creditBlock.body.velocity.y = -30;      
        
        dummy = game.time.now;
        timer = dummy;
        
        backgroundMusic = game.add.audio('tutorial');
        backgroundMusic.loop = true;
        backgroundMusic.play();
        
    },
    update: function () {
        if (game.time.now - timer >= 32000) {
            creditBlock.body.velocity.y = 0;
        }
        if (game.time.now - timer >= 45000 || game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            game.sound.stopAll();
            game.state.start("title");
        }
    }
}