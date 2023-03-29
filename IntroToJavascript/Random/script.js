let tomato=0
let moretomato=1
let lesstomato=5
let clickDiv=document.getElementById('click')
let upgradeDiv=document.getElementById('upgrade')
let priceDiv=document.getElementById('price')
priceDiv=textContent=('More tomato price' + lesstomato)


//select element
let btn=document.getElementById('button')
//listening event
btn.addEventListener('click',function(){
    tomato+=moretomato
    clickDiv.textContent = ("total tomatows" + tomato)
}
)

let upgrade=document.getElementById('upgrade')

upgrade.addEventListener('click',function(){
    tomato-=lesstomato
    lesstomato*=3
    moretomato*=2
    clickDiv.textContent = ("total tomatows" + tomato)

}
)









