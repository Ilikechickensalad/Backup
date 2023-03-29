//create a scene
let gameScene = new Phaser.Scene("Game")

// initiate scene parameters
gameScene.init = function(){
    //player speed
    this.playerSpeed = 4

    // enemy speed
    
    this.enemySpeed = Math.floor(Math.random() * 5) + 3;
    this.enemySpeed2 = Math.floor(Math.random() * 5) + 3;
    this.enemySpeed3 = Math.floor(Math.random() * 5) + 3;
    // boundaries
    this.enemyMinY= 80
    this.enemyMaxY=280
    this.enemyMaxX=590
    this.enemyMinX=30

    //we are not terminating
    this.isTerminating=false
}

//load our assets
gameScene.preload=function(){
    //create our sprites
    this.load.image("background","assets/background.png")
    this.load.image("player","assets/player.png")
    this.load.image("dragon","assets/dragon.png")
    this.load.image("treasure","assets/treasure.png")


}
gameScene.create=function(){
    //create background sprite
    this.bg=this.add.sprite(0,0,"background")
    this.bg.setPosition(640/2,360/2)


    this.hero = this.add.sprite(0,0,"player")
    this.hero.setPosition(640/20,360/2)
    this.hero.setScale(.50)

    // set the locatin of an object
    this.enemy = this.add.sprite(0,0,"dragon")
    this.enemy.setPosition(640/2,360/3)
    //flipping a character
    this.enemy.flipX = true
    //setting the scale
    this.enemy.setScale(.45)
   
    this.enemytwo=this.add.sprite(0,0,"dragon")
    this.enemytwo.setPosition(640/3,360/3)
    this.enemytwo.flipX = true
    this.enemytwo.setScale(.45)

    this.enemythree=this.add.sprite(0,0,"dragon")
    this.enemythree.setPosition(640/1.5,360/3)
    this.enemythree.flipX = true
    this.enemythree.setScale(.45)
   
    this.treasure = this.add.sprite(0,0,"treasure")
    this.treasure.setPosition(640/1.13,360/2)
    this.treasure.setScale(.75)

    keys=this.input.keyboard.addKeys("A,S,D,W")
    
}

//this will call about 60 times per second (moves characters)
gameScene.update=function()
{
    //movement
    if(this.input.activePointer.isDown){
        // player walks
        this.hero.x += this.playerSpeed
        
    }
    
    //  if(this.enemy.y<400){
    //      this.enemy.y-=1
        //treasure overlap check
        let playerRect=this.hero.getBounds()
        let treasureRect=this.treasure.getBounds()
        let enemytwoRect=this.enemytwo.getBounds()
        let enemyRect=this.enemy.getBounds()
        let enemythreeRect=this.enemythree.getBounds()
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, treasureRect)){

            // restart the scene
            return this.gameOver()
            
        }
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyRect)){

            // end game
            return this.gameOver()
        }
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemytwoRect)){

            // restart the scene
            return this.gameOver()
            
        }
        if(Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemythreeRect)){

            // restart the scene
            this.gameOver()
            return
        }

        gameScene.gameOver = function() {

            // don't execute if we are terminating
            if(this.isTerminating) return

            //initated game over sequence
            this.isTerminating=true
            //shake camera
            this.cameras.main.shake(200)

            //listen for event completion
            this.cameras.main.on('camerashakecomplete',function(camera,effect){
                // restart the scene
                this.cameras.main.fade(500)
            }, this)
            this.cameras.main.on('camerafadeoutcomplete', function(camera, effect){
                this.scene.restart()
            }, this)
        }


        // check we haven't passed min Y
        if(this.enemy.y<=this.enemyMinY){
            this.enemySpeed *= -1
        }

        // check we haven't passed max Y
        if(this.enemy.y >=this.enemyMaxY){
            this.enemySpeed *= -1
        }


        // check we haven't passed min Y
        if(this.enemytwo.y<=this.enemyMinY){
            this.enemySpeed2 *= -1
        }
    // check we haven't passed max Y
        if(this.enemytwo.y >=this.enemyMaxY){
            this.enemySpeed2 *= -1
        }
        


        // check we haven't passed min Y
    if(this.enemythree.y<=this.enemyMinY){
            this.enemySpeed3 *= -1
        }
        // check we haven't passed max Y
        if(this.enemythree.y >=this.enemyMaxY){
            this.enemySpeed3 *= -1
        }
        //change three dragons can move in any direction
        //enemy movement
    this.enemy.y+=this.enemySpeed
    this.enemytwo.y+=this.enemySpeed2
    this.enemythree.y+=this.enemySpeed3
    }
    
























//set up configuration of our game
let config = {
    type:Phaser.auto, //phaser will use webGL if available (if not we will use one we create)
    width: 640,
    height: 360,
    scene: gameScene
}


//create a new game
let game = new Phaser.Game(config)



