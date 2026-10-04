let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX, player0
let count = 0;

// 2D array of winning pattern for boxes numbered 0,....,8
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.color = "";
    }
}

const resetGame = () =>{
    turn0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        //console.log("box was clicked");
        if(turn0){ //if its player 0's turn:
            //box.style.color = "b0413e";
            box.innerText = "O"; // print O
            turn0 = false; // once player 0's chance is over, make its turn - 'false' so that player 1 can act
        }
        else{ //if its player 1's turn:
            box.style.color = "black";
            box.innerText = "X"; // print X
            turn0 = true; // once player 1's chance is over, make its turn - 'false'== player 0 is now 'true'
        }
        box.disabled = true; // so that already filled button cant be refilled
        count++;
        let isWinner = checkWinner();
        
        // If 9 moves are made and there is no winner, tieCond fxn is called
        if(count === 9 && !isWinner){
            tieCond();
        }
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
        msg.innerText = `Congratulations, winner is Player ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

const tieCond = () =>{
    msg.innerText = `Its a Tie!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){ //pattern is itself another array

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);