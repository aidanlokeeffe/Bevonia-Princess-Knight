var text0,text1,text2,text3,text4,text5,  promptText
var bubble1, bubble2
var counter, spaceCounter


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
        bubble2 = game.add.sprite(775,170,'bubble')
        bubble2.scale.x = -1
        bubble2.visible = false

            text0 = new Typewriter()
        text1 = new Typewriter()
            text2 = new Typewriter()
        text3 = new Typewriter()
            text4 = new Typewriter()
        text5 = new Typewriter()
        text0.init(game, {
            x: 310,
            y: 210,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 180,
            text: 'The Nobles grow restless, Father. There seem to be signs of strife and conflict growing in the Kingdom.'

        })
        
        
        text2.init(game, {
            x: 310,
            y: 210,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 180,
            text: 'What do you propose we shall do? We must act soon or else the kingdom may be thrown into turmoil. We must unite the Kingdom!'

        })
        
        text4.init(game, {
            x: 310,
            y: 210,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 180,
            text: 'That sounds like a wonderful plan, Father! I shall depart as soon as I can!'

        })
        
        
        text1.init(game, {
            x: 590,
            y: 180,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 175,
            text: 'You are correct, Bevonia. I too, have noticed these most troublesome changes. Each day in court, the Nobles become more belligerent. I fear they may even be inciting strife among the ordinary citizens.'

        })
        
        text3.init(game, {
            x: 590,
            y: 180,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 175,
            text: 'We must make sure that all areas and parts of the Kingdom become united under one banner. I propose that you travel with an envoy to the other parts of the Kingdom to appeal to the lords who reside there.'

        })
        
        text5.init(game, {
            x: 590,
            y: 180,
            fontFamily: 'augusta',
            fontSize: 12,
            maxWidth: 175,
            text: 'Excellent! I am glad you agree with me, Bevonia. Hopefully, with this new strategy, we can-'

        })
        
        promptText = game.add.text(100,100,'Press \'SPACE\' to continue',{fontsize: '25px', fill: '#ffffff'})
        promptText.font = 'augusta'
        textArray = [text0,text1,text2,text3,text4,text5]
        text0.start()
        counter = 1
        spaceCounter = 0
    },
    update: function () {
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && counter < textArray.length && spaceCounter < game.time.now){
//            promptText.visible = false
            if(counter%2 == 0){
                bubble1.visible = true
                bubble2.visible = false
            }
            else if(counter%2 == 1){
                bubble1.visible = false
                bubble2.visible = true
            }
            
            textArray[counter-1].destroy()
            textArray[counter].start()
            counter++
            spaceCounter = game.time.now + 100
        }
        




    }
}
