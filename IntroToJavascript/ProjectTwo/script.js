//any console.log() is meant to make something show up in the console
//The player characters
let player={
    height:6.4,
    health:100,
    name:'Bob',
    //Showing if he eats a apple he will gain 10 health
    play: function(food){
        if(food=='apple'){
            this.health+=10;
        }
    },
    play: function(damage){
        if(damage=='hobgoblin'){
            this.health-=5;
        }
    }
}
console.log(player)
let playertwo={
    height:5.3,
    health:100,
    //Showing if he eats a apple he will gain 10 health
    play: function(food){
        if(food=='apple'){
            this.health+=10;
        }
    }
}
console.log(player)
//An enemy
let enemy={
    height:8,
    health:175,
    //Showing if he eats a smallhealingpotion he will gain 100 health
    play: function(food){
        if(food=='smallHealingPotion'){
            this.health+=100;
        }
    }
}

console.log(enemy)
//showing that the player characters are in a party
let party=[player,playertwo]
console.log(party)
//showing that the enemy and the player characters are in the same room.
let room=[player,playertwo,enemy]
console.log(room)
let i=5
while(i>0){
    player.play('apple')
    i--
}
for(a=0;a<5;a++){
    playertwo.play('apple')
}
for(b=0;b<2;b++){
    enemy.play('smallHealingPotion')
}
for(c=0;b<6;b++){
    player.play('hobgoblin')
}

enemy.play('smallHealingPotion')
console.log(player)
console.log(playertwo)
console.log(enemy)
document.write(player.health);

5*Math.random()
console.log()