
let ClickAudio = new Audio("click.wav");
let winnerAudio = new Audio("success-1-6297.mp3");
let resetAudio = new Audio("reset audio.mp3");
let ClickCount = 1;
let win = 0;
function CheckWin() {
    let BoxTexts = document.getElementsByClassName('boxtext');
    let Winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    Winner.forEach(e => {
        if (BoxTexts[e[0]].innerText === BoxTexts[e[1]].innerText && BoxTexts[e[1]].innerText === BoxTexts[e[2]].innerText && BoxTexts[e[0]].innerText !== " "&&BoxTexts[e[0]].innerText !== "") {
            winnerAudio.play();
            document.querySelector('.game-score').innerText = BoxTexts[e[0]].innerText + " WON!!!";
            document.querySelector(".info").innerText = "";
            win = 1;
        }
    });
}

function handleResetClick() {
    win = 0;
    document.querySelector('.game-score').innerText = " ";
    let BoxTexts = document.getElementsByClassName('boxtext');
    for (let boxText of BoxTexts) {
        boxText.innerText = " ";
    }
    resetAudio.play();
}


for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        ClickAudio.play();
        if (ClickCount % 2 !== 0) {
            this.querySelector(".boxtext").innerText = "X";
            document.querySelector(".info").innerText = "Turn for O";
        } else {
            this.querySelector(".boxtext").innerText = "O";
            document.querySelector(".info").innerText = "Turn for X";
        }
        CheckWin();
        if(win===1){
            popup();
        }
        ClickCount++;
    });
}
document.querySelector("button").addEventListener("click", handleResetClick());