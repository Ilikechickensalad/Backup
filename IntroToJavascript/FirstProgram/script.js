

//How to make a variable
/*How to make a variable*/
/*
let scribble=1000;
var pet='bearded dragon';
const cheese=true;
console.log(scribble);
console.log(pet);
console.log(cheese);

scribble=150;
console.log(scribble)

// addition-subtraction
let a=52
let b=20
let c= a+b
console.log(c)
let d= b-a
console.log(d)
let e=pet+c
console.log(e)

// multiplication-division
let z=a*b
console.log(z)
let y=a/b
console.log(y)

let t=2/3
console.log(t)

//modulus
let odd=3%2;
console.log(odd)

if(pet=='bearded dragon'){
    console.log('you have a cool pet')
}
else{
    console.log('your pet is boring')
}

//Movie Theatre Code
let age=42;
let money=true;
if (age>=17 && money==true){
    console.log("you can watch R rated movie on your own")
if(age>41 && money==true){
        console.log('Senior discount')
    }
    
}
else if(age<17 && money){
    console.log("need a parent")
}
else if(money!=true || age<10){
    console.log('you should not go see the movie')
}

else{
    console.log("you can't go see the movie");
}

*/
// Assignment Starts Here
// Checking the health and hunger and inventory slots

//Current hitpoints, hunger and inventory slots
// Combining health and shields
let health=55
let shield=10
let hitpoints= health+shield
// Combining water levels with food levels
let food=24
let water=43
let hunger= food+water
//Player held items and backpack held items
let backpack=13
let inventory=5
let slots= backpack+inventory
//Checking to see if you are dead
if(hitpoints>=1){
    console.log("You Are Alive")
}
else if (hitpoints<=0){
    console.log("You Have Died.")
}

//checking to see if you are hungry
if (hunger>=1){
    console.log("You are not hungry")
}

else if (hunger<=0){
    console.log("You are hungry")
}

//checking to see if you have inventory space

if (slots>=99){
    console.log("Your inventory is full")
}

else {
    console.log("You have inventory space")
}





