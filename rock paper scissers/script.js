let userScore=0
let compScore=0

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices=document.querySelectorAll('.choice')
const msg=document.querySelector('#msg')

const genCompChoice=()=>{
    const options= ["rock","paper","scissors"]
    const randomIdx=Math.floor(Math.random()*3)
    return  options[randomIdx]
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++
        userScorePara.innerText=userScore
        console.log('you Win')
        msg.innerText=(`You Win! ${userChoice} beats ${compChoice}`)
        msg.style.backgroundColor = "green"
    }else{
        compScore++
        compScorePara.innerText=compScore
        console.log('You Lose')
        msg.innerText=(`You Lose! ${compChoice} beats ${userChoice}`)
        msg.style.backgroundColor = "red"
    }
    
}

const playGame=(userChoice)=>{
    console.log(`user choice= ${userChoice}`)
    const compChoice= genCompChoice()
    console.log(`comp choice= ${compChoice}`)
    
    if(userChoice===compChoice){
        console.log('game is draw')
        msg.innerText=('Game was draw. Play again?')
        msg.style.backgroundColor = "#081b31"
    }else {
        let userWin =true
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true

        }else if (userChoice==="paper"){
            userWin=compChoice=== "scissors" ? false : true

        }else{
        userWin=compChoice=== "rock" ? false : true}
        showWinner(userWin, userChoice, compChoice)

    }

}

choices.forEach(choice =>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute('id')
        playGame(userChoice)
    })
})