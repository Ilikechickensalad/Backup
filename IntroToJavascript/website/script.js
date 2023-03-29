/*
//1. Select what you are trying to change
let sign=document.getElementById('sign');
console.log(sign)
//2. Modify it
console.log(sign.textConent);
//modify
sign.textContent='Removed'
console.log(sign.textConent);
sign.innerHTML= sign.innerHTML + '<p style="color:blue";>Phil is a decent grandpa</p>'
//change style
sign.style.color = 'blue' 
//multidimensional array
let array=[[1,2,3],[4,5,6],[7,8,9]]
console.log(array)
let five=array[0][0]
console.log(five)
*/

let question={
    title:'Why are you like this?',
    alternatives:['you are very smart','because you are very attractive','you are uglier than a disney princesses house'],
    correctAnswer:2
}   
let questions=[
    {
        title:'Why are you like this?',
    alternatives:['you are very smart','because you are very attractive','you are uglier than a disney princesses house'],
    correctAnswer:2
},
    {
        title:'Why are you like this?',
    alternatives:['you are very muscular','because you are very ugly','you are very pretty'],
    correctAnswer:2
    },
    {
        title:'Why are you like this?',
    alternatives:['you are very intelligent','because you are very average looking','you are very ok','You can play golf'],
    correctAnswer:2
    },
    {
        title:'Why are you like this?',
    alternatives:['you are very strong','because you are very pretty','you are very handsome'],
    correctAnswer:2
},
    {  title:'Why are you like this?',
    alternatives:['you are very dumb','because you are very stupid','you are uglier than a disney princesses house'],
    correctAnswer:2},
    {  
        title:'Why are you like this?',
    alternatives:['you are very not smart','because you are very dumb looking','you are very meh','You can play golf'],
    correctAnswer:2
},
{
    title:'Why are you like this?',
    alternatives:['you are very eh','because you are very meh looking','you are uglier than a disney frogs house'],
    correctAnswer:2
},
{
    title:'Why are you like this?',
    alternatives:['you are very cool','because you are very meh looking','you are uglier than a disney frogs house'],
    correctAnswer:2
},
{
    title:'Why are you like this?',
    alternatives:['you are very not cool','because you are very cool looking','you are uglier than a disney frogs house'],
    correctAnswer:2
},
{
    title:'Why are you like this?',
    alternatives:['you are very not strong','because you are very not attractive','you are very not pretty'],
    correctAnswer:2
}


]
let app={
    start:function(){    
        this.currPosition=0
        this.score=0
        //arrow function approach
        let alt=document.querySelectorAll('.alternative')
        //Arrow function approach 
        alt.forEach((element,index)=>{
            //listening for events
            element.addEventListener('click',()=>{
                //check for correct answers
            this.checkAnswer(index)
            })
        })
        this.updateStats()
        this.showQuestion(question)

    },

    showQuestion:function(q){
        this.currQuestion=q
        // select element
        let titleDiv=document.getElementById('title')
        //modify it
        titleDiv.textContent=q.title
        //select by a query
        let alt=document.querySelectorAll('.alternative')
        alt.forEach(function(element,index){
            element.textContent=q.alternatives[index]
        })
    },
    checkAnswer: function(userSelected){
        if(this.currQuestion.correctAnswer==userSelected){
        //correct answer
        console.log('correct Answer')
        this.score++
        //this.score+=1
        this.showResult(true)
    }
    else{
        //wrong
        console.log('wrong answer')
        this.score--
        this.showResult(false)
    }
    this.increasePosition()
    this.updateStats()
    //show next question
    this.showQuestion(questions[this.currPosition])
    },
    increasePosition:function(){
        this.currPosition++
        //if you get to the end want to start over
        if(this.currPosition==questions.length){
            this.currPosition=0
        }
    },
    updateStats:function(){
        //select the score element
        let scoreDiv=document.getElementById('score')
        //display the score
        scoreDiv.textContent="Your Score: "+this.score
    },
    showResult: function(isCorrect){
        //select DOM element
        let resultDiv=document.getElementById('result')
        let result=''
        //check if we are right or wrong
        if(isCorrect){
            result='Correct Answer'
        }
        else{
            //get current question
            let currQuestion=questions[this.currPosition]
            //get the correct answer (index)
            let correctAnswerIndex=currQuestion.correctAnswer
            let correctAnswerText=currQuestion.alternatives[correctAnswerIndex]
            result='Wrong Answer '+correctAnswerText
        }
        resultDiv.textContent=result
    }
}

app.start()


//select element
let btn=document.getElementById('button')
//listening event
btn.addEventListener('click',function(){
    console.log('clicked')
}
)



