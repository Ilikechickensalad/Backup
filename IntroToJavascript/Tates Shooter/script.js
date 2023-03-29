let startButton = document.getElementById("startButton")
startButton.addEventListener("click", startGame)


//defined later
let tryAgainBtn = 0






function startGame(){


    startButton.innerHTML =("")


    //randomzie and create tButton
    let tbutton1Holder = document.getElementById("tbutton1Holder")
    tbutton1Holder.innerHTML = ('<button id="tButton1" class="button1" type="button"><div id="tButton1Div"><style> .button1 { position: absolute; left: '+ (60*Math.random()+20) +'%; top: '+ (60*Math.random()+20) +'%;"></style></div><img src="images/tButton.jpg"></button>')
    let tbutton2Holder = document.getElementById("tbutton2Holder")
    tbutton2Holder.innerHTML = ('<button id="tButton2" class="button2" type="button"><div id="tButton2Div"><style> .button2 { position: absolute; left: '+ (60*Math.random()+20) +'%; top: '+ (60*Math.random()+20) +'%;"></style></div><img src="images/tButton.jpg"></button>')




    //defines varibales and shit, needs to stay below ceration of tButton
    let tButton1 = document.getElementById("tButton1")
    let tButton1Div = document.getElementById("tButton1Div")
    let tButton2 = document.getElementById("tButton2")
    let tButton2Div = document.getElementById("tButton2Div")
    let showStats = document.getElementById("showStats")
   


    tButton1.addEventListener("click", randomizelocation1)
    tButton2.addEventListener("click", randomizelocation2)


    let amountClicked = 0
    let timer = 10




    function randomizelocation1(){
        tButton1Div.innerHTML = ("<style> .button1 { position: absolute; left: "+ (60*Math.random()+20) +"%; top: "+ (60*Math.random()+20) +"%;'><img src='images/tButton.jpg ></style>")
        amountClicked ++
        console.log("clickedBtn1")
    }
    function randomizelocation2(){
        tButton2Div.innerHTML = ("<style> .button2 { position: absolute; left: "+ (60*Math.random()+20) +"%; top: "+ (60*Math.random()+20) +"%;'><img src='images/tButton.jpg ></style>")
        amountClicked ++
        console.log("clickedBtn2")
    }


    setInterval(function(){
        timer --
        endT()
    },1000)


    function endT(){
        if (timer <= 0){
            tbutton1Holder.innerHTML = ("")
            tbutton2Holder.innerHTML = ("")
            showStats.innerHTML = ("<h1 class='conatiner'>Score: "+ amountClicked +"</h1>")
        }
    }
}
