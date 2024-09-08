let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector(".msg");
let count = 0;
let turnX = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
const resetGame = () => {
    turnX = true;
    count = 0;
    enableBox();
    msg.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX){
            box.innerText = "X";
            box.style.color = "red";
            turnX = false;
        }else{
            box.innerText = "O";
            box.style.color = "blue"
            turnX = true;
        }
        count++;
        box.disabled = true;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            draw();
        }
        
    })
} )

const draw = () => {
    msg.innerText = "Draw";
    msg.classList.remove("hide");
    disableBox();
}

const disableBox = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBox = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}

const checkWinner = () => {
    for(let pattern of winPattern){
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
        if(val1 === val2 && val2 === val3){
            msg.innerText = `Winner is ${val1}`;
            msg.classList.remove("hide");
            disableBox();
            return true;
        }
    }
    }
};
resetbtn.addEventListener("click",resetGame);