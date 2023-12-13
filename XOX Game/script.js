let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restartBtn")
let boxes = Array.from(document.getElementsByClassName("box"))

let O_TEXT = "O"
let X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function startGame(){
    for(box of boxes){
        box.addEventListener("click", boxClicked)
    }
}
function boxClicked(e){
    const id = e.target.id

    if(spaces[id]==null){
        spaces[id]=currentPlayer
        boxes[id].innerText=currentPlayer
        if(playerWon()!=false){
            //buraya oyuncu kazanma sonuçlarını gir
            playerText.innerText=`${currentPlayer} has won`
            return
        }
        if(currentPlayer == X_TEXT){
            currentPlayer = O_TEXT
        }
        else{
            currentPlayer = X_TEXT
        }

    }
}
function playerWon(){
    for(combo of winningCombos){
        let [a,b,c] = combo
        if(spaces[a]!=null && spaces[a]==spaces[b] && spaces[a]==spaces[c]){
            return [a,b,c]
        }
    }
    return false
}
restartBtn.addEventListener("click", restart)
function restart(){
    spaces = Array(9).fill(null)
    for(box of boxes){
        box.innerText=""
    }
    playerText.innerText = "TIC TAC TOE"
    currentPlayer = X_TEXT

}
startGame()