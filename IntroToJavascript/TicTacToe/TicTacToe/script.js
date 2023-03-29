let oneone = document.getElementById('oneone')
let onetwo = document.getElementById('onetwo')
let onethree = document.getElementById('onethree')

let twoone = document.getElementById('twoone')
let twotwo = document.getElementById('twotwo')
let twothree = document.getElementById('twothree')

let threeone = document.getElementById('threeone')
let threetwo = document.getElementById('threetwo')
let threethree = document.getElementById('threethree')

let number = 0

var x = document.getElementById("x.png");
var x = document.getElementById("o.png")

//Seeing if a box is clicked
oneone.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        oneone.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        oneone.innerHTML = ("<img src=o.png>")
    }
}
)
onetwo.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        onetwo.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        onetwo.innerHTML = ("<img src=o.png>")
    }
}
)
onethree.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        onethree.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        onethree.innerHTML = ("<img src=o.png>")
    }
}
)

twoone.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        twoone.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        twoone.innerHTML = ("<img src=o.png>")
    }
}
)
twotwo.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        twotwo.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        twotwo.innerHTML = ("<img src=o.png>")
    }
}
)
twothree.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        twothree.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        twothree.innerHTML = ("<img src=o.png>")
    }
}
)

threeone.addEventListener('click',function(){
    console.log('clicked') 
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        threeone.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        threeone.innerHTML = ("<img src=o.png>")
    }
}
)
threetwo.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        threetwo.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        threetwo.innerHTML = ("<img src=o.png>")
    }
}
)
threethree.addEventListener('click',function(){
    console.log('clicked')
    number++
    //var x = document.createElement("img src=x.png")
    //check if the number is even
    if(number % 2 == 0) {
        threethree.innerHTML = ("<img src=x.png>")
    }

    // if the number is odd
    else {
        threethree.innerHTML = ("<img src=o.png>")
    }
}
)