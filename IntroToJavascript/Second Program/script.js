//global variabls get defined at the top of the page
let balance=100
let stock=50
let price=5
//functions
function hrsToMins(hours){
   //local variable
    let result=hours*60
   console.log(result)
   return result
}
hrsToMins(6);

function daysToYears(days){
    let result=days*365
    console.log(result)
    return result
}
daysToYears(3);

//how cash registers work
function sellItem(quantity){
    //check to see if we have enough stock
    if(stock>=quantity){
        //reduce my stock
        //stock-=quantity;
        //means the same as
        stock = stock - quantity
        //balance+=price*quantity
        //means the same
        balance= balance + price * quantity 
        console.log('purchase completed', balance, 'Stock left', stock)
}
else{
    console.log("not enough Stock")
}
}
sellItem(15)

//objects
let player={
    age:4000,
    height:7,
    name:'Bob',
    health:100,
    outfit:{
        color:'black',
        size:'xl',
        underwater:true
    }
};
console.log(player)
console.log(player.name)
// Does the same thing
//console.log(player['name'])
//change attributes of a player
player.age=7;
console.log(player)
//delete an attribute
delete player.name;
//creating an attribute
player.legs='long'
console.log(player)
//access a object inside of a object
player.outfit.underwater=false
console.log(player)
//functions inside an object(method)
let hero={
    health:100,
    fun:0,
    play: function(food){
        if(food=='apple'){
            this.health+=10;
        }
        else if(food=='candy'){
            this.health+=5;
            this.fun+=5
        }
    }
}
hero.play('candy')
console.log(hero)

//while loop
function sendhelp(){
    console.log('Send Help')
}
let i=0
while(i<10){
    sendhelp();
    i++
    //i=i+1
    //i+=1
}
//for loop
for(a=0;a<10;a++){
    sendhelp();
}

//arrays also called lists
let list=['immortal groundhog','right often','has carols','118'];
console.log(list)
//change our list
list[3]=138
console.log(list);
//add to our list
list.push('alliteration')
console.log('list')
//remove last item
list.pop()
console.log('list')
//access specific array item
let groundhog=list[3]
console.log(groundhog)
//access the last item in an array
let last=list[list.length-1]
console.log(list.length)
console.log(last)
//list of objects
let database=[hero,player]
console.log(database)