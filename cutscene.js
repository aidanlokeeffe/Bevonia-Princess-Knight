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
//        bubble1.scale.setTo(2,2)
        
        
        
    },
    update: function () {
        
        
        
        
        
        
    }   
}