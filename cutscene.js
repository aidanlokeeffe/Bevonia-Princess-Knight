var text1



demo.cutscene = function () {};
demo.cutscene.prototype = {
    preload: function () {
        // Load background
        game.load.image("bgCut", "assets/tilesets_backgrounds/cutscene background 2.5.png", 1198, 601);
        game.load.image('bubble','assets/sprites/speech bubble.png',100,69)
        
        
    },
    create: function () {
        game.add.sprite(0, 0, "bgCut");
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