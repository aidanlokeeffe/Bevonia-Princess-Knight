var text1



demo.cutscene = function () {};
demo.cutscene.prototype = {
    preload: function () {
//<<<<<<< HEAD
//<<<<<<< HEAD
        // Load backgrounds
        game.load.image("bgCutBroken", "assets/tilesets_backgrounds/cutscene background 3.png", 1066, 500);
        game.load.image("bgCut", "assets/tilesets_backgrounds/cutscene background 2.png", 1066, 500);
//=======
        // Load background
        game.load.image('bubble','assets/sprites/speech bubble.png',100,69)

//>>>>>>> 6e78749b96316b09c07b8bd9ace8c844772f63c2

        // Load up character sprites
        game.load.spritesheet("bevoniaParty", "assets/sprites/bevoniaParty.png", 32, 48);
        game.load.spritesheet("kingStubbyLegs", "assets/sprites/king.png", 64, 85);
        game.load.spritesheet("fool", "assets/sprites/Lachlan.png", 48, 96);
        game.load.spritesheet("bureaucrat", "assets/sprites/bigBrotherPrinceDilmore.png", 32, 56);
        game.load.spritesheet("wizards", "assets/sprites/twoWizards.png", 96, 64);
        game.load.spritesheet("aggiememnon", "assets/sprites/Aggiememnon.png", 45, 45);

    },
    create: function () {
        game.add.sprite(0, 0, "bgCut");

        // Add characters
        bevonia = game.add.sprite(465, 350, "bevoniaParty")
        king = game.add.sprite(580, 315, "kingStubbyLegs");
        fool = game.add.sprite(297, 393, "fool");
        bureaucrat = game.add.sprite(248, 430, "bureaucrat");
        wizards = game.add.sprite(820, 410, "wizards");
        //aggiememnon = game.add.sprite(v,b, "aggiememnon");

        // Define, initiate character animations
        bevonia.animations.add("init", [0]);
        bevonia.animations.add("after", [1]);
        bevonia.animations.play("init", 8, true);
        king.animations.add("init", [0]);
        king.animations.add("after", [1]);
        king.animations.play("init", 8, true);
        fool.animations.add("juggle", [0, 1, 2, 3, 4, 5, 6, 7]);
        fool.animations.play("juggle", 8, true);
        bureaucrat.animations.add("init", [0]);
        bureaucrat.animations.add("after", [1]);
        bureaucrat.animations.play("init", 8, true);
        wizards.animations.add("init", [0, 1]);
        wizards.animations.add("after", [2]);
        wizards.animations.play("init", 8, true);

        
        
        // Text bubble stuff
        bubble1 = game.add.sprite(300,200,'bubble')

        text1 = new Typewriter()
        text1.init(game, {
            x: 310,
            y: 210,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 190,
            text: 'this is a test to see how the typing works. this is filler to see where the margins are cut off, and where the text ends. if you want to read me you can, but you probably won\'t get anything out of it. have a nice day'

        })
//        text1.start()
    },
    update: function () {
        if(game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) text1.start()




    }
}
